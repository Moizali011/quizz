import inquirer from "inquirer";

console.log("welcome to my advanture quiz:")
console.log("you are required to gain maximum 4 points for the window.")

let points = 0 
/// question 1///
let question1 = await inquirer.prompt(
    [
        {
            name:"one",
            message:"typescript is a superset off?",
            type:"list",
            choices:["python","c++","java","javascript"]
        }
    ]
)


if(question1.one =="javascript"){
    console.log("your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}
//// question 2///
let question2 = await inquirer.prompt(
    [
        {
            name:"two",
            message:"who is the founder of microsoft?",
            type:"list",
            choices:["elon musk","bill gates","mark",]
        }
    ]
)


if(question2.two =="bill gates"){
    console.log("your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}

///question 3///
let question3 = await inquirer.prompt(
    [
        {
            name:"three",
            message:"capital of pakistan",
            type:"list",
            choices:["karachi","lahore","islamabad","kpk"]
        }
    ]
)

if(question3.three=="islamabad"){
    console.log("your answer is correct");

}else{
    console.log("incorrect answer");
}
///question 4///
let question4 = await inquirer.prompt(
    [
        {
            name:"four",
            message:"who is the current governer of sindh",
            type:"list",
            choices:["kamran tessori","ali","abdullah","moiz"]
        }
    ]
)
if(question4.four=="kamran tessori"){
    console.log("your answer is correct");
}else{
    console.log("incorrect answer");
}

////question 5///

let question5 = await inquirer.prompt(
    [
        {
            name:"five",
            message:"in which language you are hearing my voice",
            type:"list",
            choices:["english","urdu","pashto","sindhi","balochi"]
        }
    ]
)
if(question5.five=="urdu"){
    console.log("your answer is correct");

}else{
    console.log("incorrect answer");
}

///output condition///

if (points>=4){
    console.log("congratulation");
    console.log(`your points:${points}`);
}else{
    console.log("you loss! try next time");
    console.log(`your points:${points}`);
}













