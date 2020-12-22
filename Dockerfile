FROM node

#VOLUME . /myP
#RUN npm install -g babel-cli
#RUN cd /myP/indecision-app && yarn init -y
WORKDIR /myP/indecision-app
RUN apt-get update && apt-get install -y vim
RUN yarn add babel-preset-react babel-preset-env babel-core bable-loader
#RUN yarn global add live-server
ENV CHOKIDAR_USEPOLLING=true
RUN yarn add live-server babel-cli webpack react react-dom react-modal webpack-dev-server css-loader style-loader \
	sass-loader node-sass normalize.css
CMD ["/bin/bash"]
#CMD ["yarn", "run", "dev-server"]
