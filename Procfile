web: gunicorn django_server.wsgi:application --log-file - --log-level debug
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput