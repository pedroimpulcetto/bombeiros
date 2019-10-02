from django.db import models


class Talao(models.Model):
    num_talao = models.IntegerField(blank=True, null=True)
    data_talao = models.DateField(auto_now=True, auto_now_add=False)
    hora_chamada_talao = models.TimeField(auto_now=True, auto_now_add=False)
    solicitante_talao = models.CharField(max_length=30, blank=True, null=True)
    tel_talao = models.IntegerField(blank=True, null=True)
    endereco_talao = models.CharField(max_length=150, blank=True, null=True)
    num_end_talao = models.IntegerField(blank=True, null=True)
    bairro_talao = models.CharField(max_length=50, blank=True, null=True)
    atendente_talao = models.CharField(max_length=30, blank=True, null=True)
    tipo_ocor_talao = models.CharField(max_length=60, blank=True, null=True)
    cod_talao = models.CharField(max_length=4, blank=True, null=True)
    viatura_talao = models.CharField(max_length=7, blank=True, null=True)
    hs_talao = models.TimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
    os_talao = models.IntegerField(blank=True, null=True)
    hl_talao = models.TimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
    ol_talao = models.IntegerField(blank=True, null=True)
    sl_talao = models.TimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
    ps_talao = models.TimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
    sps_talao = models.TimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
    hpb_talao = models.TimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
    opb_talao = models.IntegerField(blank=True, null=True)
    num_vit_talao = models.IntegerField(blank=True, null=True)
    qru_talao = models.CharField(max_length=50, blank=True, null=True)
    motorista_talao = models.CharField(max_length=50, blank=True, null=True)
    comandante_talao = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        data = str(self.data_talao)
        end = str(self.endereco_talao)
        return data + ' - ' + end


class Crm(models.Model):
    crm_crm = models.IntegerField()
    nome_medico_crm = models.CharField(max_length=50)

    def __str__(self):
        crm = str(self.crm_crm)
        nome = str(self.nome_medico_crm)
        return crm + ' - ' + nome


class Efetivo(models.Model):
    re_efetivo = models.IntegerField()
    post_grad_efetivo = models.CharField(max_length=5)
    nome_efetivo = models.CharField(max_length=50)
    nome_guerra_efetivo = models.CharField(max_length=50)
    data_admissao_efetivo = models.DateField(
        auto_now=False, auto_now_add=False)
    fone_efetivo = models.IntegerField()
    cel_efetivo = models.IntegerField()
    data_nasc_efetivo = models.DateField(auto_now=False, auto_now_add=False)
    email_efetivo = models.CharField(max_length=50)

    def __str__(self):
        return self.nome_guerra_efetivo


class Viatura(models.Model):
    prefixo_viatura = models.CharField(max_length=7)
    marca_modelo_viatura = models.CharField(max_length=50)
    placa_viatura = models.CharField(max_length=7)

    def __str__(self):
        return self.prefixo_viatura
