// Lodash
const _ = require("lodash");
// Only change code below this line
// users nested array with four objects starts here
var users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female",
  },
  {
    id: 3,
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male",
  },
  {
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female",
  },
];
// users nested array with four objects starts here
// getUsers function - list of users starts here
function getUsers() {
  var output = "";
  for (var i = 0; i < users.length; i++) {
    output += `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender} \n`;
  }
  return output;
}
// getUsers function - list of users ends here
// findUser(id) starts here
function findUserById(id) {
  try {
    // add appropriate code here
    var user = _.find(users, { id: id });
    var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
  } catch (error) {
    return "Cannot read property 'id'"; // Change this line
    console.log(); // Change this line
  }
  return iFindUser;
}
// findUserById(id) function ends here
// Only change code above this line
getUsers();
findUserById(3);
console.log(getUsers());
console.log("fu", findUserById(3));

module.exports = findUserById;
