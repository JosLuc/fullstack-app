from celery import shared_task
from .models import ModelsProcessing
import statistics

@shared_task
def numbers_processing(processing_id):
    processing = ModelsProcessing.objects.get(id=processing_id)
    numbers = [processing.num1, processing.num2, processing.num3]
    processing.average = sum(numbers) / len(numbers)
    processing.median = statistics.median(numbers)
    processing.status = "Successfully"
    processing.save()