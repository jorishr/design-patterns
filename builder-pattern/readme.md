# DESIGN PATTERNS: OBJECT BUILDER PATTERN

# The Problem: complex object with optional values

- Example:   

```
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  };
};

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  };
};

const user = new User('Bob', undefined, undefined, new Address('12345', 'Main St.'));
```

Keeping track of all the optional properties when creating a new user can become very complex very fast.

# The solution
- A. the traditional way with a builder constructor function -> see builder.js
- B. the ES6 way with paramater object  -> see builder_new.js

The ES6 way is preferable unless you work with a really complex object, then the traditional way may more adequate. 
