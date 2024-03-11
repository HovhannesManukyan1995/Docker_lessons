FROM jenkins/jenkins:latest

USER root
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    apt-get clean


USER jenkins

WORKDIR /home/hovo/Desktop/jenkins
COPY app.py .


CMD ["python3", "app.py"]
