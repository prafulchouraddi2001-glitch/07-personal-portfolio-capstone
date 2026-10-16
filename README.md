# DevOps Portfolio — Praful Chouraddi

A responsive personal portfolio website built with React and Vite, containerized with Docker, validated through a Jenkins CI pipeline, and deployed to Kubernetes using kind.

## Project Overview

This project demonstrates a practical DevOps workflow from source control to a running Kubernetes application.

**Pipeline:** GitHub → Jenkins → Frontend validation → Docker image build → kind image loading → Kubernetes rolling deployment → HTTP verification

## Technology Stack

- **Frontend:** React, Vite, JavaScript, CSS
- **Source control:** Git and GitHub
- **CI/CD:** Jenkins Declarative Pipeline
- **Containers:** Docker, multi-stage Dockerfile, Nginx
- **Orchestration:** Kubernetes, kind
- **Validation:** ESLint, Vite production build, HTTP health verification

## Architecture

1. Source code and the `Jenkinsfile` are maintained in GitHub.
2. Jenkins checks out the repository using a connected Jenkins agent.
3. The pipeline installs dependencies with `npm ci`, runs ESLint, and builds the production frontend.
4. Docker builds a production image using a multi-stage build: Node.js builds the frontend, and Nginx serves the generated static files.
5. The built image is loaded into the existing kind cluster.
6. Kubernetes performs a rolling update of the portfolio Deployment.
7. The Deployment and Service are verified, including an in-cluster HTTP request.

The frontend validation and Docker image build are automated in Jenkins. Loading the image into kind and updating Kubernetes were performed as separate deployment steps during this implementation.

## Run Locally

Requirements: Node.js 24 and npm.

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Build and Run with Docker

Build the production image:

```bash
docker build -t portfolio-capstone:1.0.0 .
```

Run the container:

```bash
docker run --rm -d --name portfolio-capstone -p 8081:80 portfolio-capstone:1.0.0
```

Open `http://localhost:8081`.

Check the HTTP response:

```bash
curl -I http://localhost:8081/
```

Stop the example container when finished:

```bash
docker stop portfolio-capstone
```

## Kubernetes Deployment

The Kubernetes manifests are in the `k8s/` directory.

Apply the Deployment and Service:

```bash
kubectl --context kind-devops-k8s apply -f k8s/
```

Check rollout and Pods:

```bash
kubectl --context kind-devops-k8s rollout status deployment/portfolio
kubectl --context kind-devops-k8s get deployment,pods,service -o wide
```

For this local kind setup, load an image into the existing cluster before deploying it:

```bash
kind load docker-image portfolio-capstone:1.0.0 --name devops-k8s
```

To update the Deployment to a locally available image:

```bash
kubectl --context kind-devops-k8s set image deployment/portfolio portfolio=portfolio-capstone:1.0.0
kubectl --context kind-devops-k8s rollout status deployment/portfolio --timeout=120s
```

Verify the application through the Kubernetes Service:

```bash
kubectl --context kind-devops-k8s run portfolio-check --rm -i --restart=Never --image=curlimages/curl:latest -- curl -fsS -o /dev/null -w 'HTTP Status: %{http_code}\n' http://portfolio/
```

These commands assume the existing `devops-k8s` kind cluster and its context are available. For a different cluster, update the context and image-loading steps accordingly.

## Jenkins CI Pipeline

The `Jenkinsfile` defines the pipeline stages:

1. **Checkout:** Clone the portfolio repository.
2. **Validate Frontend:** Run `npm ci`, `npm run lint`, and `npm run build`.
3. **Build Docker Image:** Build and inspect a uniquely tagged Docker image.

The verified Jenkins build produced `portfolio-capstone:jenkins-3`. The image was then loaded into kind and deployed through a separate rollout.

The Jenkins agent requires Git, Docker CLI access to the intended Docker engine, and network access to the public GitHub repository and container registry.

## Kubernetes Resources

- `k8s/deployment.yaml` — two replicas, container image, resource requests and limits, and readiness probe.
- `k8s/service.yaml` — ClusterIP Service exposing the portfolio Pods inside the cluster.

## Key Engineering Practices

- Reproducible dependency installation with `npm ci`.
- Frontend linting and production-build validation.
- Multi-stage Docker image to separate build and runtime dependencies.
- Versioned Docker image tags.
- Kubernetes readiness probes and resource requests/limits.
- Rolling updates and rollout-status verification.
- In-cluster HTTP testing.
- Git-based version control and pipeline-as-code.

## Future Improvements

- Automate image delivery and Kubernetes deployment in a controlled CD stage.
- Add automated tests for the frontend.
- Add image vulnerability scanning and artifact retention.
- Add monitoring, logging, and deployment notifications.
- Replace local kind deployment with an appropriately secured remote environment when needed.

## Author

**Praful Chouraddi**
Aspiring DevOps Engineer
