# RUN TodoApp
From the project root directory, execute:
```
cd frontend
npm install
cd ..
docker-compose build
docker-compose run backend sh
python manage.py migrate
exit
docker-compose up
``` 
