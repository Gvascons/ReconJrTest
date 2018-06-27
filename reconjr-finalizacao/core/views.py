from django.shortcuts import render
from django.views.generic import TemplateView
from templated_email import send_templated_mail
from django.http import HttpResponse, HttpResponseRedirect
from .models import *

# Create your views here.
class HomeView(TemplateView):
    template_name = 'index.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['membros'] = Membro.objects.all()
        return context
    def post(self, request, *args, **kwargs):
        if request.method=='POST':
            nome = request.POST.get('nome')
            mail = request.POST.get('email')
            tel = request.POST.get('telefone')
            mensagem = request.POST.get('mensagem')
            sucess = send_templated_mail(template_name='email',
                                from_email='enviarcontatos.reconjr@gmail.com',
                                recipient_list=['maurelio.fsantana@gmail.com'],
                                context={
                                    'nome':nome,
                                    'mail':mail,
                                    'tel':tel,
                                    'mensagem':mensagem
                                })
        context = {}
        return HttpResponseRedirect('')