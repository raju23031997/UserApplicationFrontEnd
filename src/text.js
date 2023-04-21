
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function getSolve(arr) {
    let newArr = []
    let finalarr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split("").sort())
    }
    for (let i = 0; i < newArr.length; i++) {
        finalarr.push(newArr[i].join(""))
    }

    // const counts = {};
    // for (const val of finalarr) {
    //   counts[val] = (counts[val] || 0) + 1;
    // }
    
    // const numDuplicates = Object.values(counts).filter(count => count > 1).length;
    // console.log(numDuplicates)
    let newOneArr = []
    let count = 0
    for(let i=0;i<finalarr.length;i++){
        for(let j=i;j<finalarr.length;j++){
            if(finalarr[i] == finalarr[j]){
                count++
            }
        }
        newOneArr.push(count)
        count = 0
    }
    // let MaxValue = Math.max(MaxValue, newOneArr)
    // console.log(MaxValue)
    newOneArr.sort()
    console.log(newOneArr[newOneArr.length -1])
}


let num = parseInt(readLine())
let arr = readLine().split(" ")
getSolve(arr)
