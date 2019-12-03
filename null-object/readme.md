# DESIGN PATTERNS: NULL OBJECT

# The Problem: user login

We need to account for the possibility that a user browses the site as a guest. This means that each time you display content that is meant for logged-in users only, you need to add if statements that can become cluttered easily.

This is a lot of extra code to add in every time you want to check user access, and could cause bugs that are easy to miss if you forget to do the null checks.

EXAMPLE:

`function printUser(id) {
    const user = getUser(id);
    let name = 'Guest';
    if (user != null && user.name != null) name = user.name;
        console.log(`Hello ${name}`);

    if (user != null && user.hasAccess != null && user.hasAccess()) {
        console.log('You have access');
    } else {
        console.log('You are not allowed here');
    };
};`

# Solution
Add a null object. In this case a constructor that creates a default user with a name and the relevant properties. If the user is a guest there is an object you can work with as if it were another user, thereby simplifying the code.

See index.js for example implementation

`class NullUser {
    constructor() {
      this.name = 'Guest'
    }
    hasAccess() {
      return false
    }
  }
  `
