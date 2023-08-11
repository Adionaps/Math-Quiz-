





Player1_name=localStorage.getItem("player1_name")
Player2_name=localStorage.getItem("player2_name")
Player1_score=0
Player2_score=0
document.getElementById("player1_name").innerHTML=Player1_name+" : "
document.getElementById("player2_name").innerHTML=Player2_name+" : "
document.getElementById("player1_score").innerHTML=Player1_score
document.getElementById("player2_score").innerHTML=Player2_score
document.getElementById("player_question").innerHTML="question turn- "+Player1_name
document.getElementById("player_answer").innerHTML="answer turn- "+Player2_name

function send(){
   N1=document.getElementById("number1").value
   N2=document.getElementById("number2").value
   Actualanswer=parseInt(N1)*parseInt(N2)
    QW= "<h4 id='word_display'>"+N1+"X"+N2+"</h4>"
    ib="<br>answer:<input id='input_check_box' type='text'>"
    CB="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row=QW+ib+CB
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""
}
Question_turn="player1"
Answer_turn="player2"
function check(){
    getanswer=document.getElementById("input_check_box").value
    if(getanswer==Actualanswer){
        if(Answer_turn=="player1"){
            Player1_score=Player1_score+1
            document.getElementById("player1_score").innerHTML=Player1_score
        }
        else{
            Player2_score=Player2_score+1
            document.getElementById("player2_score").innerHTML=Player2_score
        }
    }
    if(Question_turn=="player1"){
        Question_turn="player2"
        document.getElementById("player_question").innerHTML="question turn- "+Player2_name
    }
    else{
        Question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn- "+Player1_name
    }
    if(Answer_turn=="player1"){
       Answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn- "+Player2_name
    }
    else{
        Answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn- "+Player1_name
    }
    document.getElementById("output").innerHTML=""
}
