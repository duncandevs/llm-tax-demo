# LLM TAX DEMO

This app allows users to convert their W2 PDF docs to JSON using ChatGPT.
It provides a backwards compatible API complete with backend and front end validations.
Making use of the following technologies:

1. Instructor is used to patch the open ai client ensuring reliability and consistency of the LLM's data structures. https://python.useinstructor.com/
2. Pydantic is used to define the data models. Including optional fields and any other field validation requirements
3. Zod is used to validate the json schema on the front end and gracefully handle errors if the api returns an unknown json schema

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

Once backend and frontend are running View the app on:
```bash
localhost:3000
```

## Usage
See the example PDF in the examples folder to test the app
