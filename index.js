// index.js: Application Entry Point

// Import customer flow(s)
const wiseFlow = require("./customers/wise/flows/mainFlow");
// Flows can be added in the future for new customers:
// const ameliesFlow = require("./customers/amelies/flows/mainFlow");

function startChat(chatId, customer) {
  console.log(`Starting chat for customer: ${customer}...`);

  switch (customer) {
    case "wise":
      return wiseFlow(chatId);
    // Other customer flows can be added
    // case "amelies":
    //   return ameliesFlow(chatId);
    default:
      throw new Error(`Unknown customer: ${customer}`);
  }
}

// Start chat (example usage)
const chatId = "unique_chat_id";
const customer = "wise"; // Only work on wise for now
startChat(chatId, customer);
