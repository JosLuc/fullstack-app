from django.urls import path
from .views import ViewProcessing, ViewStatus, ViewProcessingDelete

urlpatterns = [
    path('processing/', ViewProcessing.as_view(), name='processing'),
    path('status/<int:id>/', ViewStatus.as_view(), name='status'),
    path('processing_delete/<int:id>/', ViewProcessingDelete.as_view(), name='processing_delete'),
]