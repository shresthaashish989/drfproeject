from django.db import models
from django.contrib.auth.models import AbstractUser
from myapp import settings

User = settings.AUTH_USER_MODEL


class CustomUSer(AbstractUser):
    email = models.EmailField( unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username=models.CharField(max_length=200, unique=True)
    is_admin=models.BooleanField(default=False)
    is_user=models.BooleanField(default=True)
    dob=models.DateField()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['first_name','last_name','username','dob']

    def __str__(self):
        return self.email
   

# Create your models here.
class Category(models.Model):
    category_name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.category_name

class Blog(models.Model):
    title = models.CharField(max_length=255)
    author= models.CharField(max_length=200)
    dscription= models.TextField
    content = models.TextField()
    categogry = models.ForeignKey(Category, on_delete=models.CASCADE)
    image= models.FileField(upload_to='uploads')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.title
