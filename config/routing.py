from django.urls import path

from chatbox.chats.consumer import ChatConsumer, NotificationConsumer

websocket_urlpatterns = [
    path("chats/<conversation_name>/", ChatConsumer.as_asgi()),
    path("notifications/", NotificationConsumer.as_asgi()),
]
