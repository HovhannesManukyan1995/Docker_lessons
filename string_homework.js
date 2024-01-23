//1)Find sum of numbers in string
//let str1='There are the1 numbers 2345651';
//var num_finder = /\d+/g;
//var matches = str1.match(num_finder);
//let plus=0;
//for(let i=0;i<matches.length;i++){
//	for(let j=0;j<matches[i].length;j++){
//		plus+= +(matches[i][j])
//	}
//}
//console.log(matches)
//console.log(plus)
//


//2)Find all lowercase letters

//let str1='There are MANY low letters and 1232';
//let lower_letters='';
//for(let i=0;i<str1.length;i++){
//	if(str1.charAt(i)>='a' && str1.charAt(i)<='z'){
// 		lower_letters += str1[i]
//	}	
//}
//console.log(str1)
//console.log(lower_letters)


//3) Find all vowels, constans, nums, special numbers

let str1='There are MANY, low, letters and, 1232';
let vowel_letters='';
let constan='';
let nums='';
let special_char='';
for(let i=0;i<str1.length;i++){
      if(str1[i].toLowerCase()=='a' || str1[i].toLowerCase()=='o' || str1[i].toLowerCase()=='i' || str1[i].toLowerCase()=='u'
	     || str1[i].toLowerCase()=='e' ){
              vowel_letters += str1[i]
      }else if(str1[i]=='1' || str1[i]=='2' 
	      || str1[i]=='3' || str1[i]=='4' || str1[i]=='5' || str1[i]=='6' ||
	      str1[i]=='7' || str1[i]=='8' || str1[i]=='9' || str1[i]=='0'){
              nums+=str1[i] 
      
           
      }else if (str1[i]==' ' || str1[i]=='.' || str1[i]==',' ||
	      str1[i]=='/' ||  str1[i]==';' ||
	      str1[i]==':' ||  
	      str1[i]=='*' || str1[i]=='+' || str1[i]=='=' ||
	      str1[i]=='&' || str1[i]=='%' || str1[i]=='$' || 
              str1[i]=='#' || str1[i]=='@' || str1[i]=='!' ||
              str1[i]=='?' || str1[i]=='>' || str1[i]=='<' ||
              str1[i]=='|' || str1[i]=='_' || str1[i]=='-' ){
	       special_char+=str1[i]
      }else {constan+=str1[i]
             
      }       
}
console.log(str1)
console.log(vowel_letters,vowel_letters.length)
console.log(constan,constan.length)
console.log(nums,nums.length)
console.log(special_char,special_char.length)














