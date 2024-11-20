# file that will generate ttl output from the json files using pysubyt
#first remove the old output folder contents if they exist
echo "removing the old output folder contents if they exist"
rm -rf ./outputs/*

#then run the pysubyt command
echo "running the pysubyt commands"
sema-subyt -t ./templates/  \
       -s codemeta_array ../src/data/codemeta_array.json \
       -n metadata.ttl -o outputs/metadata.ttl \
       -v base_uri "base_uri"