FROM node

#VOLUME . /myP

RUN npm install -g babel-cli
#RUN cd /myP/indecision-app && yarn init -y
RUN yarn add babel-preset-react babel-preset-env
RUN yarn global add live-server

CMD ["live-server", "/myP/indecision-app/public"]
