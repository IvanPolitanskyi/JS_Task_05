'use strict'
let users = [
  { name: 'Vanya', gender: 'M', bdate: 1999 },
  { name: 'Vasilisa', gender: 'F', bdate: 1998 },
  { name: 'Michel', gender: 'M', bdate: 1998 },
  { name: 'Alexey', gender: 'M', bdate: 1998 },
  { name: 'Kate', gender: 'F', bdate: 1995 },
  { name: 'Tanya', gender: 'F', bdate: 1994 },
  { name: 'Dmitriy', gender: 'M', bdate: 1997 },
  { name: 'Kristy', gender: 'F', bdate: 1996 },
  { name: 'David', gender: 'M', bdate: 1991 },
  { name: 'Anna', gender: 'F', bdate: 2000 },
  { name: 'Charly', gender: 'F', bdate: 1994 },
  { name: 'Maksim', gender: 'M', bdate: 1985 },
]
function calculateAverageAge(array) {
  var today = new Date();
  var year = today.getFullYear();
  let age = 0;
  for (let i = 0; i < array.length; i++) {

    age = age + array[i].bdate

  }
  return year - (Math.round(age / array.length));

}
console.log("Average age rounding to integer:  " + calculateAverageAge(users));

function calculateAverageGender(array) {
  let counterOfGenderM = 0;
  let counterOfGenderF = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].gender == 'M') {
      counterOfGenderM++;
    }
    else counterOfGenderF++;
  }
  if (counterOfGenderM > counterOfGenderF) {
    return ['There are more men in quantity of ' + counterOfGenderM];
  }
  else if (counterOfGenderM < counterOfGenderF) {
    return ['There are more women in quantity of ' + counterOfGenderF];
  }

  else return 'The number of men and women is equally ';


}
console.log(calculateAverageGender(users));

function newArray(array) {

  let acopy = [];

  array.forEach(function (item) {
    let clone = {};

    for (let key in item) {
      clone[key] = item[key];
    }

    clone.salary = Math.round(Math.random() * 30000);
    acopy.push(clone);
  })


  return acopy;
}

console.log(newArray(users));