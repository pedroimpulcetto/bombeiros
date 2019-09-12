from django.urls import path
from bombeiros import views

urlpatterns = [
    path('talao/', views.TalaoList, name='talao-list'),
    path('crm/', views.CrmList, name='crm-list'),
    path('efetivo/', views.EfetivoList, name='efetivo-list'),
    path('viatura/', views.ViaturaList, name='viatura-list'),
]
