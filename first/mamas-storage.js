var uuid = require('uuid');
var module;

class InMemoryStorage{
    constructor(){
        this.storage= new Map();
    }
    Create(collectionName, item){
        item.id = uuid.v4();
        if(!this.storage.has(collectionName))
        {
            this.storage.set(collectionName,[]);
        }
        this.storage.get(collectionName).push(item);
        return item;
    }
    find(collectionName, findFunc){
        return this.storage.get(collectionName).filter(item => findFunc(item))
    }

    Where(collectionName, whereObj){
        return this.storage.get(collectionName).filter(item => {
            let diff = Object.keys(whereObj).filter(key => whereObj[key] !== item[key]);
            return (diff.length == 1 && diff[0] == 'id') || diff.length == 0;
        });
    }

    remove(collectionName, findFunc){
        let collection = this.find(collectionName, this.findFunc);
        for(var i = this.storage.get(collectionName).length; i>=0; i--){
            if(collection.filter(item=> item.id == this.storage.get(collectionName)[i].id).length == 1 ){
                this.storage.get(collectionName).remove(this.storage.get(collectionName)[i]);
            }
        }
        return collection;
    }
}

var x = new InMemoryStorage();
module.exports.find = x.find;
module.exports.Create = x.Create;
module.exports.Where = x.Where;
module.exports.remove = x.remove;
