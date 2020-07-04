const   loginBtn      = document.getElementById('loginBtn'),
        selectInput   = document.getElementById('user-select'),
        contentContainer = document.getElementById('content');

class User {
    constructor(name) {
      this.name = name;
    };
    hasAccess() {
      return true;
    };
};

class NullUser {
    constructor() {
      this.name = 'Guest'
    };
    hasAccess() {
      return false
    };
};

loginBtn.addEventListener('click', loginClick);

function loginClick() {
    let name = selectInput.value;
    if (name === '') name = null;
    loginUser(getUser(name));
};

// Call this function to render the welcome code on the screen on load
loginClick();

// either you get to work with the NullUser with property name=guest and hasAccess=false or a normal user
function getUser(name) {
    if (name == null) {
      return new NullUser()
    } else {
      return new User(name)
    };
};

// the if statement check user access if statement is now greatly simplified
function loginUser(user) {
    let message = `<p class="text-danger">You must be logged in to see the content</p>`;
    if (user.hasAccess()) {
      message = `<p>Congrats you are logged in</p>`;
    };
    contentContainer.innerHTML =
      `
        <hr>
        <h3 class="text-center">Welcome ${user.name}</h3>
        ${message}
      `;
};
