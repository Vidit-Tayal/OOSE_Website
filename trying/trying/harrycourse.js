function changevid4(){
    let v = document.getElementById("curr_video");
    v.src = "https://www.youtube.com/embed/qpU3WIqRz9I?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR";

    // CHANGE DESCRIPTION
    let t = document.getElementById("desc_text");
    let k = document.getElementById("ul");
    // k.hidden = true;
    t1 = "Primitive Data Types are a set of basic data types in JavaScript.";
    t2= "<br><br>Object is a non-primitive datatype in JavaScript.";
    t5 = "<br><br>These are many primitive datatypes in JavaScript:";
    t.innerHTML = t1+t2+t5;

    l1 = document.getElementById("li1");
    l1.innerHTML = "Null";
    l2 = document.getElementById("li2");
    l2.innerHTML = "Number";
    l3 = document.getElementById("li3");
    l3.innerHTML = "String";

}
function changevid3(){
    let v = document.getElementById("curr_video");
    v.src = "https://www.youtube.com/embed/Icev9Oxf0WA?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR";

    // CHANGE DESCRIPTION
    let t = document.getElementById("desc_text");
    let k = document.getElementById("ul");
    // k.hidden = true;
    t5 = "var vs let vs const in JavaScript";
    t.innerHTML = t5;

    l1 = document.getElementById("li1");
    l1.innerHTML = "var is globally scoped while let and const are block scoped.";
    l2 = document.getElementById("li2");
    l2.innerHTML = "var can be updated & re-declared within its scope.";
    l3 = document.getElementById("li3");
    l3.innerHTML = "var variables are initialized with undefined whereas let and const variables are not initialized.";
}

function changevid2(){
    let v = document.getElementById("curr_video");
    v.src = "https://www.youtube.com/embed/Q4p8vRQX8uY?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR";
    let t = document.getElementById("desc_text");
    let k = document.getElementById("ul");
    // k.hidden = true;
    t1 = "Just like we follow some rules while speaking English (the grammar), we have some rules to follow while writing a JavaScript program. The set of these rules is called syntax in JavaScript.\n";
    t2= "<br><br>What is a Variable?<br>A variable is a container that stores a value.<br>This is very similar to the containers used to store rice, water and oats (Treat this as an analogy!)";
    t3="<br><br>Rules for choosing variables names";
    t.innerHTML = t1+t2+t3;

    l1 = document.getElementById("li1");
    l1.innerHTML = "Letters, digits, underscores and $ sign allowed.";
    l2 = document.getElementById("li2");
    l2.innerHTML = "Must begin with a $, _ or a letter.";
    l3 = document.getElementById("li3");
    l3.innerHTML = "JavaScript reserved words cannot be used as a variable name.";
}
function changevid1(){
    let v = document.getElementById("curr_video");
    v.src = "https://www.youtube.com/embed/ER9SspLe4Hg?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR";


    // CHANGE DESCRIPTION
    let t = document.getElementById("desc_text");
    let k = document.getElementById("ul");
    // k.hidden = true;
    t1 = "Programming is a way to talk to computers. A language like Hindi, English or Bengali can be used to talk to a human but for computers we need straightforward instructions.";
    t2= "<br><br>Computer is Dumb!";
    t3="<br><br>When was the last time you ordered some cereal and got DVDs of Serial?";
    t4 = "<br><br>Programming is the act of constructing a program, a set of precise instructions telling a computer what to do.";
    t5 = "<br><br>What is EcmaScript?";
    t.innerHTML = t1+t2+t3+t4+t5;

    l1 = document.getElementById("li1");
    l1.innerHTML = "ECMAScript is a standard on which JavaScript is based!";
    l2 = document.getElementById("li2");
    l2.innerHTML = "It was created to ensure that different documents on JavaScript are actually talking about the same language.";
    l3 = document.getElementById("li3");
    l3.innerHTML = "JavaScript and ECMAScript can almost always be used interchangeably. JavaScript is very literal in what it allows.";
}