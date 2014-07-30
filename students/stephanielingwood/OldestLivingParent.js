var oldestLivingParent = function(familyTree) {
    OldestParent = {name:'notAPerson', age: 0, parent: 'alsoNotAPerson'};

    for (i = 0; i < familyTree.length; i++) {
        Parent = {name: familyTree[i].parent, age: '', parent: ''};
        
        for (j = 0; j < familyTree.length; j++) {

            if (familyTree[j].name === Parent.name) {
                Parent.age = familyTree[j].age;
                Parent.parent = familyTree[j].parent;

                if ((120 - Parent.age) < (120 - OldestParent.age)) {
                    OldestParent = Parent;
                }
            }
        }
    }       
    return OldestParent;
}