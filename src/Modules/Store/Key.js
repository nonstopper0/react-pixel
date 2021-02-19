
export function getKey(key) {
    if (!key && key !== 0) {
        return null;
    }

    try {
        const valueStr = sessionStorage.getItem(key);
        if (valueStr) {
            return JSON.parse(valueStr)
        } else {
            return null;
        }
    } catch(err) {
        console.log(err)
        return null;
    }
}

export function storeKey(key, obj) {
    if (!key && key !== 0) {
        console.log('Error: Key is missing');
    } 

    try {
        sessionStorage.setItem(key, JSON.stringify(obj));
    } catch(err) {
        console.log(err)
    }
}

export function removeKey(key) {
    try {
        sessionStorage.removeItem(key)
    } catch(err) {
        console.log(err)
    }
}