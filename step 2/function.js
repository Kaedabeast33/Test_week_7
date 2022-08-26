function addToZeroArray(array){
   let check = false
        array.forEach(element => {
            
        
            for(let i = 1; i<array.length;i++){
                console.log(element,array[i])
                
                 let num = element+array[i]
                 
                 if (num ===0){
                check = true
                 
                }
                
            }

        })
return check
}
console.log(addToZeroArray([1,2,3,4,5,6,6,-1]))
// use .splice to take the number out


// function hasUniqueChars(str){
//     let length= Math.floor( str.length/2)
//     let arr = []
//     let arr1 = []
//     let arr2=[]
//     for(let i=0; i<str.length;i++){
        
  
//         arr.push(str[i])
    

    

 
  
//     }
//     for(let j = 0; j<length;j++){
//         arr1.push(arr[arr.length-j-1])
//         arr2.push(arr[j])
       
//     }
//    if (arr1 === arr2){
//        return true, "I just realized this wasn't what the question was asking"
//    }else{
//        return false, "I was checking to see if it was the same forward and backwards"
//    }
// }


// console.log(hasUniqueChars("12345678"))

// function actuallyHasUniqueChars(str){
 
//         return new Set(str).size == str.length;
//       }
      
//       console.log(actuallyHasUniqueChars('abc'));    
//       console.log(actuallyHasUniqueChars('abcabc')); 

// function pangram(str){
 

//    let abcs= "abcdefghijklmnopqrstuvwxyz"
//    let abcArr = abcs.split("")
//    console.log(abcArr)

//     let arrOfWords=str.split(" ")
//    let string = arrOfWords.join("").toLowerCase()
//     console.log(string)
  
//     for(let i = 0; i<abcArr.length;i++){
//        if (string.indexOf(abcArr[i])<0){
//            return false
//        }else{
//            return true
//        }
//     }
   
// }
// console.log(pangram("abadsbfznvmzn.xvxcz,.bmznakslfhasjdhqpweruiqweuytuiqeorw dsjkasfa"))

// function longestWord(arr){
// let array = []
//     for(let i = 0; i<arr.length;i++){
//       let wordLength =  arr[i].length
//       console.log(wordLength)

//       array.push(wordLength)
//     }
//    console.log("the greatest number is", greatest(array))

// }
// longestWord(["hhek","by","sjkfls","sljfa;ljdfal","asjdk","asdjflsak;"])

// function greatest(arr){
    
//     while(arr.length>1){
//         console.log(arr)
//         if (arr[0]>arr[1]){
//             arr.splice(1,1)
//             console.log(arr)
//         }else{
//             arr.splice(0,1)
//             console.log(arr)
//         }
//     }
//     return arr
//     }
//     //O(n)
