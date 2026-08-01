let wrongCount = 0;



// 페이지 이동

function nextPage(pageNumber){


    document.querySelectorAll(".page")
    .forEach(page=>{

        page.classList.add("hidden");

    });



    document
    .getElementById("page"+pageNumber)
    .classList.remove("hidden");




    // 음악 시작

    // if(pageNumber === 2){

//     document
//     .getElementById("bgm")
//     .play();

// }




    // 정답 페이지 폭죽

    if(pageNumber === 3 || pageNumber === 5){

        correctEffect();

    }




    // 마지막 페이지

    if(pageNumber === 7){

        correctEffect();

        startBouncingImages();

    }

    if(pageNumber===8){


    document
    .querySelectorAll(".bounce-img")
    .forEach(img=>{

        img.remove();

    });


    let audio =
    document.getElementById("bgm");


    audio.play();

    startLetter();



}
    if(pageNumber===9){

    document
    .getElementById("loveMessage")
    .innerHTML =
    "Click the button ❤️";

}
}








// 폭죽 생성


function createFirework(type){



    const img=document.createElement("img");



    if(type==="correct"){


        img.src="firework.png";

        img.className="firework";


    }else{


        img.src="wrong.png";

        img.className="wrong-firework";


    }




    img.style.left =
    Math.random()*window.innerWidth+"px";



    img.style.top =
    Math.random()*window.innerHeight+"px";





    document
    .getElementById("firework-container")
    .appendChild(img);





    setTimeout(()=>{


        img.remove();


    },

    type==="correct" ? 1200 : 2500

    );



}









// 정답 폭죽


function correctEffect(){


    for(let i=0;i<10;i++){


        setTimeout(()=>{


            createFirework("correct");


        },i*150);


    }


}








// 오답 폭죽


function wrongEffect(){


    for(let i=0;i<5;i++){


        setTimeout(()=>{


            createFirework("wrong");


        },i*200);



    }


}









// 퀴즈1


function checkAnswer(){



    let answer =
    document.getElementById("answer").value;



    let message =
    document.getElementById("message");



    let next =
    document.getElementById("nextButton");





    if(answer=="29"){



        message.innerHTML =
        "Correct! 🎉 Dominika is 29 ❤️";

        correctEffect();

        setTimeout(()=>{

    nextPage(3);

},3000);




    }else{


        message.innerHTML =
        "Wrong 😝 Try again ❤️";



        next.disabled=true;



        showWarning();
        wrongEffect();



    }


}









// 퀴즈2


function checkDays(number){



    let message =
    document.getElementById("daysMessage");



    let next =
    document.getElementById("daysNext");





    if(number===4){



        message.innerHTML =
        "Correct! 🎉 10593 days ❤️";


        correctEffect();

        setTimeout(()=>{

    nextPage(5);

},3000);




    }
    else{


    message.innerHTML =
    "Wrong 😝 Try again ❤️";


    next.disabled=true;


    showWarning();

    wrongEffect();


}



}









// 퀴즈3 버튼 생성


window.onload=function(){



    const box =
    document.getElementById("numberButtons");



    if(box){



        for(let i=1;i<=100;i++){



            let button =
            document.createElement("button");



            button.innerHTML=i;



            button.onclick=function(){


                checkFinal(i);


            };



            box.appendChild(button);



        }


    }



};









// 퀴즈3


function checkFinal(number){



    let message =
    document.getElementById("finalMessage");



    wrongCount++;




    message.innerHTML =
"Wrong 😝 Try again ❤️";


showWarning();

wrongEffect();






    if(wrongCount>=3){



        setTimeout(()=>{


    nextPage(7);


},1000);


setTimeout(()=>{


    nextPage(8);


},7000);



    }


}









// 마지막 이미지 튕김


function startBouncingImages(){



    const images=[

    "photo2.png",

    "photo3.png"

];





    images.forEach(src=>{



        let img =
        document.createElement("img");



        img.src=src;



        img.className="bounce-img";



        img.style.left =
Math.random()*(window.innerWidth-200)+"px";


img.style.top =
Math.random()*(window.innerHeight-200)+"px";


        document
        .getElementById("bounce-container")
        .appendChild(img);






        let x=3;

        let y=3;






        setInterval(()=>{



            let left =
            parseFloat(img.style.left);



            let top =
            parseFloat(img.style.top);





            if(left > window.innerWidth-150 || left < 0){

                x=-x;

            }




            if(top > window.innerHeight-150 || top < 0){

                y=-y;

            }





            img.style.left =
            left+x+"px";



            img.style.top =
            top+y+"px";





        },20);




    });



}
function showWarning(){


let warning =
document.getElementById("warning");



warning.style.display="block";



setTimeout(()=>{


warning.style.display="none";


},1500);



}
let letterTimer;
function startLetter(){


    if(letterTimer){

        clearInterval(letterTimer);

    }



    const text =
`Dear Dominika ❤️

Thank you for every moment
we shared together.

You make my life happier.

I hope we can celebrate
many more birthdays together.

I love you ❤️`;



    let index = 0;


    const box =
    document.getElementById("letter");



    box.textContent = "";



    letterTimer = setInterval(()=>{


        if(index >= text.length){


            clearInterval(letterTimer);


            setTimeout(()=>{

                nextPage(9);

            },3000);


            return;

        }



        box.textContent += text[index];


        index++;


    },80);


}

let messageCount = 0;


const loveMessages=[

"Jesteś moją ulubioną osobą.",

"Mam szczęście, że cię mam.",

"Jesteś moim słońcem..",

"Moje miejsce jest obok ciebie",

];



function nextLoveMessage(){


    messageCount++;


    let msg =
    document.createElement("div");



    msg.className="love-text";



    msg.innerHTML =
    loveMessages[messageCount-1];



    document
    .getElementById("messageArea")
    .appendChild(msg);





    if(messageCount===1){

        msg.classList.add("top-left");

    }



    if(messageCount===2){

        msg.classList.add("bottom-left");

    }



    if(messageCount===3){

        msg.classList.add("top-right");

    }



    if(messageCount===4){

        msg.classList.add("bottom-right");

    }




    if(messageCount===4){


        document
        .getElementById("loveButton")
        .disabled = true;

        setTimeout(()=>{
            nextPage(10);

        },5000);



    }

}