import { v4 as uuidv4, v4 } from 'uuid';

var module;
class InMemoryStorage{
    constructor(){
        this.storage= new Map();
    }
    Create(collectionName, item){
        item.id = uuidv4();
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

module.exports.InMemoryStorage.find;
module.exports.InMemoryStorage.Create;
module.exports.InMemoryStorage.Where;
module.exports.InMemoryStorage.remove;
