function disp(val){
    console.log(val)
    document.getElementById("screen").value+=val;
}
{

function ac() {
    document.getElementById("screen").value=""
    


}
function resulte() {
    var a=document.getElementById("screen").value
    var res=eval(a)
    document.getElementById("screen").value=res
    
    
}
function cleare() {
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1)
        
    
    


}}