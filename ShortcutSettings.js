class ShortcutSettings{
	constructor(
		search_result,
		search_input_bar
	){
	this.operation = {};
	this.operation.scrollup = function(ev){
		if (idx > 0) {
			idx--;
			select(true);
		}
		ev.stopPropagation();
	};
	this.operation.scrolldown = function(ev){
		if (idx < $(search_result).length-1) {
			idx++;
			select(true);
		}
		ev.stopPropagation();
	};
	this.operation.search = function(ev){
		$(search_input_bar).select();
		ev.stopPropagation();
		ev.preventDefault();
	};
	this.Alert = function(){alert(alert_string)};
	}
//	bind(mapping = {
//		scrollup = 'k',
//		scrolldown = 'j',
//		search = '/'}
//	){
//		for(const [func, key] in Object.entries(mapping)){
//			key(key, this.operation[func]);
//		}
//	}
}
