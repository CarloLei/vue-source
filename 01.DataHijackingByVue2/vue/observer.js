import defineReactiveData from "./reactive";

function Observer(data) {
    if (Array.isArray(data)) {
        
    } else {
        this.walk(data);
    }
}

Observer.prototype.walk = function (data) {
    var keys = Object.keys(data);
    
    for (let index = 0; index < keys.length; index++) {
        let key = keys[index],
            value = data[key];
        
        defineReactiveData(data, key, value);
    }
}

export default Observer;