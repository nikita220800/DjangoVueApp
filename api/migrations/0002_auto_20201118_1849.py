# Generated by Django 3.1.2 on 2020-11-18 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='division',
            options={'verbose_name': 'подразделение', 'verbose_name_plural': 'подразделения'},
        ),
        migrations.AlterModelOptions(
            name='jobposition',
            options={'verbose_name': 'должность', 'verbose_name_plural': 'должности'},
        ),
        migrations.AlterModelOptions(
            name='team',
            options={'verbose_name': 'команда', 'verbose_name_plural': 'команды'},
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='description',
            field=models.TextField(blank=True, max_length=200, null=True, verbose_name='О себе'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='patronymic',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Отчество'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='Фото'),
        ),
    ]
