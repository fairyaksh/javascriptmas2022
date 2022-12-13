// includes -- checks for str inside str, returns boolean
// contains -- used in DOM manipulation to check if a node is a descendant of a node
// https://dmitripavlutin.com/replace-all-string-occurrences-javascript/#2-replace-with-a-global-regular-expression
const panic = (str) => {
    let searchExp = " ";
    let replaceWith = " 😱 ";
    let resultStr;
    if (str.includes(searchExp)) {
        resultStr = str.replaceAll(searchExp, replaceWith)
    } else {
        resultStr = str;
    }
    let shoutStr = resultStr.toUpperCase();
    let finalStr = shoutStr.concat("!")
    return finalStr;
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
console.log(panic("hello"))
console.log(panic("ARIGATO"))
console.log(panic("ARIGATO GOZAIMASU"))