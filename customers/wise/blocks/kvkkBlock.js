const CaptureInformation = require("../../../../core/cards/CaptureInformation");
const SendMessage = require("../../../../core/cards/SendMessage");
const config = require("../config");

function kvkkBlock(chatId) {
  const captureInfo = new CaptureInformation(chatId);
  const sendMessage = new SendMessage(chatId);

  // KVKK metni Wise'a özel
  const workflow = {};
  const kvkkLink = "https://drive.google.com/file/d/1oopjlo1PBvCSbtnzQg24GuUgotvb0eUm/view?usp=sharing/";
  workflow.KVKK = `[KVKK Açık Rıza Beyanı](${kvkkLink})`;

  // KVKK metni gönder
  sendMessage.sendText(config.kvkkMessage);

  // KVKK onayı için single choice
  const kvkkApprovalOptions = [
    { label: "Okudum, onaylıyorum.", value: "approve" },
    { label: "Hayır.", value: "decline" },
  ];
  return captureInfo.singleChoice(
    "Konuşmaya devam edebilmek için KVKK Açık Rıza Beyanını onaylamanız gerekiyor. KVKK Açık Rıza Beyanını okudunuz ve onaylıyor musunuz?",
    kvkkApprovalOptions,
    "workflow.KVKKApproval",
    "Lütfen birini seçin:"
  );
}

module.exports = kvkkBlock;
