self.addEventListener('push', event => {
    const data = event.data.json(); // Recebe os dados da notificação enviados pelo servidor.

    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon, // Ícone da notificação
        data: data.url, // URL que será aberta ao clicar
        actions: [
            { action: 'open', title: 'Abrir' }
        ]
    });
});

self.addEventListener('notificationclick', event => {
    const url = event.notification.data; // Obtém a URL dos dados da notificação.
    event.notification.close(); // Fecha a notificação.

    if (url) {
        event.waitUntil(clients.openWindow(url)); // Abre a URL no navegador.
    }
});
