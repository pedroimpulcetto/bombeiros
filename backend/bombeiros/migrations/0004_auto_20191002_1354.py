# Generated by Django 2.2.5 on 2019-10-02 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bombeiros', '0003_auto_20191002_1348'),
    ]

    operations = [
        migrations.AlterField(
            model_name='talao',
            name='atendente_talao',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='bairro_talao',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='cod_talao',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='comandante_talao',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='data_talao',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='endereco_talao',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='hl_talao',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='hora_chamada_talao',
            field=models.TimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='hpb_talao',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='hs_talao',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='motorista_talao',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='num_end_talao',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='num_vit_talao',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='ol_talao',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='opb_talao',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='os_talao',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='ps_talao',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='qru_talao',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='sl_talao',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='solicitante_talao',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='sps_talao',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='tel_talao',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='tipo_ocor_talao',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
        migrations.AlterField(
            model_name='talao',
            name='viatura_talao',
            field=models.CharField(blank=True, max_length=7, null=True),
        ),
    ]