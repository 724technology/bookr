const SendMessage = require("../../../../core/cards/SendMessage");

function greetingBlock(chatId) {
  const sendMessage = new SendMessage(chatId);

  // 1. Send a Carousel
  const carouselData = [
    {
      title: "Wise Reservations",
      description: "Powered by 724",
      imageUrl: "https://assets.goal.com/images/v3/blteac05027cd756856/6bc13d48626cc26dada33bdf9d265eb10b4ae852.jpg?auto=webp&format=pjpg&width=3840&quality=60", // Carousel görseli için örnek URL
    },
  ];
  sendMessage.sendCarousel(carouselData);

  // 2. Send a Welcome Text
  const welcomeMessage = `
👋🍻 Wise'a Hoşgeldiniz!

Sorularınız varsa sorabilir ve isterseniz kendinize kolayca bir rezervasyon yapabilirsiniz! Buyrun sizi dinliyorum. 😊🍸

📌 Bütün etkinliklerimiz saat 19:30'da başlamaktadır. (Wise:Watch etkinliği maç saatine göre değişiklik gösterebilir) 🕢📺

📌 Rezervasyonlarınızı kadın-erkek dengesi gözeterek yapınız. Kapıdaki görevlilerimiz bu konuda inisiyatif kullanabilir. 👥⚖️

📌 18 yaşından küçüklere hizmetimiz yoktur. 🚫🔞

Keyifli vakit geçirmenizi dileriz! 🎉🍹
  `;
  sendMessage.sendText(welcomeMessage);

  // Return a confirmation for logging/debugging
  return "Greeting block executed successfully.";
}

module.exports = greetingBlock;
