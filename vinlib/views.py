# # from django.shortcuts import render

# # from django.http import HttpResponse, JsonResponse
# # from django.views.decorators.csrf import csrf_exempt
# # from rest_framework.parsers import JSONParser
# # from vinlib.models import Vinlib
# # from vinlib.serializers import VinlibSerializer


# # from rest_framework import status
# # from rest_framework.decorators import api_view
# # from rest_framework.response import Response
# # from vinlib.models import Vinlib
# # from vinlib.serializers import VinlibSerializer


# from vinlib.models import Vinlib
# from vinlib.serializers import VinlibSerializer
# from django.http import Http404
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status


# from vinlib.models import Vinlib
# from vinlib.serializers import VinlibSerializer
# from rest_framework import mixins
# from rest_framework import generics


# class VinlibDetail(mixins.RetrieveModelMixin,
#                     mixins.UpdateModelMixin,
#                     mixins.DestroyModelMixin,
#                     generics.GenericAPIView):
#     queryset = Vinlib.objects.all()
#     serializer_class = VinlibSerializer

#     def get(self, request, *args, **kwargs):
#         return self.retrieve(request, *args, **kwargs)

#     def put(self, request, *args, **kwargs):
#         return self.update(request, *args, **kwargs)

#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)


# class VinlibList(mixins.ListModelMixin,
#                   mixins.CreateModelMixin,
#                   generics.GenericAPIView):
#     queryset = Vinlib.objects.all()
#     serializer_class = VinlibSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)



# # class VinlibList(APIView):
# #     """
# #     List all vinlib, or create a new vinlib.
# #     """
# #     def get(self, request, format=None):
# #         vinlib = Vinlib.objects.all()
# #         serializer = VinlibSerializer(vinlib, many=True)
# #         return Response(serializer.data)

# #     def post(self, request, format=None):
# #         serializer = VinlibSerializer(data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data, status=status.HTTP_201_CREATED)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # class VinlibDetail(APIView):
# #     """
# #     Retrieve, update or delete a vinlib instance.
# #     """
# #     def get_object(self, pk):
# #         try:
# #             return Vinlib.objects.get(pk=pk)
# #         except Vinlib.DoesNotExist:
# #             raise Http404

# #     def get(self, request, pk, format=None):
# #         vinlib = self.get_object(pk)
# #         serializer = VinlibSerializer(vinlib)
# #         return Response(serializer.data)

# #     def put(self, request, pk, format=None):
# #         vinlib = self.get_object(pk)
# #         serializer = VinlibSerializer(vinlib, data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# #     def delete(self, request, pk, format=None):
# #         vinlib = self.get_object(pk)
# #         vinlib.delete()
# #         return Response(status=status.HTTP_204_NO_CONTENT)


# # @csrf_exempt
# # def vinlib_list(request):
# #     """
# #     List all code vinlib, or create a new vinlib.
# #     """
# #     if request.method == 'GET':
# #         vinlib = Vinlib.objects.all()
# #         serializer = VinlibSerializer(vinlib, many=True)
# #         return JsonResponse(serializer.data, safe=False)

# #     elif request.method == 'POST':
# #         data = JSONParser().parse(request)
# #         serializer = VinlibSerializer(data=data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return JsonResponse(serializer.data, status=201)
# #         return JsonResponse(serializer.errors, status=400)


# # @csrf_exempt
# # def vinlib_detail(request, pk):
# #     """
# #     Retrieve, update or delete a code snippet.
# #     """
# #     try:
# #         vinlib = Vinlib.objects.get(pk=pk)
# #     except Vinlib.DoesNotExist:
# #         return HttpResponse(status=404)

# #     if request.method == 'GET':
# #         serializer = VinlibSerializer(vinlib)
# #         return JsonResponse(serializer.data)

# #     elif request.method == 'PUT':
# #         data = JSONParser().parse(request)
# #         serializer = VinlibSerializer(vinlib, data=data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return JsonResponse(serializer.data)
# #         return JsonResponse(serializer.errors, status=400)

# #     elif request.method == 'DELETE':
# #         vinlib.delete()
# #         return HttpResponse(status=204)


# # @api_view(['GET', 'PUT', 'DELETE'])
# # def vinlib_detail(request, pk):
# #     """
# #     Retrieve, update or delete a code snippet.
# #     """
# #     try:
# #         vinlib = Vinlib.objects.get(pk=pk)
# #     except Vinlib.DoesNotExist:
# #         return Response(status=status.HTTP_404_NOT_FOUND)

# #     if request.method == 'GET':
# #         serializer = VinlibSerializer(vinlib)
# #         return Response(serializer.data)

# #     elif request.method == 'PUT':
# #         serializer = VinlibSerializer(vinlib, data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return Response(serializer.data)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# #     elif request.method == 'DELETE':
# #         vinlib.delete()
# #         return Response(status=status.HTTP_204_NO_CONTENT)


# # # def vinlib_list(request, format=None):
    
    
# # # def vinlib_detail(request, pk, format=None):
    


from vinlib.models import Vinlib
from vinlib.serializers import VinlibSerializer
from rest_framework import generics


class VinlibList(generics.ListCreateAPIView):
    queryset = Vinlib.objects.all()
    serializer_class = VinlibSerializer


class VinlibDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vinlib.objects.all()
    serializer_class = VinlibSerializer