# Backend Application

Este documento descreve como configurar e rodar a aplicação backend utilizando Django e Celery.

## Passo a Passo

### 1. Clone o repositório

```bash
git clone https://github.com/JosLuc/fullstack-app.git
cd fullstack-app/backend
```

### 2. Crie e ative um ambiente virtual

```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

### 3. Instale as dependências

```bash
pip install -r requirements.txt
```

### 4. Instale e configure o RabbitMQ

#### 4.1 Instale o RabbitMQ

- **No Linux (Ubuntu/Debian):**
  ```bash
  sudo apt update
  sudo apt install rabbitmq-server
  ```
- **No macOS (usando Homebrew):**
  ```bash
  brew install rabbitmq
  ```
- **No Windows:**
  Baixe e instale o RabbitMQ a partir do site oficial: [https://www.rabbitmq.com/download.html](https://www.rabbitmq.com/download.html).

#### 4.2 Inicie o RabbitMQ

- **No Linux/macOS:**
  ```bash
  sudo service rabbitmq-server start
  ```
- **No Windows:**
  Inicie o serviço RabbitMQ manualmente ou via interface gráfica.

### 5. Aplique as migrações do banco de dados

```bash
python manage.py migrate
```

### 6. Inicie o servidor de desenvolvimento do Django

```bash
python manage.py runserver
```

### 7. Inicie o worker do Celery

Em um terminal separado, execute:

```bash
celery -A django_api worker --loglevel=info
```

Verifique se o Celery está processando tarefas corretamente.

## Visualizando o Banco de Dados

Para facilitar a visualização do banco de dados SQLite, recomendo instalar a extensão **SQLite Viewer** no Visual Studio Code. Essa extensão permite abrir e explorar o banco diretamente no editor.

## Dados Processados

Se quiser verificar os dados que foram enviados para o banco, consulte o arquivo `core_modelsprocessing`. Ele contém as informações e a lógica relacionadas ao processamento e inserção dos dados.

## Observações

- Certifique-se de que o RabbitMQ está instalado corretamente antes de iniciar o Celery.

# Backend (English ver)

This document describes how to set up and run the backend application using Django and Celery.

## Step-by-Step Guide

### 1. Clone the Repository

```bash
git clone https://github.com/JosLuc/fullstack-app.git
cd fullstack-app/backend
```

### 2. Create and Activate a Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Install and Configure RabbitMQ

#### 4.1 Install RabbitMQ

- **On Linux (Ubuntu/Debian):**
  ```bash
  sudo apt update
  sudo apt install rabbitmq-server
  ```
- **On macOS (using Homebrew):**
  ```bash
  brew install rabbitmq
  ```
- **On Windows:**
  Download and install RabbitMQ from the official website: [https://www.rabbitmq.com/download.html](https://www.rabbitmq.com/download.html).

#### 4.2 Start RabbitMQ

- **On Linux/macOS:**
  ```bash
  sudo service rabbitmq-server start
  ```
- **On Windows:**
  Start the RabbitMQ service manually or via the graphical interface.

### 5. Apply Database Migrations

```bash
python manage.py migrate
```

### 6. Start the Django Development Server

```bash
python manage.py runserver
```

### 7. Start the Celery Worker

In a separate terminal, run:

```bash
celery -A django_api worker --loglevel=info
```

Ensure that Celery is processing tasks correctly.

## Viewing the Database

To easily view the SQLite database, I recommend installing the **SQLite Viewer** extension in Visual Studio Code. This extension allows you to open and explore the database directly in the editor.

## Processed Data

If you want to check the data sent to the database, refer to the `core_modelsprocessing` file. It contains the information and logic related to data processing and insertion.

## Notes

- Make sure RabbitMQ is properly installed before starting Celery.
