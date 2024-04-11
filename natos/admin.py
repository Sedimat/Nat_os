from django.contrib import admin

# Register your models here.
from .models import Menu, Pictures, Sounds, Games

admin.site.register(Menu)
admin.site.register(Pictures)
admin.site.register(Sounds)
admin.site.register(Games)
