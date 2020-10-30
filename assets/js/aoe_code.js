//Age of empire
var Aoe_code = function (callback) {	
	var aoe_code = {
		addEvent: function (obj, type, fn, ref_obj) {
			if (obj.addEventListener)
				obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				// IE
				obj["e" + type + fn] = fn;
				obj[type + fn] = function () {
					obj["e" + type + fn](window.event, ref_obj);
				}
				obj.attachEvent("on" + type, obj[type + fn]);
			}
		},
		removeEvent: function (obj, eventName, eventCallback) {
			if (obj.removeEventListener) {
				obj.removeEventListener(eventName, eventCallback);
			} else if (obj.attachEvent) {
				obj.detachEvent(eventName);
			}
		},
		input: "",
		pattern: "727987687989798584858278847273837978", // "howdoyouturnthison"
		keydownHandler: function (e, ref_obj) {
			if (ref_obj) {
				aoe_code = ref_obj;
			} // IE
			aoe_code.input += e ? e.keyCode : event.keyCode;
			if (aoe_code.input.length > aoe_code.pattern.length) {
				aoe_code.input = aoe_code.input.substr((aoe_code.input.length - aoe_code.pattern.length));
			}
			if (aoe_code.input === aoe_code.pattern) {
				aoe_code.code(aoe_code._currentLink);
				aoe_code.input = '';
				e.preventDefault();
				return false;
			}
		},
		load: function (link) {
			this._currentLink = link;
			this.addEvent(document, "keydown", this.keydownHandler, this);
		},
		unload: function () {
			this.removeEvent(document, 'keydown', this.keydownHandler);
		},
		code: function (link) {
			window.location = link
		}
	
	}
	
	typeof callback === "string" && aoe_code.load(callback);
	if (typeof callback === "function") {
		aoe_code.code = callback;
		aoe_code.load();
	}

	return aoe_code;
};
  
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = Aoe_code;
} else {
	if (typeof define === 'function' && define.amd) {
		define([], function() {
			return Aoe_code;
		});
	} else {
		window.Aoe_code = Aoe_code;
	}
}