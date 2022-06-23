from .import views 
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('api/', views.getRoutes),
    path('api/products/', views.getProducts),
    # re_path('api/products/(?P<name>.+)/$', views.ProductByTagList.as_view()),
    path('api/products/add', views.addProduct),
    path('api/products/custom/', views.ProdcutListView.as_view()),
    path('api/products/edit/<str:pk>/', views.editProduct),
    path('api/products/delete/<str:pk>/', views.deleteProduct),
    path('api/products/<str:name>/', views.getProduct),
    

    path('api/users/', views.getUsers),
    path('api/user/create', views.createUser),
    path('api/users/<str:pk>/', views.getUser),
    # path('api/user/delete/<str:pk>/', views.deleteUser),

    path('api/tags/', views.getTags),
    path('api/tags/add', views.addTag),
    path('api/tags/edit/<str:pk>/', views.editTag),
    path('api/tags/<str:name>/', views.getTag),

    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]