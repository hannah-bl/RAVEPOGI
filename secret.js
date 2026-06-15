const unlocked =

localStorage.getItem("arcReactor")==="completed"
&&
localStorage.getItem("repulsorTraining")==="completed"
&&
localStorage.getItem("suitAssembly")==="completed"
&&
localStorage.getItem("jarvisQuiz")==="completed";

if(!unlocked){

window.location.href =
"timeline.html";

}

const text = `

To My Very Own Tony Stark,
‎
‎Hello, lovee! Happy Birthday poo! I hope nagustuhan mo small gift ko for you hehe. 
‎This is your first birthday na we're together, and I pray na I get to celebrate more of your birthdays with you. Or much better, celebrate the rest of your birthdays.
‎
‎Sobrang grateful ako kay God na binigay ka niya sa'kin. You are the best thing na nangyari sa buhay ko, beside my unos of course HAHAHAHAHHA. Thank you for being you, love. You are a great man; a great person. Alam ko often, you doubt yourself, or even compare yourself to others. Pero sana hindi, kasi you're incomparable. Sobrang proud ako sa'yo, lovee. Siguro hindi mo nakikita, or hindi mo dama, pero malayo ka na. Wala ka pa man sa goal mo ngayon, pero you're on your way. At may sarili kang timeline. Just because nakuha na ng iba yung goal nila sa buhay doesn't mean you should too. May sarili kang path, timeline at istorya. Hindi mo po kailangang magmadali.
‎
‎I'm sorry po, lovee. Hindi natuloy yung plano natin para sa birthday mo. I wish I had the means to celebrate with you in person, kaso wala e. Sorry poo, I have nothing to give you ngayong birthday mo :( And I'm sorry, I couldn't make your day special. I could only give you my own 'arc reactor' sa ngayon hehe. 
‎
‎I lovee youuu, pogi! Alam mo yan, tol. Ang pogi pogi moo. Alam ko ide-deny mo na naman so stfu. 
‎
‎Happy Birthday po ulit! I lovee youu so much, love love koo! 
‎
‎
‎From,
‎Your Pepper.

MISSION STATUS:
COMPLETE

J.A.R.V.I.S. ASSESSMENT:
LEGENDARY


HAPPY BIRTHDAY.
RAVE KO!
`;

const message =
document.getElementById("message");

let index = 0;

function typeWriter(){

if(index < text.length){

message.textContent +=
text.charAt(index);

index++;

setTimeout(
typeWriter,
25
);

}else{

document
.getElementById(
"celebrateBtn"
)
.style.display =
"inline-block";

}

}

typeWriter();

document
.getElementById(
"celebrateBtn"
)
.onclick = ()=>{

window.location.href =
"celebration.html";

};