// In this challenge you will be given a relation between two numbers, written as a string. 
// Write a function that determines if the relation is true or false. 

function isTrue(relation) {
	let answer = false
    if (relation.includes("=")) {
        let val1 = parseInt(relation.slice(0, relation.indexOf("=")))
        let val2 = parseInt(relation.slice(relation.indexOf("=") + 1))
        val1 === val2 ? answer = true : null
    }
    if (relation.includes("<")) {
        let val1 = parseInt (relation.slice(0, relation.indexOf("<")))
        let val2 = parseInt(relation.slice(relation.indexOf("<")))
        val1 < val2 ? answer = true : null
    }
    if (relation.includes(">")) {
        let val1 = parseInt(relation.slice(0, relation.indexOf(">")))
        let val2 = parseInt(relation.slice(relation.indexOf(">") + 1))
        val1 > val2 ? answer = true : null
    }
    return answer
} 

console.log(isTrue("8<7"), false)
console.log(isTrue("15>4"), true)
console.log(isTrue("6>6"), false)
console.log(isTrue("10<10"), false)
console.log(isTrue("10<9"), false)
console.log(isTrue("5>6"), false)
console.log(isTrue("2=2"), true)
console.log(isTrue("5=13"), false)
console.log(isTrue("15=137"), false)
console.log(isTrue("101=101"), true)