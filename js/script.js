
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


// Question 4

heading.className = "subheading";

console.dir(heading);


// Question 5

const paragraphs = document.querySelectorAll ("p");

for (let i= 0; i < paragraphs.length; i++){
    console.dir(paragraphs[i]);    
    paragraphs[i].style.color = "red";
}


// Question 6

const resultsContainer = document.querySelector (".results");
console.dir(resultsContainer);

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7

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

function createList(list){
    for (let i= 0; i < list.length; i++){
        console.log(list[i].name);
    }
}
createList(cats);


// Question 8

function createCats(cats){
    let html = "";

    for (let i= 0; i < cats.length; i++){

        if(cats[i].age === undefined) {
           cats[i].age = "Age Unknown";
        }

        html += `<h5> ${cats[i].name} </5> 
        <p> ${cats[i].age} </p>` 
        
        console.log(html);
    }
    
  return html;

}
createCats(cats);

const container = document.querySelector(".cat-container");
container.innerHTML = createCats(cats)
