var even = function (that) {
	var regist = {};
	that.fire = function (event) {
		var array, func, handler, i,
		type = typeof event === 'string' ? event :event.type;
		if(regist.hasOwnProperty(type)) {
			array = regist[type];
			for(i = 0; i < array.length; i += 1) {
				handler = array[i];
				func = handler.method;
				if (typeof func === 'string') {
					func = this[func];
				}
				func.apply(this, handler.parameters || [event]);
			}
		} 
		return this;
	};
	that.on = function (type, method, parameters) {
		var handler = {
			method : method,
			parameters: parameters
		};
		if(regist.hasOwnProperty(type)) {
			regist[type].push(handler);
		} else {
			regist[type] = [handler];
		}
		return this;
	};
	return that;
};