
# ai/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.ai_main, name='ai_main'),
    # path('send_message/', views.send_message, name='send_message'),  # 이 부분을 추가합니다.
]
