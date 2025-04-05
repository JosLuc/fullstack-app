# Fullstack App

Este é um projeto fullstack que consiste em:

- **Frontend**: Angular
- **Backend**: Django
- **Mensageria**: RabbitMQ
- **Worker**: Celery + Django
- **Banco de Dados**: SQLite

## Objetivo da Aplicação

1. O usuário insere três números e clica em "Calculate".
2. A tabela exibe os números enviados e o status inicial como "Processing...".
3. Quando o worker finaliza o cálculo, a tela atualiza o status para "Successfully" e exibe os resultados (média e mediana).

### Observação sobre o Docker

No Windows, é necessário que o Docker Desktop esteja aberto para que os comandos do Docker funcionem corretamente. Já no Linux, o Docker funciona como um serviço do sistema operacional. Certifique-se de que o serviço do Docker (`dockerd`) esteja ativo antes de executar os comandos. Você pode verificar o status do serviço no Linux com:

```bash
sudo systemctl status docker
```

E, se necessário, iniciar o serviço com:

```bash
sudo systemctl start docker
```

## Como rodar a aplicação

### Pré-requisitos

Certifique-se de ter a seguinte ferramenta instalada em sua máquina:

- [Docker](https://www.docker.com/)

### Passos para rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/JosLuc/fullstack-app.git
cd fullstack-app
```

2. Suba os containers com Docker Compose:

```bash
docker compose up -d --build
```

3. Acesse a aplicação:

- A aplicação está disponível acessando: [http://localhost:4200](http://localhost:4200)

## Estrutura do Docker Compose

O arquivo `docker-compose.yml` está configurado para gerenciar os seguintes serviços:

- **frontend**: Contém o código Angular.
- **backend**: Contém o código Django.
- **rabbitmq**: Serviço de mensageria.
- **worker**: Serviço Celery para tarefas assíncronas.
- **db**: O SQLite não está no Docker Compose porque ele é um banco de dados leve e embutido, armazenado diretamente no sistema de arquivos da aplicação, e por isso não precisa ser gerenciado pelo Docker Compose.

### Comandos úteis

- Para parar os containers:

  ```bash
  docker compose down
  ```

- Para reconstruir os containers:

  ```bash
  docker compose up -d --build
  ```

# Fullstack App (English ver)

This is a fullstack project consisting of:

- **Frontend**: Angular
- **Backend**: Django
- **Messaging**: RabbitMQ
- **Worker**: Celery + Django
- **Database**: SQLite

## Application Objective

1. The user enters three numbers and clicks "Calculate."
2. The table displays the submitted numbers and the initial status as "Processing...".
3. When the worker completes the calculation, the screen updates the status to "Successfully" and displays the results (average and median).

### Note about Docker

On Windows, Docker Desktop must be open for Docker commands to work properly. On Linux, Docker runs as a system service. Make sure the Docker service (`dockerd`) is active before running the commands. You can check the service status on Linux with:

```bash
sudo systemctl status docker
```

And, if necessary, start the service with:

```bash
sudo systemctl start docker
```

## How to Run the Application

### Prerequisites

Make sure you have the following tool installed on your machine:

- [Docker](https://www.docker.com/)

### Steps to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/JosLuc/fullstack-app.git
cd fullstack-app
```

2. Start the containers with Docker Compose:

```bash
docker compose up -d --build
```

3. Access the application:

- The application is available at: [http://localhost:4200](http://localhost:4200)

## Docker Compose Structure

The `docker-compose.yml` file is configured to manage the following services:

- **frontend**: Contains the Angular code.
- **backend**: Contains the Django code.
- **rabbitmq**: Messaging service.
- **worker**: Celery service for asynchronous tasks.
- **db**: SQLite is not included in Docker Compose because it is a lightweight embedded database stored directly in the application's file system, so it does not need to be managed by Docker Compose.

### Useful Commands

- To stop the containers:

  ```bash
  docker compose down
  ```

- To rebuild the containers:

  ```bash
  docker compose up -d --build
  ```
