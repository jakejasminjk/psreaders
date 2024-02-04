# Setting up the Extension API Server

## Prerequisites

Make sure you have the following installed on your system:

- [Python 3.9](https://www.python.org/downloads/) or later
- [Git](https://git-scm.com/)
- [virtualenv]

## Steps

1. **Create a Virtual Environment**
    Create a virtual environment to isolate project dependencies. Run the following commands:
    ```bash
    virtualenv venv --python=python3.9
    ```
2. **Install Dependencies**
    With the virtual environment activated, install project dependencies using `pip`:
    ```bash
    pip install -r requirements.txt
    ```

Continue on with the below steps before starting `main.py`.

# Setting up Self-Signed Certificates for Flask using mkcert

## Introduction

This guide will walk you through the process of generating and using self-signed SSL certificates for a Flask application using `mkcert`. This is required for getting the flask server up and running on HTTPS. HTTPS is required on Google Chrome for the extension.

## Steps

1. **Install mkcert:**

    Follow the instructions on the [mkcert GitHub repository](https://github.com/FiloSottile/mkcert#installation) to install mkcert on your system.

2. **Generate a Local Certificate Authority (CA):**

    Run the following command to create a local CA and install it in your system's trust store:

    ```bash
    mkcert -install
    mkcert -key-file key.pem -cert-file cert.pem localhost
    ```

The above certificates are required to run Flask on https via `app.run(ssl_context=('cert.pem', 'key.pem'), debug=True)` in `main.py`.

## Lastly
To ensure everything is set up correctly, you can run a test command or start your application:
```bash
python main.py
```
