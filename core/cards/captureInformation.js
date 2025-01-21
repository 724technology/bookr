// cards/CaptureInformation.js

class CaptureInformation {
  constructor(chatId) {
    this.chatId = chatId; // The chat ID to capture information from
  }

  // Captures a single choice from the user
  singleChoice(question, options, variableName, promptMessage = null) {
    return {
      type: "single-choice",
      chatId: this.chatId,
      question,
      variableName, // Variable to store the response
      options: options.map((option) => ({
        label: option.label,
        value: option.value,
      })),
      promptMessage, // Optional prompt message
    };
  }

  // Captures a number input from the user
  numberInput(question, min = 1, max = 100, variableName, promptMessage = null) {
    return {
      type: "number",
      chatId: this.chatId,
      question,
      variableName, // Variable to store the response
      validation: {
        min,
        max,
      },
      promptMessage, // Optional prompt message
    };
  }

  // Captures free text input from the user
  freeText(question, variableName, promptMessage = null) {
    return {
      type: "free-text",
      chatId: this.chatId,
      question,
      variableName, // Variable to store the response
      promptMessage, // Optional prompt message
    };
  }

  // Captures a date input from the user
  dateInput(question, variableName, promptMessage = null) {
    return {
      type: "date",
      chatId: this.chatId,
      question,
      variableName, // Variable to store the response
      promptMessage, // Optional prompt message
    };
  }

  // Captures quantity of people
  quantityOfPeople(question, min = 1, max = 50, variableName, promptMessage = null) {
    return {
      type: "quantity-of-people",
      chatId: this.chatId,
      question,
      variableName, // Variable to store the response
      validation: {
        min,
        max,
      },
      promptMessage, // Optional prompt message
    };
  }
}

module.exports = CaptureInformation;
