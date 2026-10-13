from django.shortcuts import render

def index(request):
    students = [
        {"name": "Aman", "event": "Coding"},
        {"name": "Riya", "event": "Quiz"},
        {"name": "Karan", "event": "Hackathon"},
    ]
    query = request.GET.get("q", "").strip().lower()
    students = [student for student in students if query in student["name"].lower()]
    students.sort(key=lambda student: student["name"])
    return render(request, "index.html", {"students": students, "query": query})
