export const concatArrays = (...arrays) => 
    arrays.reduce((concatedArray, array) => 
        [...concatedArray, ...array]);