function new_message([text, clickable=false]) {
	let message = document.createElement('div');
	message.className = `message${clickable === true ? ' clickable' : ''}`;
	if (text == '__settings__' || text == '__join__') {
		return globalThis[text.slice(2, text.length - 2)][text]();
	}
	let message_text = document.createElement('span');
	message_text.innerText = text.slice(0, 500)
	message.appendChild(message_text);
	if (clickable === true) {
		message.onclick = () => {
			globalThis[menu_now][message.innerText]();
		};
	}
	document.getElementById('content').appendChild(message);
}