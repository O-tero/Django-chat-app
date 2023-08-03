from django.urls import path

from chatbox.chats.consumer import ChatConsumer

websocket_urlpatterns = [path("", ChatConsumer.as_asgi())]
