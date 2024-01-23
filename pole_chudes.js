const prompt =require("prompt-sync")();


let harc=console.log('What is the capital of rusha')
let ans='moskow'
let c=''
for (i=0;i<ans.length;i++){
    c+='-'
}
let cnt=0
console.log(c)
while (true){
  if (c===ans){
    console.log('you win')  
    break}
  b=prompt('Enter a letter: ')
//  if (b not in ans){
  //    cnt+=1}

  for (let j=0 ;j<ans.length;j++){
            if(ans[j]==b){
                c=c.slice(0,j) + b + c.slice(j+1)  
	    }
  
  }
  console.log(c)
  
}
//console.log(cnt)
