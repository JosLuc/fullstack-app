from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ModelsProcessing
from .serializers import SerializerProcessing
from .tasks import numbers_processing

class ViewProcessing(APIView):
    def post(self, request):
        serializer = SerializerProcessing(data=request.data)
        if serializer.is_valid():
            processing = serializer.save()
            numbers_processing.delay(processing.id)
            return Response(
                {"id": processing.id, "status": processing.status},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ViewStatus(APIView):
    def get(self, request, id):
        processing = get_object_or_404(ModelsProcessing, id=id)
        serializer = SerializerProcessing(processing)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ViewProcessingDelete(APIView):
    def delete(self, request, id):
        processing = get_object_or_404(ModelsProcessing, id=id)
        if processing.status != "Successfully":
            return Response(
                {"error": "Only items with the status 'Successfully' can be removed.."},
                status=status.HTTP_400_BAD_REQUEST
            )
        processing.delete()
        return Response({"message": "Successfully removed processing."}, status=status.HTTP_204_NO_CONTENT)