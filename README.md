# Headbutt Tree

Headbutt tree is used to know which Pokemon will spawn when headbutting tree


# Installation
## Requirements

- [Docker](https://www.docker.com/) is the only requirement


## Configuration

You must create a `.docker.env` file
```bash
cp docker/.docker.example.env docker/.docker.env
```

then, check if the default values fit to your needs  

You can change the default ports used if port 8080 is already used on your machine
```env
SERVER_PORT=8080
```

If the user running docker UID or GID is not 1000, you can change them to prevent permission issue,
you can find them by running `` id -u `whoami` `` or `` id -g `whoami` ``
```env
WEBUSER_UID=1000
WEBUSER_GID=1000
```

### Development

For developers, change the `NODE_ENV` var for `development`
```env
NODE_ENV=development
```

### Production

To use it in production change the `NODE_ENV` var for `production`
```env
NODE_ENV=production
```

## Initialisation

To initialize to project, you need to run this command.  
It will create the docker, install npm dependencies and start the server
```bash
make dk-build
```

# Usage

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

For other commands, see the help provided by the Makefile
```bash
make
```

If you want to override or add new rule to Makefile, juste create a file `local.mk` and modify it to your needs

# Roadmap
- Add Violet city
- Show circle and start only on tile with small trees
- Pre-select language based on browser locale
- Add a dark/light theme switch
