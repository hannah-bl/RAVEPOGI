const quiz = [

{
q:"Who built the first Iron Man suit?",
a:["Bruce Banner","Tony Stark","Thor","Loki"],
c:1
},

{
q:"What powers Iron Man's armor?",
a:["Arc Reactor","Tesseract","Mjolnir","Vibranium"],
c:0
},

{
q:"Who created JARVIS?",
a:["Nick Fury","Tony Stark","Pepper Potts","Bruce Banner"],
c:1
},

{
q:"What is Iron Man's AI successor after JARVIS?",
a:["Vision","Friday","Ultron","Karen"],
c:1
},

{
q:"Tony Stark's final words before snapping?",
a:["We are Avengers","I am Iron Man","For Earth","Avengers Forever"],
c:1
},

{
q:"What company does Tony Stark own?",
a:["SHIELD","Hammer Tech","Stark Industries","Oscorp"],
c:2
},

{
q:"Who is Iron Man's closest friend?",
a:["Steve Rogers","James Rhodes","Thor","Peter Parker"],
c:1
},

{
q:"What is War Machine's real name?",
a:["Sam Wilson","James Rhodes","Bucky Barnes","Clint Barton"],
c:1
},

{
q:"Who kidnapped Tony Stark in the first Iron Man movie?",
a:["Hydra","Ten Rings","SHIELD","AIM"],
c:1
},

{
q:"Which Infinity Stone is in Vision's forehead?",
a:["Soul Stone","Mind Stone","Power Stone","Reality Stone"],
c:1
},

{
q:"Who says 'Avengers Assemble!' in Endgame?",
a:["Thor","Tony Stark","Captain America","Hulk"],
c:2
},

{
q:"What metal is Captain America's shield made from?",
a:["Adamantium","Titanium","Vibranium","Steel"],
c:2
},

{
q:"What is Thor's hammer called?",
a:["Stormbreaker","Gungnir","Mjolnir","Vanir"],
c:2
},

{
q:"Who is the main villain in Infinity War?",
a:["Ultron","Thanos","Loki","Red Skull"],
c:1
},

{
q:"What planet is Thor from?",
a:["Vanaheim","Sakaar","Asgard","Xandar"],
c:2
},

{
q:"Who became worthy of Mjolnir in Endgame?",
a:["Tony Stark","Captain America","Hulk","Vision"],
c:1
},

{
q:"What is Spider-Man's real name?",
a:["Miles Morales","Peter Parker","Eddie Brock","Harry Osborn"],
c:1
},

{
q:"Which Avenger is known as the Green Goliath?",
a:["Thor","Hulk","Drax","Vision"],
c:1
},

{
q:"What protocol did Tony Stark activate in Iron Man 3?",
a:["Titan Protocol","House Party Protocol","Avengers Protocol","Mark Protocol"],
c:1
},

{
q:"Who founded the Avengers Initiative?",
a:["Nick Fury","Tony Stark","Steve Rogers","Maria Hill"],
c:0
}

];

let current = 0;
let score = 0;

const question =
document.getElementById("question");

const answers =
document.getElementById("answers");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

    nextBtn.style.display="none";

    question.innerHTML =
    quiz[current].q;

    answers.innerHTML="";

    quiz[current].a.forEach((answer,index)=>{

        const div =
        document.createElement("div");

        div.className="option";

        div.innerHTML =
        String.fromCharCode(65+index)
        + ". " + answer;

        div.onclick =
        ()=>selectAnswer(index);

        answers.appendChild(div);

    });
}

function selectAnswer(index){

    const options =
    document.querySelectorAll(".option");

    options.forEach(
    option=>option.onclick=null
    );

    const correct =
    quiz[current].c;

    if(index===correct){

        score++;

        options[index]
        .classList.add("correct");

    }else{

        options[index]
        .classList.add("wrong");

        options[correct]
        .classList.add("correct");
    }

    nextBtn.style.display =
    "inline-block";
}

nextBtn.onclick=()=>{

    current++;

    if(current<quiz.length){

        loadQuestion();

    }else{

        document
        .querySelector(".question-box")
        .style.display="none";

        answers.style.display="none";

        nextBtn.style.display="none";

        document
        .getElementById("result")
        .style.display="block";

        document
        .getElementById("scoreDisplay")
        .innerHTML =
        score + "/20";

        let rank="";

        if(score===20){

            rank=
            "LEGENDARY IRON MAN";

        }else if(score>=18){

            rank=
            "AVENGERS COMMANDER";

        }else if(score>=15){

            rank=
            "ELITE AVENGER";

        }else if(score>=10){

            rank=
            "SHIELD AGENT";

        }else if(score>=5){

            rank=
            "AVENGERS RECRUIT";

        }else{

            rank=
            "CIVILIAN";
        }

        document
        .getElementById("rank")
        .innerHTML = rank;
    }
};
loadQuestion();

localStorage.setItem(
"jarvisQuiz",
"completed"
);