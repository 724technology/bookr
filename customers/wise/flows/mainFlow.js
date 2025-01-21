const kvkkBlock = require("../blocks/kvkkBlock");
const greetingBlock = require("../blocks/greetingBlock");

function mainFlow(chatId) {
  console.log("Starting Wise Flow...");

  // KVKK Block'u çalıştır
  const kvkkResponse = kvkkBlock(chatId);

  // Kullanıcı KVKK'yı onayladıysa
  if (kvkkResponse.value === "approve") {
    console.log("KVKK approved. Proceeding to Greeting block...");
    return greetingBlock(chatId); // Greeting block'u çağır
  } else {
    console.log("KVKK declined. Ending conversation.");
    return "Conversation ended due to KVKK declination.";
  }
}

module.exports = mainFlow;
