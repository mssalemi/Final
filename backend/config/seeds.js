const User = require('../models/User');
require('./database');

/*

  const newUser = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      type: req.body.type,
      theme: req.body.theme,
      password: req.body.password,
      img: req.body.img
  });

*/

const randomEmails100 =
  'Joaquina Langdon Frieda Atwood Kathie Van Lorie Jacques Alysha Burnham Katharine Easton Hillary Keith Kimberely Fishman Justine Padgett Alva Geer Asley Hoang Devora Irby Takisha Thrash Desirae Connor Destiny Sauls Quentin Loyd Beatriz Hartley Virgil Gaddy Errol Embry Divina Hinkle Dena Kasper Leisha Hearn Kermit Morrell Wynona Alaniz Jeanene Marquis Elnora Braun Joeann Daley Millard Nickel Nam Lemon Karren Mcgrew Ester Monk Carylon Shaver Tana Guthrie Vergie Travers Gabrielle Siler Jospeh Valentin Dorsey Cavanaugh Lourdes Ginn Ranee Estep Emilie Lombard Cherie Dyer Janett Calvin Lera Abel Synthia Florez Berniece Poulin Breana Westfall Tawna Finley Ernie Keefer Otto Poore Annett Carrington'.split(
    ' '
  );

const randomFirstNames =
  'Omar Vargas Shane Cox Bryan Alvarado Marc Fuller Miriam Ballard Gregory Holmes Boyd Berry Brittany Rogers Colleen Moody Brandi Stewart Lela Ford Tyler Willis Cynthia Shaw Fredrick Mendoza Joseph Mccormick Juan Andrews Alton Wong Ricky Bowman Jeff Bishop Brett Barber Armando Keller Karla Wilkerson Cora Mathis Devin Jimenez Kelly Richardson Dwayne Ward Gertrude Carlson Joshua Gross Lorene Farmer Dominick Ross Trevor Hudson Doyle Edwards Hubert Cruz Bennie Reynolds Patrick Romero Rolando Duncan Marcus Norman Cassandra Vasquez Willis Palmer Jill Hawkins Ella Norris Justin Campbell Christopher Scott Tom Leonard Mae Cooper Ashley Boyd Latoya Johnson Pearl Maldonado Marion Gill Kenneth Becker'.split(
    ' '
  );

const randomLastName =
  'Michael Price Joe Bryant Charles Murphy Lori Anderson Daniel Reed Barbara Walker Richard Campbell Terry Phillips Kimberly Ross Gary Jones Justin Lopez Rose Garcia Bruce Rivera David Parker Jonathan Howard Nancy Barnes Aaron Edwards Gerald Rodriguez Edward Torres Anne Perry Eric James Tina King Ann Smith Albert Collins Harry White Steve Watson Alice Richardson Ernest Cook Bonnie Butler Sandra Long Donald Alexander Kenneth Baker Carol Thomas James Sanders Jack Roberts Andrew Simmons Jerry Patterson Laura Martin Deborah Clark Brenda Cox Joyce Turner Eugene Peterson Cheryl Davis Sharon Young Philip Harris Joan Green Sara Perez Jeremy Morgan Carl Bell Keith Evans'.split(
    ' '
  );

const seedData = randomEmails100.map((email, i) => {
  return {
    email: `${email}@$$$MEHDI-fakedata.com`,
    firstName: randomFirstNames[i],
    lastName: randomLastName[i],
    type: 'player',
    theme: 'Dark',
    password: '12345',
    img: 'N/A',
  };
});

// User.insertMany(seedData, (err, users) => {
//   err ? console.log(err) : console.log(users);
// });

const user = User.find({}, (err, users) => {
  console.log(users);
});
