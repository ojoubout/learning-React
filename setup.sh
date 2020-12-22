#!/bin/bash

docker-machine create -d "virtualbox" mymachine
docker-machine start mymachine
eval $(docker-machine env mymachine)

docker build . -t mynode

(docker start react || docker run -it -d --name=react -d -v ~/dev/react:/myP --network host -e CHOKIDAR_USEPOLLING=true -p 80:80 -p 8080:8080 mynode) && \
	open http://$(docker-machine ip mymachine):8080
