export default (object, keys) => {
    const newObject = {...object};

    for (const key of keys) {
        newObject[key] = null;
    }

    return newObject;
}