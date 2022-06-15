from .import views 
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/', views.getRoutes),
    path('api/products/', views.getProducts),
    path('api/products/add', views.addProduct),
    path('api/products/custom/', views.ProdcutListView.as_view()),
    path('api/products/edit/<str:pk>/', views.editProduct),
    path('api/products/delete/<str:pk>/', views.deleteProduct),
    path('api/products/<str:pk>/', views.getProduct),
    

    path('api/users/', views.getUsers),
    path('api/user/create', views.createUser),
    path('api/users/<str:username>/', views.getUser),
    # path('api/user/delete/<str:pk>/', views.deleteUser),

    path('api/tags/', views.getTags),
    path('api/tags/add', views.addTag),
    path('api/tags/edit/<str:pk>/', views.editTag),
    path('api/tags/<str:pk>/', views.getTag),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]