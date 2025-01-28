# Copied from Copilot
from django.shortcuts import render
import os

def index(request):
    return render(request, 'index.html')

def serve_file(request, file_path):
    print(file_path)
