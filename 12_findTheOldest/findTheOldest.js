const findTheOldest = function (people) {
  let oldest = people.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
    if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();

    return a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth
      ? 1
      : -1;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
