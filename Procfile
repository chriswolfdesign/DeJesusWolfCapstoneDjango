<<<<<<< HEAD
web: gunicorn django_server.wsgi:application --log-file - --log-level debug
python manage.py makemigrations
web: gunicorn django_project.wsgi:application --log-file - --log-level debug
python manage.py collectstatic --noinput
manage.py migrate