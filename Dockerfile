FROM node

#VOLUME . /myP

#RUN npm install -g babel-cli
#RUN cd /myP/indecision-app && yarn init -y
WORKDIR /myP/indecision-app
RUN yarn add babel-preset-react babel-preset-env
#RUN yarn global add live-server
RUN yarn add live-server babel-cli webpack
#CMD ["/bin/bash"]
CMD ["yarn", "run", "serve"]
