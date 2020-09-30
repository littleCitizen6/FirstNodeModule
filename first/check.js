const mod = require('./mamas-storage');
var storage = new mod();
var share = mod.sharedStorage;
console.log(share);
console.log(share.create("person",{name:'carmel', age:21}));
console.log(share.create("person",{name:'liran', age:18}));
console.log(share.find("person",(item) => item.age<22));
console.log(share.find("person",(item) => item.age<20));
console.log(share.Where("person",{name:'carmel', age:21}));


