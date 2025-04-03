from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
import platform

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_api.settings')

app = Celery('django_api')

app.config_from_object('django.conf:settings', namespace='CELERY')

if platform.system() == 'Windows':
    app.conf.worker_pool = 'solo'

app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')