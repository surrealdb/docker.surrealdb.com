# docker.surrealdb.com

SurrealDB is designed to be simple to install and simple to run - using just one command from your terminal. In addition to traditional installation, SurrealDB can be installed and run with HomeBrew, Docker, or using any other container orchestration tool such as Docker Compose, Docker Swarm, Rancher, or in Kubernetes. Visit the [SurrealDB install page](https://surrealdb.com/install) for more information.

This repository houses the Docker Compose configuration file located at [docker.surrealdb.com](https://docker.surrealdb.com), and also houses more advanced configuration files for Docker Compose and Docker Swarm. It enables developers to quickly spin up a multi-node persistent database cluster on a single development machine.

To get started with SurrealDB using Docker Compose, follow the instructions below.

#### 1. Install Docker on your development machine

Follow the [Docker installation instructions](https://docs.docker.com/get-docker/) to install Docker on your development machine.

 
#### 2. Fetch the default Docker Compose config file

```bash
curl -sSf https://docker.surrealdb.com -o docker-compose.yml
```

#### 3. Start the Docker Compose cluster

###### Spin up a multi-node development environment

```bash
docker compose up --pull=always -d
```

#### 4. Load the SurrealDB demo dataset and open a SurrealQL shell

```bash
# Download the mini dataset
curl -L "https://datasets.surrealdb.com/surreal-deal-store-mini.surql" -o surreal-deal-store-mini.surql

# Import the dataset
curl -v -X POST -u "root:root" -H "surreal-ns: test" -H "surreal-db: test" -H "Accept: application/json" --data-binary @surreal-deal-store-mini.surql http://localhost:8000/import

# Open the SurrealQL shell and interact with the dataset
docker exec -ti surrealdb /surreal sql --user=root --pass=root --ns=test --db=test
```

## Production Considerations

### TiKV Deployment

> Note: The configurations in this repository are intended for development and testing only.


For production deployment of TiKV, refer to the official [TiKV Deployment Documentation](https://tikv.org/docs/7.1/deploy/deploy/).

### SurrealDB Deployment

Before deploying SurrealDB in production, review its [Architecture and Deployment
strategies](https://surrealdb.com/docs/surrealdb/introduction/architecture) to
ensure your setup is aligned with your use-case.

### Monitoring SurrealDB

For guidance on enabling observability and monitoring, see the [SurrealDB Observability Documentation](https://surrealdb.com/docs/surrealdb/reference-guide/observability).
