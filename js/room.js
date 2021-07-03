globalThis.room = {
	'create': () => {
		menu_now = 'settings';
		clear_menu();
		init_menu();
	},
	'join': () => {
		menu_now = 'join';
		clear_menu();
		init_menu();
	}
}