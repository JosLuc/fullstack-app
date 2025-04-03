from rest_framework.test import APITestCase
from rest_framework import status
from .models import ModelsProcessing

class APITestCaseProcessing(APITestCase):
    # Test the POST /processing/ endpoint
    # Check if a valid request creates a new processing entry with status "Processing"
    def test_post_processing(self):
        data = {"num1": 10, "num2": 20, "num3": 30}
        response = self.client.post('/core/processing/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['status'], "Processing")
        self.assertTrue(ModelsProcessing.objects.filter(id=response.data['id']).exists())

    # Test the GET /status/{id}/ endpoint
    # Check if the status and data of an existing processing entry are returned correctly
    def test_get_status(self):
        processing = ModelsProcessing.objects.create(num1=10, num2=20, num3=30, status="Successfully", average=20.0, median=20.0)
        response = self.client.get(f'/core/status/{processing.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['status'], "Successfully")

    # Test if the average and median are correctly formatted with 2 decimal places
    def test_average_median_format(self):
        processing = ModelsProcessing.objects.create(num1=10, num2=20, num3=33.3333, status="Successfully", average=21.1111, median=20.0)
        self.assertEqual(processing.average, 21.11) 
        self.assertEqual(processing.median, 20.0)  

    # Test the DELETE /Processing/{id}/ endpoint
    # Check if a processing entry with status "Successfully" can be successfully deleted
    def test_delete_processing_successfully(self):
        processing = ModelsProcessing.objects.create(num1=10, num2=20, num3=30, status="Successfully", average=20.0, median=20.0)
        response = self.client.delete(f'/core/Processing/{processing.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(ModelsProcessing.objects.filter(id=processing.id).exists())

    # Test the DELETE /Processing/{id}/ endpoint
    # Check if a processing entry with a status other than "Successfully" cannot be deleted
    def test_delete_no_processing_successfully(self):
        processing = ModelsProcessing.objects.create(num1=10, num2=20, num3=30, status="Processing", average=None, median=None)
        response = self.client.delete(f'/core/Processing/{processing.id}/')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertTrue(ModelsProcessing.objects.filter(id=processing.id).exists())