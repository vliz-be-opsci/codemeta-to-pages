FROM nikolaik/python-nodejs

RUN apt-get update && \
    apt-get -y install rsync

#install jq to parse json
RUN apt-get install jq -y

#copy over neccesary files to docker image
COPY public /public
COPY src /src
COPY subyt /subyt
COPY package-lock.json /package-lock.json
COPY package.json /package.json
COPY entrypoint.sh /entrypoint.sh
COPY requirements.txt /requirements.txt
#print(the env variable  inputs.repo_path passed from the actins.yml file)
RUN echo $repo_path
#print( the env variable inputs.base_uri passed from the actins.yml file)
RUN echo $base_uri
#chmod the entrypoint.sh file to make it executable
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]