from django.urls import path
from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('/<path:file_path>', views.index, name='path'),
]
