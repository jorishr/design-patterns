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
  
    build() {
      return this.user; // the actual build method that returns the new user
    };
};

let newUser = new UserBuilder('John').build();
console.log(newUser);   //-> User {name: 'John'}

let newUserWithAge = new UserBuilder('John').setAge(18).build();
console.log(newUserWithAge);   //-> User {name: 'John', age: 18}

/* using this methods you can more easily set optional property values without
having the add undefined for the ones that are not set*/

let newUserWithAddress = builder.setAddress(new Address('12345', 'Main St.')).build()