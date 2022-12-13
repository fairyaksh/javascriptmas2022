import products from "./data.js";

// reference: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-39.php

function getSaleItems(data){
    // 1. first, get only items that are of .type 'sweet'
    const onlySweets = (candy) => {
        return candy.type == "sweet";
    }
    const onlySweetsArr = data.filter(onlySweets);
    // console.log(onlySweetsArr); // [{item: "🍭", price: 2.99, type: "sweet"}, {item: "🍫", price: 1.99, type: "sweet"}, {item: "🍬", price: 0.89, type: "sweet"}]
    
    // 2. only return .item and .price properties
    // 3. assign new array to shoppingCart array
    const removeType = (obj) => {
        const filterOutTypeFunc = (k) => !k.includes("type");
        let getKeys = Object.keys(obj);
        // console.log(getKeys); // ["item", "price", "type"]
        
        let filteredKeys = getKeys.filter(filterOutTypeFunc);
        // console.log(filteredKeys); // ["item", "price"]
        
        let filteredObj = filteredKeys.reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
        // console.log(filteredObj); // {item: "🍭", price: 2.99}

        return filteredObj;
    }
    let shoppingCart = onlySweetsArr.map(removeType);
    return shoppingCart;
};

getSaleItems(products);