# LLM TAX DEMO

This app allows users to upload and validate W2 PDF documents.
It Utilizes ChatGPT and Intructor to patch the client.
Pydantic is used to validate the model schemas in order to create a backwards compatible api

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/duncandevs/llm-tax-demo.git
    cd llm-tax-demo
    ```

2. **Install the backend dependencies**:
    from root cd into back-end
    ```bash
    cd back-end
    ```

    ```bash
    pip install -e .
    ```

3. **Set the OpenAI key**:
    ```bash
    replace OPEN_AI_KEY in back-end .env file with your openai key
    ```

4. **Install the front end dependencies**
    from root cd into front-end

    ```bash
    cd front-end
    ```

    run install command with yarn
    ```bash
    yarn install
    ```

## Starting the App

To start the back-end, run the following command:

```bash
start-app
```

To start the front-end, run the following command:

```bash
yarn dev
```
