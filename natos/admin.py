from django.contrib import admin

# Register your models here.
from .models import Menu, Pictures, Sounds, Games, Nat_web, Nat_web_img, Website, UserProfile, Animations, UserRating

admin.site.register(Menu)
admin.site.register(Pictures)
admin.site.register(Sounds)
admin.site.register(Games)
admin.site.register(Nat_web)
admin.site.register(Nat_web_img)
admin.site.register(Website)
admin.site.register(UserProfile)
admin.site.register(Animations)
admin.site.register(UserRating)


