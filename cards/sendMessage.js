// cards/SendMessage.js

class SendMessage {
  constructor(chatId) {
    this.chatId = chatId; // Kullanıcı ID'si veya sohbet ID'si
  }

  // Düz metin mesajı gönder
  text(message) {
    return {
      type: "text",
      chatId: this.chatId,
      message,
    };
  }

  // Link içeren bir metin mesajı gönder
  textWithLink(message, link) {
    const formattedMessage = `${message} [Buraya Tıklayın](${link})`;
    return {
      type: "text",
      chatId: this.chatId,
      message: formattedMessage,
    };
  }

  // Carousel mesajı gönder
  carousel(items) {
    return {
      type: "carousel",
      chatId: this.chatId,
      items: items.map((item) => ({
        title: item.title,
        subtitle: item.subtitle,
        image: item.image,
        actions: item.actions, // Örneğin, butonlar için action tanımları
      })),
    };
  }

  // Görsel mesaj gönder
  image(url, altText) {
    return {
      type: "image",
      chatId: this.chatId,
      url,
      altText,
    };
  }
}

module.exports = SendMessage;

