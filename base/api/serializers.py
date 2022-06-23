from rest_framework.serializers import ModelSerializer 
from base.models import Product, Profile, Tag
from django.contrib.auth.models import User 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    
class UserSerializer(ModelSerializer):
    class Meta: 
        model = User
        fields = ['username', 'id'] 

class ProfileSerializer(ModelSerializer):
    user = UserSerializer(many=False)
    class Meta:
        model = Profile
        fields = '__all__'

class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    