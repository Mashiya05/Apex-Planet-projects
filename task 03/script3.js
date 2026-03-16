function checkAnswer(answer){

    let result = document.getElementById("result");

    if(answer === "A"){
        result.innerText = "Correct Answer!";
    }
    else{
        result.innerText = "Wrong Answer!";
    }


  
}

function checkAnswer2(answer){
  let result = document.getElementById("result2");

  if(answer ==="C"){
    result.innerText="Correct Answer!";
    }
  else{
    result.innerText="Wrong Answer!";
  }
}

function checkAnswer3(answer){
  let result = document.getElementById("result3");

  if(answer === "A"){
    result.innerText="Correct Answer!";

  }
  else{
    result.innerText="Wrong answer!";
  }
}


async function getJoke(){

    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();

    document.getElementById("joke").innerText =
    data.setup + " - " + data.punchline;

}