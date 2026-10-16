pipeline {
    agent {
        label 'jenkins-agent'
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    environment {
        PORTFOLIO_IMAGE = "portfolio-capstone:jenkins-${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Validate and Build Frontend') {
            steps {
                sh '''
                    docker run --rm \
                        -v "$WORKSPACE:/app" \
                        -w /app \
                        node:24-alpine \
                        sh -lc 'npm ci && npm run lint && npm run build'
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t "$PORTFOLIO_IMAGE" .
                    docker image inspect "$PORTFOLIO_IMAGE" \
                        --format 'Image built successfully: {{.Id}}'
                '''
            }
        }
    }

    post {
        success {
            echo 'Portfolio CI pipeline completed successfully.'
        }
        failure {
            echo 'Portfolio CI pipeline failed. Review the stage logs.'
        }
        always {
            echo 'Pipeline execution finished.'
        }
    }
}
