function oldestLivingParent(people) {

    var isParent = [];
    var oldestParent = 0;

    people.forEach(function (person) {
        isParent.push(person.parent);
    });
    people.forEach(function (person) {
        isParent.forEach(function (dad) {
            if ((person.name === dad) && (person.age > oldestParent)) {
                oldestParent = person;
            }
        });
    });
    return oldestParent.name;
}

oldestLivingParent(people);