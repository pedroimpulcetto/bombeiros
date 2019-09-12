from rest_framework import viewsets
from .models import Talao, Crm, Viatura, Efetivo
from .serializers import TalaoSerializer, CrmSerializer, ViaturaSerializer, EfetivoSerializer


class TalaoList(viewsets.ModelViewSet):
    queryset = Talao.objects.all()
    serializer_class = TalaoSerializer


class CrmList(viewsets.ModelViewSet):
    queryset = Crm.objects.all()
    serializer_class = CrmSerializer


class ViaturaList(viewsets.ModelViewSet):
    queryset = Viatura.objects.all()
    serializer_class = ViaturaSerializer


class EfetivoList(viewsets.ModelViewSet):
    queryset = Efetivo.objects.all()
    serializer_class = EfetivoSerializer
