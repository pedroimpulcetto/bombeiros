from rest_framework import generics
from .models import Talao, Crm, Viatura, Efetivo
from .serializers import TalaoSerializer, CrmSerializer, ViaturaSerializer, EfetivoSerializer


class TalaoList(generics.ListCreateAPIView):
    queryset = Talao.objects.all()
    serializer_class = TalaoSerializer


class CrmList(generics.ListCreateAPIView):
    queryset = Crm.objects.all()
    serializer_class = CrmSerializer


class ViaturaList(generics.ListCreateAPIView):
    queryset = Viatura.objects.all()
    serializer_class = ViaturaSerializer


class EfetivoList(generics.ListCreateAPIView):
    queryset = Efetivo.objects.all()
    serializer_class = EfetivoSerializer
