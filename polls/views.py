from django.shortcuts import render

# Copied from Copilot
from django.http import HttpResponse
import os

def serve_file(request, file_path):
    # Define the base directory where your files are stored
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    full_path = os.path.join(base_dir, file_path)

    # Check if file exists
    if os.path.exists(full_path):
        with open(full_path, 'rb') as f:
            file_content = f.read()
        return HttpResponse(file_content, content_type="application/octet-stream")
    else:
        return HttpResponse("File not found.", status=404)
