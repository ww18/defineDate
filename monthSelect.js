(function(factory){
	if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(['jquery', 'moment'], factory);
		} else if (typeof exports === 'object' && typeof module !== 'undefined') {
			// CommonJS. Register as a module
			module.exports = factory(require('jquery'), require('moment')); 
		} else {
			// Browser globals
			factory(jQuery, moment);
		}
})(function($, moment){
	$.fn.monthSelect = function(opt){
		if (!opt) opt = {};
		opt = $.extend(true,
		{
			getValue: function()
			{
				return $(this).val();
			},
			setValue: function(s)
			{
				if(!$(this).attr('readonly') && !$(this).is(':disabled')){
					$(this).val(s);
				}
			}
		},opt);

		var monthSelect = new MonthSelect($(this));

		$(this).on('click', function(){
			monthSelect.show();
		})
	}

	function MonthSelect(t){
		var left = t.offset().left;
		var top = t.offset().top;
		var html = ''
	}
})




