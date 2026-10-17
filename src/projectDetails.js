export const projectDetails = [
  {
    number: "01",
    slug: "devops-docker-lab",
    title: "DevOps Docker Lab",
    category: "CONTAINERS & CI",
    summary: "Containerize an application and validate changes through automated checks.",
    objective:
      "Package an application into a repeatable container image and use a CI workflow to validate the application and Docker build.",
    architecture: [
      "Developer changes are committed to GitHub.",
      "GitHub Actions checks out the repository and prepares the Python environment.",
      "Automated tests validate application routes.",
      "The workflow builds a Docker image to check that the container can be packaged."
    ],
    roadmap: [
      "Create the application and define its expected routes.",
      "Write tests for the home and health endpoints.",
      "Create the Dockerfile and document how to run the application.",
      "Add a GitHub Actions workflow for tests and image-build validation.",
      "Run the checks and review the workflow result."
    ],
    tools: [
      { name: "Docker", version: "Not recorded" },
      { name: "Python", version: "3.14.0 recorded in the later capstone environment; project-specific version not confirmed" },
      { name: "GitHub Actions", version: "Hosted service; workflow action versions are defined in the YAML" }
    ],
    commands: [
      { command: "docker build -t devops-docker-lab .", purpose: "Build the image from the Dockerfile." },
      { command: "docker run --rm -p 8000:8000 devops-docker-lab", purpose: "Example command; adjust the port to the application's actual configuration." },
      { command: "python -m unittest discover", purpose: "Run the project's Python unit tests." }
    ],
    troubleshooting: [
      "If a test fails, inspect the assertion and application route before changing the workflow.",
      "If a Docker build fails, review the first failing Dockerfile instruction and confirm the required files are in the build context.",
      "If a port is unreachable, check the application's listening port and Docker port mapping."
    ],
    evidence: [
      "GitHub Actions workflow and repository history",
      "Application route tests",
      "Successful image-build and test results"
    ],
    repository: "https://github.com/prafulchouraddi2001-glitch/devops-docker-lab"
  },
  {
    number: "02",
    slug: "aws-deployment-lab",
    title: "AWS Deployment Lab",
    category: "CLOUD INFRASTRUCTURE",
    summary: "Practice deploying and managing application infrastructure using AWS and EC2.",
    objective:
      "Understand the steps required to provision a cloud server and make an application available in a controlled environment.",
    architecture: [
      "An AWS EC2 instance provides the compute environment.",
      "Linux is used to configure and manage the server.",
      "Network rules control which traffic can reach the instance.",
      "Application deployment and connectivity are verified after configuration."
    ],
    roadmap: [
      "Review the deployment requirements and AWS resources.",
      "Configure the EC2 instance and access method.",
      "Inspect the operating system and required packages.",
      "Configure the application and required network access.",
      "Verify connectivity and document the deployment."
    ],
    tools: [
      { name: "AWS EC2", version: "Not recorded" },
      { name: "Linux", version: "Distribution/version not recorded" },
      { name: "SSH", version: "Not recorded" }
    ],
    commands: [
      { command: "ssh -i <key-file> <user>@<public-ip>", purpose: "Connect to an instance when SSH access is configured." },
      { command: "uname -a", purpose: "Inspect kernel and operating-system information." },
      { command: "systemctl status <service>", purpose: "Check the status of a configured Linux service." }
    ],
    troubleshooting: [
      "For SSH failures, verify the instance address, username, key permissions, and security-group rules.",
      "For unreachable applications, check service status, listening ports, and inbound network rules.",
      "Avoid exposing administrative ports broadly; restrict access to trusted sources."
    ],
    evidence: [
      "Deployment configuration and command history",
      "Application and connectivity verification",
      "Documented AWS resource setup"
    ],
    repository: "https://github.com/prafulchouraddi2001-glitch/02-aws-deployment-lab"
  },
  {
    number: "03",
    slug: "jenkins-cicd-lab",
    title: "Jenkins CI/CD Lab",
    category: "PIPELINE AUTOMATION",
    summary: "Build and validate a Jenkins pipeline using a controller and connected agents.",
    objective:
      "Practice pipeline-as-code, agent execution, Docker integration, and diagnosing failed CI/CD stages.",
    architecture: [
      "The Git repository stores the application and Jenkinsfile.",
      "The Jenkins controller schedules pipeline work.",
      "A connected Jenkins agent executes the assigned stages.",
      "Pipeline commands run validation and build tasks, with results visible in the console log."
    ],
    roadmap: [
      "Prepare the Jenkins controller and agent connection.",
      "Configure the source repository and pipeline job.",
      "Define pipeline stages in a Jenkinsfile.",
      "Run the pipeline and inspect stage output.",
      "Resolve failures and verify a successful build."
    ],
    tools: [
      { name: "Jenkins", version: "2.568.3 recorded in the later capstone environment; original project version not confirmed" },
      { name: "Docker", version: "29.2.1 recorded in the later environment; original project version not confirmed" },
      { name: "Git", version: "2.55.0.windows.5 recorded in the later environment; original project version not confirmed" }
    ],
    commands: [
      { command: "docker ps", purpose: "Inspect running containers." },
      { command: "docker logs <container>", purpose: "Inspect container logs when a service or agent has a problem." },
      { command: "git status --short", purpose: "Check local repository changes before committing." }
    ],
    troubleshooting: [
      "If a pipeline cannot find an agent, verify that the agent is online and the label matches the Jenkinsfile.",
      "If a Docker command fails, check Docker CLI availability, daemon connectivity, and socket permissions.",
      "If a stage fails, start with the first error in Console Output rather than the final failure message."
    ],
    evidence: [
      "Jenkinsfile stored in Git",
      "Pipeline stage and console logs",
      "Successful execution on a connected agent"
    ],
    repository: "https://github.com/prafulchouraddi2001-glitch/03-jenkins-cicd-lab"
  },
  {
    number: "04",
    slug: "terraform-infrastructure",
    title: "Terraform Infrastructure",
    category: "INFRASTRUCTURE AS CODE",
    summary: "Manage reusable infrastructure configuration and remote state with S3.",
    objective:
      "Describe infrastructure declaratively and practise Terraform's plan-and-apply workflow with remote-state integration.",
    architecture: [
      "Terraform configuration declares the desired infrastructure.",
      "The AWS provider communicates with AWS using configured credentials.",
      "Terraform state tracks managed resources.",
      "An S3 backend is used for remote state in the project design."
    ],
    roadmap: [
      "Configure the Terraform provider and required variables.",
      "Define infrastructure resources in configuration files.",
      "Initialize the working directory and providers.",
      "Review the proposed changes with a plan.",
      "Apply only after reviewing the plan and verifying the target environment.",
      "Configure and validate remote state according to the project's backend setup."
    ],
    tools: [
      { name: "Terraform", version: "Not recorded" },
      { name: "AWS", version: "Provider version not recorded" },
      { name: "Amazon S3", version: "Not applicable as a CLI version; backend configuration is project-specific" }
    ],
    commands: [
      { command: "terraform init", purpose: "Initialize providers and backend configuration." },
      { command: "terraform fmt -check", purpose: "Check Terraform formatting." },
      { command: "terraform validate", purpose: "Validate configuration syntax and structure." },
      { command: "terraform plan", purpose: "Review proposed infrastructure changes before applying." }
    ],
    troubleshooting: [
      "If initialization fails, inspect provider requirements and backend configuration.",
      "If validation fails, check resource arguments, references, and variable declarations.",
      "If a plan proposes unexpected changes, stop and review state, variables, and resource definitions before applying."
    ],
    evidence: [
      "Terraform configuration and module structure",
      "Plan and validation results",
      "S3 remote-state configuration"
    ],
    repository: "https://github.com/prafulchouraddi2001-glitch/-04-terraform-aws-infrastructure"
  },
  {
    number: "05",
    slug: "ansible-server-configuration",
    title: "Ansible Server Configuration",
    category: "CONFIGURATION MANAGEMENT",
    summary: "Automate repeatable Linux server configuration using Ansible playbooks.",
    objective:
      "Represent configuration tasks as reusable YAML playbooks and practise applying them consistently to target hosts.",
    architecture: [
      "An inventory identifies the target hosts.",
      "Playbooks declare the desired configuration.",
      "Ansible connects to managed hosts and executes the required modules.",
      "Task results report changes or failures."
    ],
    roadmap: [
      "Create an inventory for the intended hosts.",
      "Define playbook tasks using Ansible modules.",
      "Check connectivity and access to managed hosts.",
      "Run syntax validation before execution.",
      "Apply the playbook and inspect changed or failed tasks.",
      "Run it again to verify repeatability where the tasks support idempotency."
    ],
    tools: [
      { name: "Ansible", version: "Not recorded" },
      { name: "YAML", version: "Specification; no separate tool version" },
      { name: "Linux", version: "Distribution/version not recorded" }
    ],
    commands: [
      { command: "ansible --version", purpose: "Inspect the installed Ansible version and configuration paths." },
      { command: "ansible-inventory -i inventory --list", purpose: "Inspect parsed inventory; adjust the inventory path as needed." },
      { command: "ansible-playbook --syntax-check -i inventory playbook.yml", purpose: "Check playbook syntax before execution." }
    ],
    troubleshooting: [
      "For unreachable hosts, check inventory addresses, SSH access, credentials, and network connectivity.",
      "For undefined variables, inspect variable names, scope, and precedence.",
      "For repeated changes on every run, review whether the task uses an appropriate idempotent module."
    ],
    evidence: [
      "Inventory and playbook files",
      "Syntax-check and execution output",
      "Repeatable configuration results"
    ],
    repository: "https://github.com/prafulchouraddi2001-glitch/05-ansible-server-configuration"
  },
  {
    number: "06",
    slug: "kubernetes-monitoring-storage",
    title: "Kubernetes Monitoring & Storage",
    category: "ORCHESTRATION & OBSERVABILITY",
    summary: "Explore Kubernetes workloads, persistent storage, Prometheus, and Grafana.",
    objective:
      "Deploy and observe workloads while practising readiness, storage claims, and persistence across Pod replacement.",
    architecture: [
      "Kubernetes Deployments manage workload Pods.",
      "Services provide stable network access to selected Pods.",
      "PersistentVolumeClaims request storage for workloads.",
      "Prometheus collects configured metrics and Grafana visualizes available data."
    ],
    roadmap: [
      "Inspect the cluster, nodes, namespaces, and existing resources.",
      "Deploy workloads and verify Pod readiness.",
      "Configure Services and check their endpoints.",
      "Create and inspect PersistentVolumeClaims and their bound storage.",
      "Test persistence after recreating a Pod.",
      "Inspect Prometheus targets and Grafana dashboards."
    ],
    tools: [
      { name: "Kubernetes", version: "v1.34.0 recorded in the existing kind cluster; original project version may differ" },
      { name: "kind", version: "Not recorded" },
      { name: "Prometheus", version: "Not recorded" },
      { name: "Grafana", version: "Not recorded" }
    ],
    commands: [
      { command: "kubectl get pods -o wide", purpose: "Inspect Pod readiness, status, IPs, and nodes." },
      { command: "kubectl get svc,pvc,pv", purpose: "Inspect Services and persistent-storage resources." },
      { command: "kubectl describe pod <pod-name>", purpose: "Inspect Pod events and configuration when it is not healthy." },
      { command: "kubectl logs <pod-name>", purpose: "Inspect application logs." },
      { command: "kubectl rollout status deployment/<name>", purpose: "Wait for a Deployment rollout to complete." }
    ],
    troubleshooting: [
      "For Pending Pods, inspect events and resource requests.",
      "For unbound claims, check the StorageClass, access modes, capacity, and binding events.",
      "For failed readiness probes, verify the probe path, port, timing, and application startup.",
      "For missing metrics, check Prometheus targets and scrape configuration before troubleshooting dashboards."
    ],
    evidence: [
      "Deployment and Service status",
      "PersistentVolumeClaim binding and persistence checks",
      "Prometheus target and Grafana dashboard verification"
    ],
    repository: "https://github.com/prafulchouraddi2001-glitch/06-kubernetes-monitoring"
  }
]
