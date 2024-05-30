from setuptools import setup, find_packages

setup(
    name="LLM Tax W2 Demo",
    version="0.1.0",
    description="This app allows users to upload and validate W2 PDF documents.",
    author="Duncan Maina",
    author_email="duncandevs@gmail.com",
    url="https://www.linkedin.com/in/duncan-maina-499677135/",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.111.0",
        "fitz==0.0.1.dev2",
        "instructor==1.3.2",
        "openai==1.30.5",
        "pydantic==2.7.2",
        "python-dotenv==1.0.1",
    ],
    entry_points={
        'console_scripts': [
            'start-app=index:start_function',
        ],
    },
)
