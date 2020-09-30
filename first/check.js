const mod = require('./mamas-storage');
var storage = new mod();
console.log(storage);
console.log(storage.create("person",{name:'carmel', age:21}));
console.log(storage.create("person",{name:'liran', age:18}));
console.log(storage.find("person",(item) => item.age<22));
console.log(storage.find("person",(item) => item.age<20));
console.log(storage.Where("person",{name:'carmel', age:21}));


