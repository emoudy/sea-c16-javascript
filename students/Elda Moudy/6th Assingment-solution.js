		var sortedPeople = people.sort(function(a, b) {
			if (a.age > b.age) {
				return -1;
			}	else if (a.age < b.age) {
				return 1;
			} else {				
				return 0;
			}
		});

		var oldestSorted = sortedPeople;
		var oldest = [];

		var oldestPeople = function(){
			oldest.push(sortedPeople[0]);
			for (var i = 1; i <= people.length; i++) {
				if (oldestSorted[0].age == oldestSorted[i].age) {
					oldest.push(oldestSorted[i]);
				} else {
					break;
				}
			};
		};

		oldestPeople();
		console.log(oldest);