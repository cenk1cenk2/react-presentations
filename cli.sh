#!/bin/bash

source <(curl -s "https://gist.githubusercontent.com/cenk1cenk2/0446f3be22a39c9f5fe5ee1cfb3cca63/raw/cli.sh")

print_header

# VARIABLES
PACKAGE_FOLDER=.
CONTAINER_NAME=monorepo
WORKSPACE_ONLY=true
ENABLE_LERNA=true

run_cli ${*:1}
