
import FormName from './FormName';
import ChatWidget from './ChatWidget';


const form = new FormName();
form.bindToDOM(document.body);
form.init();

const chat = new ChatWidget('http://localhost:7070/', form);
chat.bindToDOM(document.querySelector('#online_chat_widget_container'));
chat.init();