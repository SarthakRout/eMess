from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.forms import ValidationError
# Create your models here.

class Student(User):
    roll = models.IntegerField(
        unique=True, 
        blank=False,
        primary_key=True
    ) 
    parent_hall = models.IntegerField(
        blank=False,
    )
    hashpwd = models.CharField(
        blank=False,
        max_length=96,
        default='0'
    )


def uniq_ar(value):
    checker = {}
    for elem in value:
        if elem in checker:
            raise ValidationError(
                ('%(elem)s is repeated more than once'), 
                params={'elem':elem}
            )
        else:
            checker[elem] = 'Present'

class MessAdmin(User):
    mobile_no = models.CharField(
        max_length=15, 
        blank=False
    )
    halls = ArrayField(
        models.IntegerField(
            blank=False
        ), 
        blank=False, 
        max_length=15,
        validators=[uniq_ar]
    )
    hashpwd = models.CharField(
        blank=False,
        max_length=96,
        default='0'
    )

class Meal(models.Model):
    hall = models.IntegerField(
        blank=False
    )
    meal_date = models.DateField(
        blank=False
    )
    meal_start_time = models.TimeField(
        blank=False
    )
    meal_end_time = models.TimeField(
        blank=False
    )
    meal_type = models.CharField(
        max_length=1, 
        blank=False
    )

class ExtraItem(models.Model):
    meal = models.ForeignKey(
        Meal, 
        on_delete=models.CASCADE
    )
    name = models.CharField(
        max_length=30, 
        blank=False
    )
    price = models.IntegerField(
        blank=False
    )
    max_amount = models.IntegerField(
        blank=False
    )
    limit = models.IntegerField(

    )

class Order(models.Model):
    roll = models.ForeignKey(
        Student, 
        on_delete=models.SET_NULL,
        null=True
    )
    extra_item = models.ForeignKey(
        ExtraItem,
        on_delete=models.SET_NULL,
        null=True
    )
    quantity = models.IntegerField(
        blank=False
    )
    booking_price = models.IntegerField(
        blank=False
    )
    booked_at = models.DateTimeField(
        blank=False,
        auto_now_add=True
    )
    last_modified_at = models.DateTimeField(
        blank=False,
        auto_now=True
    )