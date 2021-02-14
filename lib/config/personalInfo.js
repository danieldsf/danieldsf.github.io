
let getBirthDate = (month, day, year) => {
  let currentDate = new Date();
  currentDate.setDate(day);
  currentDate.setMonth(month-1);
  currentDate.setFullYear(year);
  return currentDate
};

function calculateAge(birthday) { // birthday is a date
  let ageDifMs = Date.now() - birthday;
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


const person = {
  name: 'Daniel Farias',
  email: 'daniel.dsfarias@gmail.com',
  website: 'https://danieldsf.github.io',
  birthDate: getBirthDate(11, 12, 1995),
  age: calculateAge(getBirthDate(11, 12, 1995)),
  address: 'Luis Correia, Piauí, Brazil',
  canFreelance: true,
  roles: ['Software Engineer', 'Fullstack Developer'],
  telegram: 'https://t.me/danieldelatouche',
  linkedin: 'https://www.linkedin.com/in/danieldsfarias/',
  degree: 'Bachelor'
};

export default person;