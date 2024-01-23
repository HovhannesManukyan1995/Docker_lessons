
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
'France':['paris','erevan','london','pekin'],
'USA':['washington','erevan','moskow','paris'],
'Armenia':['erevan','pekin','paris','tbilisi'],
'Brazil':['brazil','pekin','paris','buenos aires'],
'UK':['london','paris','erevan','tbilisi'],
'Austria':['vienna','erevan','lisbon','roma'],
'Italy':['roma','washington','brazil','lisbon'], 
'UAE':['abu dhabi','washington','erevan','moskow'],
'Rusia':['moskow','berlin','pekin','dzori mayla'],
'German':['berlin','moskow','lisbon','erevan'],
'Portugaly':['lisbon','washington','erevan','roma'],
'Argentina':['buenos aires','erevan','karnut','basen'],
'Kamerun':['yaunde','bangi','kumasi','juba'],
'Chad':['njamena','yaunde','bangi','juda']};

//Making shuffled object
let obj1={};
let len_obj=Object.values(object).length;
for(let i=0;i<10;i++){

const property = randomProperty(object);
if (property.key in obj1){
	continue;
}else{	
	obj1[property.key] = property.value
delete object[property.key]
	


}
}
let cnt=0;

for(i in obj1){
   console.log('What is a capital of: '+i)

let shuffled = obj1[i]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
console.log(shuffled.join('\n'))	

let ans=prompt('Enter your answer: ');
if(ans.toLowerCase==obj1[i][0].toLowerCase()){
     console.log('write')
     cnt++
}else{
continue
}


}
console.log('You have ',cnt,' scores')
