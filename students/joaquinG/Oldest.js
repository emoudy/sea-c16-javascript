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

function oldestLivingParent(people) { 
  var names = [];
    for (i = 0; i < people.length; i++) {
        if (people[i].hasOwnProperty('age')) {
            names.push(people[i].name);
        }
     
    }
    return names;
}
console.log(oldestLivingParent(people));