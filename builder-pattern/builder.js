class Address {
    constructor(zip, street) {
      this.zip = zip;
      this.street = street;
    };
};
  
class User {
    constructor(name) {
      this.name = name;
    };
};
  
class UserBuilder {
    constructor(name) {
      this.user = new User(name);
    };
  
    setAge(age) {
      this.user.age = age;
      return this; // return the userBuilder to chain the methods together
    };
  
    setPhone(phone) {
      this.user.phone = phone;
      return this;
    };
  
    setAddress(address) {
      this.user.address = address;
      return this;
    };
  
    getUser() {
      return this.user; //return the entire user object
    };
};

const newUser = new UserBuilder('John');
newUser.getUser() //-> User {name: 'John'}

const newUserWithAge = new UserBuilder('John').setAge(18);
newUserWithAge.getUser();   //-> User {name: 'John', age: 18}

const newUserWithAddress = new UserBuilder('John').setAddress(new Address('12345', 'Main St.'));
newUserWithAddress.getUser();   // -> User {name: "John", address: Address}
