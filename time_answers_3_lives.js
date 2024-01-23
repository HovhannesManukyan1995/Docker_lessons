const prompt =require("prompt-sync")();
//function for random taking from object
let date1=Date.now();
const randomProperty = (object) => {
    const keys = Object.keys(object);
   
    if (keys.length > 0) {
        const index = Math.floor(keys.length * Math.random());
      	const key = keys[index];
        const value = object[key];
        
        return {index, key, value}
    }
    return null;
};


// Usage example:
startT = new Date().getTime();
i = 1;
const object = {
    'Armenia':'Yerevan','Russia':'Moskow',"Spain":"Madrid",
"USA":"Washington","Japan":"Tokyo"
};
//Making shuffled object
let obj1={};
let len_obj=Object.values(object).length;
for(let i=0;i<len_obj;i++){

const property = randomProperty(object);
if (property.key in obj1){
	continue;
}else{	
	obj1[property.key] = property.value
delete object[property.key]
	


}
}
let count_wrong=0;
console.log('Welcome');
console.log('You have 120 second for play the game');
let flag=0;
while(true){
	console.log(obj1)
       for(let i in obj1){

	    now = new Date().getTime();
	    if( (now - startT) > 120000) {
	     	    flag=1
		    console.log('Time is up')
		    break;
	    }

		console.log('What is a capital of: '+i)
	      let ans = prompt('Enter a answer: ')
	       if(ans.toLowerCase()==obj1[i].toLowerCase()){

			console.log('write')
	       }else{
		        console.log('Wrong')
	       		count_wrong++
	       }
		if(count_wrong==3){
			console.log('You have 3 wrong answers')
			console.log('Game over')
			flag=1
			break
		}
       }
      flag=1 
   
   if(flag==1){
	break
   }	
     


      i++;
	    

}
