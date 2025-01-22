// Import config data
import config from './config.yaml';

// DOM Elements
const chatTitle = document.querySelector('.chat-title');
const logo = document.querySelector('.logo');
const kvkkTitle = document.querySelector('.kvkk-title');
const kvkkDescription = document.querySelector('.kvkk-description');
const kvkkLink = document.querySelector('#kvkk-link');
const footerMessage = document.querySelector('.footer-message');
const acceptBtn = document.querySelector('#accept-btn');
const declineBtn = document.querySelector('#decline-btn');

// Initialize Content
chatTitle.textContent = config.customer_name;
logo.src = config.logo_path;
footerMessage.textContent = config.footer_message;

kvkkTitle.textContent = 'KVKK Açık Rıza Beyanı';
kvkkDescription.textContent = 'Konuşmaya devam edebilmek için KVKK Açık Rıza Beyanını onaylamanız gerekiyor.';
kvkkLink.textContent = 'KVKK Açık Rıza Beyanını';
kvkkLink.href = config.kvkk_link;

// Button Event Listeners
acceptBtn.addEventListener('click', () => {
    console.log('User accepted KVKK. Proceeding to the next step.');
    // Trigger greetings logic here
});

declineBtn.addEventListener('click', () => {
    console.log('User declined KVKK. Ending conversation.');
    // Logic to end the conversation
});
