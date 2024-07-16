pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/user/sample-project.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                // Add your build steps here, e.g., sh 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Add your test steps here, e.g., sh 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deploy steps here, e.g., sh 'scp target/*.jar user@server:/path/to/deploy'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
