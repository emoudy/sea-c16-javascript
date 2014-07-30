var oldestLivingParent = function(set){
	console.time('timer');
	var oldest = {
		age:0
	};
	for (var item = 0; item < set.length; item++) {
		if( isLivingParent(set, set[item].name ) ){
			if( set[item].age > oldest.age){
				oldest = set[item];
			}
		}
	}
	console.timeEnd('timer');
	return oldest;
};

var isLivingParent = function(set,name){
	var match = false,
		item = 0;
	while( item < set.length && !match) {
		if( !!set[item].age && set[item].parent === name ) match = true;
		item++;
	}
	return match;
};
