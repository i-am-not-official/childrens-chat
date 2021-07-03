function init_head() {
	document.getElementById('head').children[0].innerText = menu_now;
}

function init_menu() {
	init_head();
	let messages = menus[menu_now].messages;
	for (let i = 0; i < messages.length; i++) {
		new_message(messages[i]);
	}
}

function clear_menu() {
	document.getElementById('content').innerHTML = '';
}

init_menu();