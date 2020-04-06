web: gunicorn django_server.wsgi:application --log-file - --log-level debug
python manage.py collectstatic --noinput
python manage.py makemigrations
python manage.py migrate