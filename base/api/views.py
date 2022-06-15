from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import filters, generics
from .serializers import *
from base.models import Product, Profile, Tag
from django.contrib.auth.models import User 

@api_view(['GET'])
def getRoutes(request):
    routes = {
        'users':'/api/users',
        'user object':'/api/users/<username>',
        'products': '/api/products',
        'product object': '/api/products/<id>',
        'product add': '/api/products/add',
        'product edit': '/api/products/edit/<id>',
        'product delete': '/api/products/delete/<id>',
        'tags': '/api/tags',
        'tag object': '/api/tags/<id>',
        'tag add': '/api/tags/add',
        'tag edit': '/api/tags/edit/<id>',
        'tag delete': '/api/tags/delete/<id>',
    }
    return Response(routes)

#add permission
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addProduct(request):
    data = request.data
    user = request.user
    # postdate = PostDate.objects.create(
    #     date = data['date']
    # )
    product = Product.objects.create(
        owner = user,
        # name = data['name'],
        # description = data['description'],
        body = data['body'],
        # website = data['website'],
        # postDate = postdate
    )
    serializer = ProductSerializer(product, many=False)
    return Response({'message':'Product was added!', 'data':serializer.data})

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def editProduct(request, pk):
    data = request.data
    user = request.user

    product = Product.objects.get(id=pk)
    if user == product.owner:
        product.body = data['body']
        product.save()
        serializer = ProductSerializer(product, many=False)
        return Response({'message':'Product was uppdated!', 'data':serializer.data})
    else:
        return Response('Not your product...')
    
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteProduct(request, pk):
    user = request.user

    product = Product.objects.get(id=pk)
    if user == product.owner:
        product.delete()
        return Response('Product was deleted!')
    else:
        return Response('Not your product...')

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    products = Product.objects.get(id=pk)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)

#Search for products
class ProdcutListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'description', 'body', 'website','tags__name']
    #Implement ordering

@api_view(['POST'])
def createUser(request):
    data = request.data

    user = User.objects.create_user(
        username = data['username'],
        email = data['email'],
        password = data['password']
    )
    serializer = UserSerializer(user, many=False)
    return Response({'message':'Tag was added!', 'data':serializer.data})

# @api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
# def deleteUser(request, pk):
#     user = request.user
#     if user == User.objects.get(id=pk).username:
#         user.delete()
#         return Response('Product was deleted!')
#     else:
#         return Response('Not your product...')

@api_view(['GET'])
def getUsers(request):
    users = Profile.objects.all()
    serializer = ProfileSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, username):
    user = Profile.objects.get(user__username=username)
    serializer = ProfileSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def addTag(request):
    data = request.data

    tag = Tag.objects.create(
        name = data['name']
    )
    serializer = TagSerializer(tag, many=False)
    return Response({'message':'Tag was added!', 'data':serializer.data})

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def editTag(request, pk):
    data = request.data

    tag = Tag.objects.get(id=pk)
    tag.name = data['name']
    tag.save()
    serializer = TagSerializer(tag, many=False)
    return Response({'message':'Tag was updated!', 'data':serializer.data})

@api_view(['GET'])
def getTags(request):
    tags = Tag.objects.all().order_by('?') #here we want to order by most products in tag
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTag(request, pk):
    tags = Tag.objects.get(id=pk) #here we want to order by most products in tag
    serializer = TagSerializer(tags, many=False)
    return Response(serializer.data)