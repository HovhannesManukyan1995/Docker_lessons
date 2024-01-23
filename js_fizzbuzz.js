let str1=''
for (let i=1; i<=30; i++){
     if (i%3==0 && i%5==0){
        str1+=i+' -FizzBuzz \n'
	continue
    }if (i%3==0){
        str1+=i+'- Fizz \n'    
    }if (i%5==0){
    	str1+=i+' -Buzz \n'
    }
}
console.log(str1)
