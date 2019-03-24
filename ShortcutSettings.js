var _query_str = {
	result_anchor : "",
	search_input_bar : "" 
};
var _operation = {
	scrollup : function(ev){
		if (_idx > 0) {
			_idx--;
			_select(true);
		}
		ev.stopPropagation();
	},
	scrolldown : function(ev){
		if (_idx < $(_query_str.result_anchor).length-1) {
			_idx++;
			_select(true);
		}
		ev.stopPropagation();
	},
	search : function(ev){
		$(_query_str.search_input_bar).select();
		_scroll_window($(_query_str.search_input_bar));
		ev.stopPropagation();
		ev.preventDefault();
	}
};
var _idx;
function _select(focus){
	var anchor_query = _query_str.result_anchor;
	$(anchor_query).css('background-color', 'inherit');
	var link = $(anchor_query+ ':nth('+ _idx+')');
	link.css('background-color', '#fcc');
	if (focus) {
		link.focus();
		_scroll_window(link);
	}
	return link;
};
function _scroll_window(obj){
	$('html, body').animate({
		scrollTop: obj.offset().top - $(window).height()/2,
		scrollLeft: obj.offset().left
	});
}
class ShortcutSettings{
	constructor(
		result_anchor,
		search_input_bar
	){
		_query_str.result_anchor = result_anchor;
		_query_str.search_input_bar = search_input_bar;
	};
	bind(mapping = {
		scrollup : 'k',
		scrolldown : 'j',
		search : '/'}
	){
		for(var func in mapping){
			key(mapping[func], _operation[func]);
		}
	};
	initialize(){
		_idx = 0;
		_select(true);
	};
}
