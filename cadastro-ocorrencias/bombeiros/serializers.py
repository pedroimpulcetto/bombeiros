from rest_framework import serializers
from .models import Talao, Crm, Viatura, Efetivo


class TalaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talao
        fields = '__all__'

class CrmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crm
        fields = '__all__'
        
class EfetivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Efetivo
        fields = '__all__'
        
class ViaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viatura
        fields = '__all__'