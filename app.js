const binaryX = document.getElementById('binary');
const result = document.querySelector('.result');
const hello = document.getElementById('hello');
const integer = [2,3,4,5,6,7,8,9,]
let valuex = binaryX.value;

function warn(){
    let splitArr = (binaryX.value).split("");

    for(let integerNUm of integer){

        for(let j of splitArr){
            if(integerNUm == j){
                alert("please write binary not decimal")
                
             
            }
           
        
           
        }
        
    }
}


function convert(){

  

  


    let binary = binaryX.value;
    let binaryLength =parseInt(binary.length);
    
    let arr = [];
    
    for(let a of binary){
        // let b;
        arr.push((a*Math.pow(2,binaryLength--)));
       
        
    }
    let sum =0;
    for(let b of arr){
       sum += b;
      
    }
    
    console.log(sum/2)
    result.innerText = `Decimal Number : ${sum/2}`;
    
}

