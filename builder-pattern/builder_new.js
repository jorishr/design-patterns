class Address {
    constructor(zip, street){
        this.zip = zip;
        this.street = street;
    };
};

// the object paramaters are optional and default to undefined if not specified
// if none of the optional paramaters is passed, default to empty object
// you can also specify default values that may be overwritten later
class User {
    constructor(name, {age, phone, address} = {})
    /*constructor(name, {age = 18, phone = '222222222', address} = {})*/{
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.adrress = address;
    };
};

let newUser = new User('John', {age: 19, phone: 11111111});
console.log(newUser);   //-> User {name: 'John', age: 19, phone: 11111, address: undefined}

let otherUser = new User('Jane', {age: 22, address: new Address('1000', 'Main Street')});
console.log(otherUser); 
/* -> User {name: 'Jane', age: 22, phone: undefined, address: Address}
        address: Address 
            street: "Main Street"
            zip: "1000"
*/
    