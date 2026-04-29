#!/bin/bash

# Build the Docker image
docker build -t my-learnings-showcase .

# Run the container
docker run --name my-learnings-showcase -p 8080:80 my-learnings-showcase