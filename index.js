// function add(work){
//     list=[]
//     list.push(work)
//     console.log(list)
// }
// let work
// let a=1
// while (a<5){
//     work=prompt("Enter work you want to add")
//     add(work)
//     a=a+1
// }

let input=prompt("Enter a letter to count vowel").toUpperCase()
let i,count=0
function vowelCount(){
    for(i=0; i<input.length; i++){
        if(input[i]=='A'||input[i]=='E'||input[i]=='I'||input[i]=='O'||input[i]=='U'){
            count++
        }   
    }
    console.log(count)
}
vowelCount(input)