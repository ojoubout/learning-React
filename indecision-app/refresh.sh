#!/bin/bash

FIRST_ARG="src/app.js"
SECOND_ARG="public/scripts/app.js"
if [ $# -eq 1 ]
then
	FIRST_ARG=$1
elif [ $# -eq 2 ]
then
	FIRST_ARG=$1
	SECOND_ARG=$2
fi

babel $FIRST_ARG --out-file=$SECOND_ARG --presets=env,react
