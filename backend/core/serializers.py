from rest_framework import serializers
from .models import ModelsProcessing

class SerializerProcessing(serializers.ModelSerializer):
    average = serializers.SerializerMethodField()
    median = serializers.SerializerMethodField()

    class Meta:
        model = ModelsProcessing
        fields = ['id', 'num1', 'num2', 'num3', 'status', 'average', 'median', 'created_at']
        read_only_fields = ['id', 'status', 'average', 'median', 'created_at']

    def average(self, obj):
        return round(obj.average, 2) if obj.media is not None else None

    def median(self, obj):
        return round(obj.median, 2) if obj.median is not None else None

    def validate(self, data):
        for field in ['num1', 'num2', 'num3']:
            if not isinstance(data[field], (int, float)):
                raise serializers.ValidationError(f"the field {field} must be a number.")
        
        return data