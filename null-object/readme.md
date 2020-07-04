# Javascript design patterns: the NULL object
## The Problem: guest users and authentication
We need to account for the possibility that a user browses the site as a guest. This means that each time you display content that is meant for logged-in users only, you need to add `if` statements that can easily clutter the code.

## Example
```js
function printUser(id) {
    const user = getUser(id);
    let name = 'Guest';
    if (user != null && user.name != null) name = user.name;
        console.log(`Hello ${name}`);

    if (user != null && user.hasAccess != null && user.hasAccess()) {
        console.log('You have access');
    } else {
        console.log('You are not allowed here');
    };
};
```
## Solution
Add a null object. In this case a constructor that creates a default user with a name and the relevant properties. If the user is a guest there is an object you can work with as if it were another user, thereby simplifying the code.
```js
class NullUser {
    constructor() {
      this.name = 'Guest'
    }
    hasAccess() {
      return false
    }
  }
 ```
