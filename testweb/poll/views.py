from django.shortcuts import render

# Create your views here.
def index(request):
    context = {}
    return render(request,"index.html", context)
def content(request):
	context={}
	return render(request, "content.html", context)
def main(request):
	context={}
	return render(request, "principal.html", context)	
def new_12(request):
	context={}
	return render(request, "new_12.html", context)
def who(request):
	context={}
	return render(request, "who.html", context)