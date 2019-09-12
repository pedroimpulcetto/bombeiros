from django.urls import path
from bombeiros import views

urlpatterns = [
    path('talao/', views.TalaoList.as_view(), name='talao-list'),
    path('crm/', views.CrmList.as_view(), name='crm-list'),
    path('efetivo/', views.EfetivoList.as_view(), name='efetivo-list'),
    path('viatura/', views.ViaturaList.as_view(), name='viatura-list'),
]
