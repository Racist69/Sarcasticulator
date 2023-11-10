txt="";
function sarcasm(){
    if(res=="69"){
        alert("Nice!");
    }
    else if(res=="911"||res=="9.11"){
        alert("Allah-u-akbar")
    }
    // Find and add more funny things
}
function update(x){
    txt+=x;
    document.getElementById('answer').value = txt;
}
function perc(){
    document.getElementById('answer').value /=100;
    txt = document.getElementById('answer').value;
}
function clearall(){
    document.getElementById('answer').value = "";
    txt="";
}
function result(){
    res=eval(txt);
    txt=res
    document.getElementById('answer').value = res;
    sarcasm();
} 
function del(){
    txt=txt.slice(0,-1);
    document.getElementById('answer').value = txt;

}
