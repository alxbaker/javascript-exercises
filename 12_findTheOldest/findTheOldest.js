const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if ("yearOfDeath" in oldest) {
            currentOldest = oldest.yearOfDeath - oldest.yearOfBirth;
        } else {
            currentOldest = new Date().getFullYear() - oldest.yearOfBirth;            
        }
        if ("yearOfDeath" in person) {
            current = person.yearOfDeath - person.yearOfBirth;
        } else {
            current = new Date().getFullYear()- person.yearOfBirth;
        }
        if (current > currentOldest) {
            return person;
        } else {
            return oldest;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
