alert('hello world');
function injectJs(srcFile) {
	var scr = document.createElement('script');
	scr.src = srcFile;
	console.log(document.getElementsByTagName('head'));
	document.getElementsByTagName('head')[0].appendChild(scr);
	console.log('injection done!')
}
injectJs(chrome.extension.getURL('ShortcutSettings.js'));
