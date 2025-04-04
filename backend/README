# Backend - Django e Celery

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

## Observações

- Certifique-se de que o RabbitMQ está instalado corretamente antes de iniciar o Celery.
