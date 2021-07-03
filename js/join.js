let texts = ['room', 'key 1', 'key 2', 'key 3', 'key 4', 'key 5'];

globalThis.join = {
	'symbol-now': '',
	'enter': () => {
		let messages = document.querySelectorAll('.message');
		for (let i = 0; i < texts.length; i++) {
			for (let j = 0; j < messages.length; j++) {
				if (messages[j].children[0].innerText == texts[i]) {
					console.log(texts[i] + ' - ' + messages[j].innerText.split('\n').slice(1).join(''));
					break;
				}
			}
		}
	},
	'__join__': () => {
		new_message(['room', false]);
		for (let i = 1; i <= 5; i++) {
			new_message(['key ' + i, false]);
		}
		let messages = document.querySelectorAll('.message');
		let message;
		for (let i = 0; i < texts.length; i++) {
			for (let j = 0; j < messages.length; j++) {
				if (messages[j].innerText == texts[i]) {
					message = messages[j];
					break;
				}
			}
			for (let j = 0; j < 8; j++) {
				let symbol = document.createElement('span');
				symbol.style.background = '#f8de5c';
				symbol.style.color = '#0a192b';
				symbol.style.cursor = 'pointer';
				symbol.id = 'join-' + texts[i].replace(' ', '') + '-' + j;
				symbol.className = 'join-' + texts[i].replace(' ', '');
				symbol.onclick = () => {
					for (let k = 0; k < texts.length; k++) {
						let points = document.querySelectorAll('.join-' + texts[k].replace(' ', ''));
						for (let l = 0; l < points.length; l++) {
							points[l].style.background = '#f8de5c';
						}
					}
					symbol.style.background = '#c63b34'
					join['symbol-now'] = symbol.id;
				};
				message.appendChild(symbol);
			}
		}
	}
}

document.onkeydown = (e) => {
	let message = document.getElementById(join['symbol-now']);
	if (message) {
		let symbols = 'abcdefghijklmnopqrstuvwxyz123456789'.split('');
		let letter = e.key.toLocaleLowerCase();
		if (symbols.indexOf(letter) != -1) {
			message.innerText = letter;
			let new_symbol_now = join['symbol-now'].slice(0, join['symbol-now'].length - 1) + (parseInt(join['symbol-now'][join['symbol-now'].length - 1]) + 1);
			let new_symbol = document.getElementById(new_symbol_now);
			if (new_symbol) {
				new_symbol.click();
			}
		}
	}
}