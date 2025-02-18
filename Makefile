# Default script to run
.DEFAULT_GOAL := help
.PHONY: help


####
## Makefile var
####

# Compose commande use to execute docker-compose command
COMPOSE=docker compose --file ./docker/docker-compose.yaml --env-file ./docker/.docker.env
# Docker Compose command to execute a command inside a docker
CMD_PREFIX_EXEC=$(COMPOSE) exec
# Docker Compose command use to execute command in php container
CMD_PREFIX_NODE=$(CMD_PREFIX_EXEC) headbutt-tree-node /bin/sh -c
# Docker Compose command use to execute root command in php container
CMD_PREFIX_NODE_ROOT=$(CMD_PREFIX_EXEC) --user root headbutt-tree-node /bin/sh -c
# Display a blank line and `[CMD]` before a command
PRE_CMD=printf "\033[1;33m\r\n********************************************\r\n[CMD] \033[0m"


####
## Variable user can pass as arguments
####
CMD=/bin/sh
# log size to show
TAIL=20


####
## General commands
####

help: ## Affiche l'aide
	@echo ""
	@echo "\033[1;33m Usage\033[0m :"
	@echo ""
	@echo "\033[0;32m   make [rule] ([VAR_1=\"VALUE 1\"] [VAR_2=VALUE_2])\033[0m"
	@echo ""
	@echo "\033[1;33m Rules\033[0m :"
	@echo ""
	@grep -E '^([a-zA-Z0-9\-]+): ?(.*)? ## (.*)$$' ./Makefile \
	| sed -n 's/^\(.*\): \(.*\)\(##.*\)/   \1\3/p' \
	| column -t -s '##'
	@echo ""
	@echo "\033[1;33m Personal rules\033[0m :"
	@echo ""
ifneq (, $(wildcard ./Makefile.local))
	@grep -E '^([a-zA-Z0-9\-]+): ?(.*)? ## (.*)$$' ./Makefile.local \
	| sed -n 's/^\(.*\): \(.*\)\(##.*\)/   \1\3/p' \
	| column -t -s '##'
endif


####
## General commands
####

start: dk-build ## Build and start the containers present in the docker-compose
	@$(PRE_CMD)
	$(CMD_PREFIX_NODE) "npm install"

####
## Compose commands
####

dk-up: ## Build and start the containers present in the docker-compose
	@$(PRE_CMD)
	$(COMPOSE) up --detach --remove-orphans

dk-down: ## Stop all containers present in the docker-compose
	@$(PRE_CMD)
	$(COMPOSE) stop

dk-restart: dk-down dk-up ## Stop, pull and start the containers present in the docker-compose

dk-build: dk-down ## Stop, pull, re-build and start all the containers
	@$(PRE_CMD)
	$(COMPOSE) pull
	@$(PRE_CMD)
	$(COMPOSE) up --build --force-recreate --detach --remove-orphans

dk-purge: ## Remove all the containers present in the docker-compose
	@$(PRE_CMD)
	$(COMPOSE) down --rmi all --remove-orphans

dk-log: ## TAIL="20" display $(TAIL) last logs of the container $(CONTAINER) (all by defaut)
	@$(PRE_CMD)
	$(COMPOSE) logs -f --tail="$(TAIL)" $(CONTAINER)


####
## php docker commands
####

node-exec: ## CMD="/bin/sh" Execute a command in the `node` container
	@$(PRE_CMD)
	$(CMD_PREFIX_NODE) "$(CMD)"

node-root-exec: ## CMD="/bin/sh" Execute a command in the `node` container as root
	@$(PRE_CMD)
	$(CMD_PREFIX_NODE_ROOT) "$(CMD)"

node-install: ## PACKAGE="" install an npm package
	@$(PRE_CMD)
	$(CMD_PREFIX_NODE) "npm install $(PACKAGE) --save"


####
## Personal commands
####

-include local.Makefile
