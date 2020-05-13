var num=document.getElementById("input");
var bttn=document.getElementById("start-counter");
var current=document.querySelectorAll(".current");
var next=document.querySelectorAll(".next");
var Interval=[];
var count=0;
var stop=false;
let i=current.length-1;
bttn.addEventListener("click",function(){
       var target=num.value;
       if(isNaN(target)){
           alert("Please  Enter a Number");
           num.value=" ";
       }
       if(target<1||target>99999){
        alert(" Number is Out of Range");
        num.value=" ";
       }
       console.log(target);
       if(!stop) {
          for(let i=current.length-1; i>=0; i--){ 

                current[i].innerHTML=0;
                next[i].innerHTML=1;
                count=0;
                console.log()
                clearInterval(Interval[i]);  
                console.log("i"+i);
                Interval[i]= setInterval(animate,1000*Math.pow(10,4-i),target,i);
                // Interval1=setInterval(animate,)
          }
          stop=true;
       }
      else if(stop){
        for(let i=current.length-1; i>=0; i--){ 
            console.log("clear"+i);
          clearInterval(Interval[i]);
        }  
        stop=false;
      }
});
var seconddigit=false;
function animate(target,j){
   if(j==4){ 
     count++;
   }
     console.log(count);
     if(count>target){
        for(let i=current.length-1; i>=0; i--){ 
            console.log("clear"+i);
          clearInterval(Interval[i]);
        }
        window.alert("Timer has been ended");
        return ;
    }
    if(parseInt(next[j].innerHTML)>9){
        current[j].innerHTML=0;
        next[j].innerHTML=0;
    }
    next[j].classList.add("animate");
    setTimeout(function(){
        current[j].innerHTML=next[j].innerHTML;
        next[j].classList.remove("animate");
        next[j].innerHTML=parseInt(next[j].innerHTML) +1;
    },500);
}