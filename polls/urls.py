# Copied from Copilot
from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path(r'^(?P<file_path>.*)$', views.serve_file, name='serve_file'),
    # Add other URL patterns here
]
