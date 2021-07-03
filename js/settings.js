globalThis.settings = {
	'open': () => {
		alert(config.keys_count);
	},
	'__settings__': () => {
		new_message(['keys', false]);
		let messages = document.querySelectorAll('.message'), keys;
		for (let i = 0; i < messages.length; i++) {
			if (messages[i].innerText == 'keys') {
				keys = messages[i];
				break;
			}
		}
		for (let i = 1; i <= 5; i++) {
			let num = document.createElement('span');
			num.style.background = '#f8de5c';
			num.style.color = '#0a192b';
			num.style.cursor = 'pointer';
			num.innerText = i;
			num.className = 'settings-keys';
			num.onclick = () => {
				let nums = document.querySelectorAll('.settings-keys');
				for (let j = 0; j < nums.length; j++) {
					nums[j].style.background = '#f8de5c';
				}
				config.keys_count = num.innerText;
				num.style.background = '#c63b34';
			};
			keys.appendChild(num);
		}
	}
}