from django.shortcuts import render
from rest_framework import generics,status
from .models import *
from .serilizer import *
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated,IsAdminUser



# Create your views here.

User=get_user_model()



class Addlist(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer

class ListCategory(generics.RetrieveUpdateDestroyAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer



    

class Registeruser(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=RegisterSerializer


class LoginUser(APIView):
    def post(self, request, *args, **kwargs):
        email=request.data.get('email')
        password=request.data.get('password')
        user=authenticate(email=email,password=password)
        if user:
            refreshtoken=RefreshToken.for_user(user)
            return Response({
                "email":user.email,
                "role":user.is_user,
                "refreshtoken":str(refreshtoken),
                "access_token":str(refreshtoken.access_token),
                "is_staff":user.is_staff,
                "username":user.username

            })
        return Response({"error:" "invalid credintial"}, status=status.HTTP_400_BAD_REQUEST)




class AddBlog(generics.CreateAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

class Blogs(generics.ListAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

class UpdateBlog(generics.UpdateAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

class DeleteBlog(generics.DestroyAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

class CreateBlog(generics.CreateAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer






