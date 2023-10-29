// Current list of usernames
let currentUsers: string[] = ['John', 'Jane', 'Alice', 'Bob', 'Eve'];

// New list of usernames
let newUsers: string[] = ['Alice', 'Mike', 'Ella', 'Frank', 'Sarah'];

// Convert all current usernames to lowercase for case-insensitive comparison
let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

// Loop through newUsers and check for uniqueness
for (const newUser of newUsers) {
  let isAvailable = true;
  const newUserLower = newUser.toLowerCase();

  for (const current of currentUsersLower) {
    if (newUserLower === current) {
      isAvailable = false;
      break;
    }
  }

  if (isAvailable) {
    console.log(`Congratulations, '${newUser}' is available!`);
  } else {
    console.log(`Sorry, '${newUser}' is not available. Please enter a new username.`);
  }
}
