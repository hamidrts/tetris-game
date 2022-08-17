
let randomMatrix=[]
let objectColor=""
let lastTime=0
let gameOver=false
let checkButtom=false 
let checkH=false
let checkR
let objectSpeed=500
let timeIntervall =0
let start
let row
let cell
let mouseEvent
let numberOfObject=0
let level=1

let rotatedMatrix=[]
window.onload=function(){
    for(let i=0;i<24;i++){
            row=document.createElement("div")
            row.setAttribute("id",i+1000)
            row.setAttribute("class","row")
            document.getElementById("container").append(row)
            
        for(let j=0;j<12;j++){
            
            cell=document.createElement("div")
            cell.setAttribute("id",i*12+j)
            cell.setAttribute("class","inactive")
            document.getElementById(i+1000).append(cell)
            document.getElementById(i*12+j).addEventListener("mouseover",function(){
                object.x=j


            })
        }
    }
}

const matrix1=[[0,1,0],
               [1,1,1],
               [0,0,0]]
const matrix2=[[1,1,0],
               [0,1,1],
               [0,0,0]]

const matrix3=[[0,1,1],
               [1,1,0],
               [0,0,0]]

const matrix4=[[1,0,0],
               [1,1,1],
               [0,0,0]]

const matrix5=[[0,0,1],
               [1,1,1],
               [0,0,0]]

const matrix6=[[1,1],
               [1,1]]

const matrix7=[[0,0,0,0],
               [1,1,1,1],
               [0,0,0,0],
               [0,0,0,0]]
let  object={}
let nextObject={}
let objectArray=[]
let ground=[[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]]

document.addEventListener("keydown",function(evt){
    
   if( evt.key==="ArrowRight"){
         checkH=false
       if(checkX(1)===false){
          object.x+=1
       }
   }
   if( evt.key==="ArrowLeft"){
    checkH=false
      if(checkX(-1)===false){
         object.x-=1
       }
   }
   if( evt.key==="ArrowDown"){
       objectSpeed=100
   }

   if (evt.key==="ArrowUp"){
    rotate()    
    }

})

document.addEventListener("keyup",function(evt){
    if( evt.key==="ArrowDown"){
        objectSpeed=500
       }
})
 function starttest(){
     start=false
     move()
 }

function move(time=0){
    if(gameOver===true){
        document.getElementById("monitor").innerHTML="Game Over!"
    }else{
    if(start===false){
        next4Object()
        
    }
    timeIntervall+=time-lastTime
    lastTime=time
    if (timeIntervall>objectSpeed){
        if(checkY()){
            if(object.y===0){
                gameOver=true
            }else{
            start=false
            checkButtom=false} 
            changeGround()
        }else{object.y+=1}
       
        
        timeIntervall=0
    }
    drawObject()
    drawNext()
    drawGround()
    requestAnimationFrame(move)
}
    

}

function creatObject(){
    let randomColor=Math.floor(Math.random()*4+1)
    if(randomColor===1){
         objectColor="red"
    }
    if(randomColor===2){
         objectColor="blue"
    }
    if(randomColor===3){
         objectColor="gray"
    }
    if(randomColor===4){
         objectColor="pink"
    }
    let randomObject=Math.floor(Math.random()*7+1)
    if(randomObject===1){
         randomMatrix=matrix1
    }
    if(randomObject===2){
         randomMatrix=matrix2
    }
    if(randomObject===3){
         randomMatrix=matrix3
    }
    if(randomObject===4){
         randomMatrix=matrix4
    }
    if(randomObject===5){
         randomMatrix=matrix5
    }
    if(randomObject===6){
         randomMatrix=matrix6
    }
    if(randomObject===7){
         randomMatrix=matrix7
    }
    nextObject={
        matrix: randomMatrix,
        x:5,
        y:0,
        color: objectColor

    }

    

    return nextObject


}

function next4Object(){
   
    if(start===false){
        start=true
        for(let i=1;i<5;i++){
           objectArray.push(creatObject()) 

        }
    }
    object=objectArray.shift()
    objectArray.push(creatObject())
    numberOfObject=numberOfObject+1
    
    if(numberOfObject===10){
        level+=1
        numberOfObject=0
        objectSpeed=-50
        console.log(level)
    }
    document.getElementById("level").innerHTML=level

}

function drawObject(){
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 12; j++) {
            
           if (ground[i][j][0]===0){
            
            document.getElementById(i*12+j).setAttribute("class","inactive")
           }
           

        }
        
    }
    for (let i = 0; i < object.matrix.length; i++) {
        for (let j = 0; j < object.matrix[0].length; j++) {
           if (object.matrix[i][j]===1){
            document.getElementById((i+object.y)*12+(j+object.x)).classList.add(object.color)
           }
           

        }
        
    }
}

function drawGround(){
   
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 12; j++) {
            
           if (ground[i][j][0]===1){
            
            document.getElementById(i*12+j).classList.add(ground[i][j][1])
           }
           

        }
        
    }

}

function drawNext(){
    for (let i = 0; i <8; i++) {
        for (let j = 0; j < 4; j++) {
            let test="n"+(i*4+j+1)
            document.getElementById("n"+(i*4+j+1)).setAttribute("class","nextInactive")
           
        }
        
    }
    for(let m=0;m<3;m++){
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < objectArray[m].matrix[0].length; j++) {
               if (objectArray[m].matrix[i][j]===1){
                document.getElementById("n"+((i*4+j+1)+m*12)).classList.add(objectArray[m].color)
               }
            }
        }
    }
}

function checkY(){
    
    for (let i = 0; i < object.matrix.length; i++) {
        
        for (let j = 0; j < object.matrix[0].length; j++) {
            
           if (object.matrix[i][j]===1){
           
               if(i+object.y===23||ground[(i+object.y)+1][(j+object.x)][0]===1){
                   checkButtom=true
               }
             }
        }
        
        
    }
    
    return checkButtom
}

function checkX(x){
    for (let i = 0; i < object.matrix.length; i++) {
        for (let j = 0; j < object.matrix[0].length; j++) {
           if (object.matrix[i][j]===1){
               if(j+object.x===5.5+x*5.5||ground[(i+object.y)][(j+object.x)+x][0]===1){
                   checkH=true
               }
             }
        }
        
    }
    return checkH
}

function rotate(){
    rotatedMatrix=JSON.parse(JSON.stringify(object.matrix))  //[[0,0,0],[0,0,0],[0,0,0]]
    let x=object.matrix.length-1
    for(let i=0;i<object.matrix.length;i++){
        for(let j=0;j<object.matrix[0].length;j++){
            rotatedMatrix[i][j]=0
            rotatedMatrix[i][j]=object.matrix[j][x-i]
        }
    }
    checkR=false
    if(checkRotate()===false){
        object.matrix=rotatedMatrix
    }

    
    
}


function checkRotate(){
    for(let i=0;i<rotatedMatrix.length;i++){
        for(let j=0;j<rotatedMatrix[0].length;j++){
            if(rotatedMatrix[i][j]===1 && ground[(i+object.y)][(j+object.x)][0]===1 ){
                checkR=true
            }
        }
    }
    return checkR
}


function changeGround(){
    
    for (let i = 0; i < object.matrix.length; i++) {
        for (let j = 0; j < object.matrix[0].length; j++) {
           if (object.matrix[i][j]===1){
              ground[(i+object.y)][(j+object.x)][0]=1
              ground[(i+object.y)][(j+object.x)][1]=object.color
              
            }
        }
     }
     for(let i=ground.length-1;i>=0;i--){
        let numberOfFilledCell=0
         for(let j=ground[0].length-1; j>=0;j--){
             if(ground[i][j][0]===1){
                numberOfFilledCell+=1
             }
         }
         if(numberOfFilledCell===12){
           
             for(let k=i; k>=1;k--){
                for(let m=0;m<ground[0].length;m++){
                    ground[k][m][0]=ground[k-1][m][0]
                    ground[k][m][1]=ground[k-1][m][1]
            
                }
             }
        i=ground.length-1
         }
     }
 }


 function pause(){
     document.getElementById("pause-display").style.opacity=1
     objectSpeed=500000000000000

 }

 function resume(){
    document.getElementById("pause-display").style.opacity=0
    objectSpeed=500
 }