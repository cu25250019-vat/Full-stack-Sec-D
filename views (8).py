from django.shortcuts import render

def index(request):
    fruits = ["Apple", "Banana", "Mango", "Orange"]
    return render(request, "index.html", {"fruits": fruits})
