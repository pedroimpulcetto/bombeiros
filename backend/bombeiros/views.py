from rest_framework import viewsets
from .models import Talao, Crm, Viatura, Efetivo
from .serializers import TalaoSerializer, CrmSerializer, ViaturaSerializer, EfetivoSerializer
from url_filter.integrations.drf import DjangoFilterBackend
import django_filters


class TalaoList(viewsets.ModelViewSet):
    queryset = Talao.objects.all().order_by('data_talao', 'hora_chamada_talao')
    serializer_class = TalaoSerializer
    filter_fields = [
        'data_talao',
        'endereco_talao',
        'bairro_talao',
        'atendente_talao',
        'tipo_ocor_talao',
        'viatura_talao',
        'motorista_talao',
        'comandante_talao'
    ]


class CrmList(viewsets.ModelViewSet):
    queryset = Crm.objects.all().order_by('nome_medico_crm')
    serializer_class = CrmSerializer


class ViaturaList(viewsets.ModelViewSet):
    queryset = Viatura.objects.all().order_by('prefixo_viatura')
    serializer_class = ViaturaSerializer


class EfetivoList(viewsets.ModelViewSet):
    queryset = Efetivo.objects.all().order_by('re_efetivo')
    serializer_class = EfetivoSerializer
