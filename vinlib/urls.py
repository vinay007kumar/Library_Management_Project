from django.urls import path
from vinlib import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('vinlib/', views.VinlibList.as_view()),
    path('vinlib/<int:pk>/', views.VinlibDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)