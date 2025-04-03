from django.contrib import admin
from .models import ModelsProcessing

@admin.register(ModelsProcessing)
class AdminProcessing(admin.ModelAdmin):
    list_display = ('id', 'status', 'average', 'median', 'created_at')
