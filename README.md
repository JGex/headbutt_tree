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

You can change the default ports used if the port 8080 is already used on your machine
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
make build
```

## Usage

A Makefile is provided to help the developer using application's commands.  
Make do not accept arguments, else you must pass variable with the command

### Containers

### Command

# auto generated readme

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
