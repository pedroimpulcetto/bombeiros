# Generated by Django 2.2.5 on 2019-10-02 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bombeiros', '0002_auto_20190910_1943'),
    ]

    operations = [
        migrations.AlterField(
            model_name='talao',
            name='num_talao',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
