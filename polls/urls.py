from django.urls import path
from . import views

urlpatterns = [
    path('polls/templates/polls/<path:file_path>/', views.serve_file)
]