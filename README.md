# docker.surrealdb.com

SurrealDB is designed to be simple to install and simple to run - using just one command from your terminal. In addition to traditional installation, SurrealDB can be installed and run with HomeBrew, Docker, or using any other container orchestration tool such as Docker Compose, Docker Swarm, Rancher, or in Kubernetes. Visit the [SurrealDB install page](https://surrealdb.com/install) for more information.

This repository houses the Docker Compose configuration file located at [docker.surrealdb.com](https://docker.surrealdb.com), and also houses more advanced configuration files for Docker Compose and Docker Swarm. It enables developers to quickly spin up a multi-node persistent database cluster on a single development machine.

To get started with SurrealDB using Docker Compose, follow the instructions below.

#### 1. Install Docker on your development machine

Follow the [Docker installation instructions](https://docs.docker.com/get-docker/), to install Docker.
 
#### 2. Fetch the default Docker Compose config file

```bash
curl -sSf https://docker.surrealdb.com -o docker-compose.yml
```

#### 3. Start the Docker Compose cluster

###### Spin up a multi-node development environment

```bash
docker-compose up -d
```

###### Spin up a multi-node development environment with monitoring

```bash
docker-compose --profile monitors up -d
```