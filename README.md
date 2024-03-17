# Headbutt Tree

Headbutt tree is used to know which Pokemon will spawn when headbutting tree


## Installation
### Requirements

- [Docker](https://www.docker.com/) is the only requirement


### Configuration

You must create a `.docker.env` file
```bash
cp docker/.docker.example.env docker/.docker.env
```

then, check if the default values fit to your needs  

You can change the default ports used if port 8080 is already used on your machine
```env
SERVER_PORT=80
```

If your user UID or GID is not 1000, you can change them to prevent permission issue,
you can find them by running `` id -u `whoami` `` or `` id -g `whoami` ``
```env
WEBUSER_UID=1000
WEBUSER_GID=1000
```

### Initialisation

To initialize to project, you need to run this command.  
It will create the docker, install npm dependencies and start the server
```bash
make dk-build
```

## Usage

A Makefile is provided to help the developer using application's commands.  
Make do not accept arguments, else you must pass variable with the command  

Start the containers
```bash
make dk-up
```

Stop the containers
```bash
make dk-down
```

Restart the containers
```bash
make dk-restart
```

If you want to see the server logs
```bash
make dk-log
```

To install a new package
```bash
make node-install PACKAGE="package name"
```

For others commands, see the help provided by the Makefile
```bash
Make
```

## Roadmap
### v1
- Add stars and circles on the map to know where to find Pokemons
- add pre-commit hook with the linter
