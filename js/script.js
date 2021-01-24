const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

const cat = {
    complain: function(){
        console.log("Meow!");
    }
}

cat.complain();


// Question 2

var heading = document.querySelector ("h3");
heading.innerHTML = "Updated heading";
 

// Question 3

heading.style.fontSize = "2em";


//Question 4

heading.className = "subheading";

console.dir(heading);


//Question 5

const paragraphs = document.querySelectorAll ("p");

for (let i= 0; i < paragraphs.length; i++){
    console.dir(paragraphs[i]);    
    paragraphs[i].style.color = "red";
}