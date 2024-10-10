//Step one: 
function greet(name) {
return "Hello " + name;
}


console.log(greet("Othniel")); 

//Step Two 
function addNumbers(num1, num2) {
return num1 + num2;
};
console.log(addNumbers(4, 4));


//Step three
let x = 10; 

function changeValue() {
let x = 20;
console.log("Local: x =", x); 
}

changeValue(); 
console.log("Global: x =", x); 


// Step four


function createcounter(){
    let count = 0; 

    function increment(){
        count++; 
        console.log(`Apples picked: ${count}`); 
    

}

function getcount(){
    return count; 


}
    return {increment,getcount};

    }

const counter = createcounter(); 

counter.increment(); 
counter.increment(); 
counter.increment(); 

console.log(`total Apples picked is: ${counter.getcount()}`);
