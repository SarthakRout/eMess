from django.contrib import admin

# Register your models here.
from .models import ExtraItem, Meal, MessAdmin, Order, Student

admin.site.register(Student)
admin.site.register(MessAdmin)
admin.site.register(Meal)
admin.site.register(ExtraItem)
admin.site.register(Order)