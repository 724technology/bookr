// cards/SendMessage.js

class SendMessage {
  constructor(chatId) {
    this.chatId = chatId; // The chat ID to send messages to
  }

  // Sends a plain text message
  text(message) {
    return {
      type: "text",
      chatId: this.chatId,
      message,
    };
  }

  // Sends a text message with markdown and variable expression
  markdownText(message) {
    return {
      type: "text",
      chatId: this.chatId,
      message, // Supports markdown and variables
    };
  }

  // Sends an image message
  image(url, title) {
    return {
      type: "image",
      chatId: this.chatId,
      url,
      title, // Title is mandatory
    };
  }

  // Sends an audio message
  audio(url, title) {
    return {
      type: "audio",
      chatId: this.chatId,
      url,
      title, // Title is mandatory
    };
  }

  // Sends a video message
  video(url, title) {
    return {
      type: "video",
      chatId: this.chatId,
      url,
      title, // Title is mandatory
    };
  }

  // Sends a file attachment
  file(url, title) {
    return {
      type: "file",
      chatId: this.chatId,
      url,
      title, // Title is mandatory
    };
  }

  // Sends a card message with an image, title, subtitle, and action
  card(title, subtitle, image, actions) {
    return {
      type: "card",
      chatId: this.chatId,
      title,
      subtitle,
      image,
      actions, // Action button such as a link
    };
  }

  // Sends a carousel message with multiple cards
  carousel(items) {
    return {
      type: "carousel",
      chatId: this.chatId,
      items: items.map((item) => ({
        title: item.title,
        subtitle: item.subtitle,
        image: item.image,
        actions: item.actions, // Actions such as buttons
      })),
    };
  }

  // Sends a location message
  location(latitude, longitude) {
    return {
      type: "location",
      chatId: this.chatId,
      coordinates: {
        latitude,
        longitude,
      },
    };
  }
}

module.exports = SendMessage;
