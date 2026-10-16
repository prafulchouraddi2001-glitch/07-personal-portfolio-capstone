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
        REPOSITORY_URL = 'https://github.com/prafulchouraddi2001-glitch/07-personal-portfolio-capstone.git'
    }

    stages {
        stage('Checkout') {
            steps {
                sh '''
                    rm -rf /tmp/portfolio-capstone-${BUILD_NUMBER}
                    git clone --depth 1 --branch main "$REPOSITORY_URL" "/tmp/portfolio-capstone-${BUILD_NUMBER}"
                '''
            }
        }

        stage('Validate Frontend') {
            steps {
                sh '''
                    docker run --rm node:24-alpine sh -lc '
                        apk add --no-cache git &&
                        git clone --depth 1 --branch main https://github.com/prafulchouraddi2001-glitch/07-personal-portfolio-capstone.git /tmp/portfolio &&
                        cd /tmp/portfolio &&
                        npm ci &&
                        npm run lint &&
                        npm run build
                    '
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    cd "/tmp/portfolio-capstone-${BUILD_NUMBER}"
                    tar -czf - .dockerignore Dockerfile package.json package-lock.json src public index.html vite.config.js eslint.config.js | docker build -t "$PORTFOLIO_IMAGE" -
                    docker image inspect "$PORTFOLIO_IMAGE" --format 'Image built successfully: {{.Id}}'
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
