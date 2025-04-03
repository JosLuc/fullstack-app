from django.db import models

class ModelsProcessing(models.Model):
    num1 = models.FloatField()
    num2 = models.FloatField()
    num3 = models.FloatField()
    status = models.CharField(max_length=20, default="Processing")
    average = models.FloatField(null=True, blank=True)
    median = models.FloatField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.average is not None:
            self.average = round(self.average, 2)
        if self.median is not None:
            self.median = round(self.median, 2)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Processing {self.id} - {self.status}"
