# Fullstack App

Este é um projeto fullstack que consiste em:

- **Frontend**: Angular
- **Backend**: Django
- **Mensageria**: RabbitMQ
- **Worker**: Celery + Django
- **Banco de Dados**: SQLite/PostgreSQL

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
