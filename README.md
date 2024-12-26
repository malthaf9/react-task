# React Task Deployment with Kubernetes

This project demonstrates deploying a React application using Docker and Kubernetes.

## Features
- **React App:** A simple React application.
- **Dockerized Application:** Includes a Dockerfile to containerize the app.
- **Kubernetes Deployment:** Deploys the app using Kubernetes Deployment and Service configurations.
- **NodePort Service:** Exposes the application to external traffic via a NodePort.

---

## Folder Structure
- **`Dockerfile`:** Contains the instructions to build the Docker image for the React app.
- **`deployment.yml`:** Kubernetes deployment configuration file.
- **`service.yml`:** Kubernetes service configuration file.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- Docker
- Minikube
- kubectl
- Node.js and npm (if you want to run the React app locally)

