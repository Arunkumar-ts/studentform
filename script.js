var in1=document.querySelector("#in1");
var in2=document.querySelector("#in2");
var in3=document.querySelector("#in3");
var in4=document.querySelector("#in4");
var in5=document.querySelector("#in5");
var table=document.querySelector("#table");
var home=document.querySelector("#home");

function save(){
    var tr=document.createElement("tr");
    tr.id='new';
    tr.innerHTML="<td>"+ in1.value +"</td>"+
    "<td>"+ in2.value +"</td>"+
    "<td>"+ in3.value +"</td>"+
    "<td>"+  in4.gender.value +"</td>"+
    "<td>"+ in5.value +"</td>"+
    "<td>"+"<button class='del' onclick='delet()'>Delete</button>"+"</td>";
    table.append(tr);
}

function delet(){
    var new1=document.querySelector("#new");
    new1.remove();
}
function delet1(){
    var new2=document.querySelector("#tr1");
    new2.remove();
}
function addition(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}