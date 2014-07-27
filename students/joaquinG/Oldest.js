// Given the following data structure
// implement a oldestLivingParent method
// that will return the name of the oldest
// living parent.

var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
];

var names = [];

function list(people) {
    for (i = 0; i < people.length; i++) {
        if (people[i].parent  && people[i].age) {      
          names.push(people[i].name);
          names.push(people[i].age);
        }
    }

    return names;
}



var names = list(people);

console.log(names);