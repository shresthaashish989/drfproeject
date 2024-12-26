from rest_framework import serializers
from .models import Category, Blog  # Ensure you're importing the correct models
from django.contrib.auth import get_user_model

User=get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'dob','password','first_name','last_name')
        extra_kwargs = {
            'password': {'write_only': True},}
        
    def create(self,validated_data):
            user= User.objects.create_user(
                username=validated_data['username'],
                email=validated_data['email'],
                password=validated_data['password'],
                dob=validated_data['dob'],
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],

            )
            return user



class CategorySerializer(serializers.ModelSerializer):  # Fix the typo in class name if needed
    class Meta:
        model = Category  # Corrected from "models" to "model"
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):  # Fix the typo in class name if needed
    class Meta:
        model = Blog  # Corrected from "models" to "model"
        fields = '__all__'
