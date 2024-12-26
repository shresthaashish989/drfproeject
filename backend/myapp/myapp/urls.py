"""
URL configuration for myapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import *
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/addlist',Addlist.as_view(), name='addlist'),
    path('api/Categorylist/<int:pk>/',ListCategory.as_view(), name='Listcategory'),
    path('api/update/<int:pk>/',ListCategory.as_view(), name='update'),
    path('api/delete/<int:pk>/',ListCategory.as_view(), name='delete'),
    path('blog',CreateBlog.as_view(),name="BLOG"),
    path('api/addblog',AddBlog.as_view(),name="listblog"),
    path('api/showblog',Blogs.as_view(),name="create"),
    path('api/updates/<int:pk>/',UpdateBlog.as_view(),name="create"),
    # path('api/update',Updateblog.as_view(),name="update"),
    # path('api/retrieve',Retrieveblog.as_view(),name="listblog"),
    path('api/delete/<int:pk>/',DeleteBlog.as_view(),name="destroy"),
    #for user
    path('register',Registeruser.as_view(), name='register'),
    path('login/',LoginUser.as_view(), name='login'),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # for development only
       

