FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /todoapp
WORKDIR /todoapp
ADD requirements.txt /todoapp/
RUN pip install -r requirements.txt
ADD . /todoapp/
