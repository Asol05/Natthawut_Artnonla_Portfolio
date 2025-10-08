window.onload = GetComponent;

var topic = null
var reply1 = null
var reply2 = null
var user_input = null
let textbox = new Array

function GetComponent(){
    topic = document.getElementById('topic')
    reply1 = document.getElementById('reply1')
    reply2 = document.getElementById('reply2')
    user_input = document.getElementById('message')

    textbox.push(topic)
    textbox.push(reply1)
    textbox.push(reply2)
}

let index = 0;

function postFunction(){
    if(index >= 3 || user_input.value == "") return 
    textbox[index].innerHTML = user_input.value
    user_input.value = ""
    index++
}

function clearFunction(){
    index = 0
    for(i = 0; i < textbox.length; i++){
        textbox[i].innerHTML = ""
    }
    user_input.value = ""
}