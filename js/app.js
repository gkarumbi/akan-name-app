//Function that outputs the day of the week

var centuryDigits = parseInt(prompt("Enter the Century you were born "));
var yearDigits = parseInt(prompt("Enter the year of Birth"));
var month = parseInt(prompt("Enter mont of birth"));
var dayOfMonth = parseInt(prompt("Enter date of birth"));

var gender = prompt("Please Enter Your Gener");

// verify that (d<=0) or (d>31) (m<= 0) or (m > 12)  

if ((dayOfMonth<=0 || dayOfMonth>31) &&   (month<=0 || month>12)) {
    
    var dayOfMonth = parseInt(prompt("Enter date of birth that is between 0 and 31"));

    var month = parseInt(prompt("Enter month of birth that is between 1 and 12"));

}
 


var dayOfWeek = function(){

    
    var weekDay =  ( ( (centuryDigits/4) -2*centuryDigits-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + dayOfMonth ) %7;
    
    return Math.round(weekDay);

     

};

alert(dayOfWeek(centuryDigits,yearDigits,month,dayOfMonth));
var result = (dayOfWeek(centuryDigits,yearDigits,month,dayOfMonth));

//alert(result);


var femaleNames = ["Akosua", "Adwoa", "Abenaa" ," Akua", "Yaa", "Afua","Ama"];

var maleNames = ["Kwasi","Kwadwo","Kwabena"," Kwaku" , "Yaw", " Kofi","Kwame"];

// var isMale =  function(gender){
//     if (gender =="male") {

//         return true;
//     }
    
//     else if(gender){
//         return false;
//     }
// }
var isMale = false;
var isFemale = false;

var girlname;

var getFemaleName =function(isFemale){

    if (!isFemale) {

        for (let index = 0; index < femaleNames.length; index++) {
            if (index == result) {
                
            //    alert(femaleNames[result]);
               
            girlname = femaleNames[result];
            }     
            
            
            
        }

        return girlname;
    }

}
var boyname;

var getMaleName = function(isMale){

    if (!isMale) {
        for (let index = 0; index < maleNames.length; index++) {
            if (index == result) {
                
               //alert(maleNames[result]);   
               boyname= maleNames[result];            
                
            }     
            
                       
        }       
       
        
        return boyname; 
    }

}
 
// var maleName = getMaleName();
// var femaleName = getFemaleName();

// alert(maleName);
// alert(femaleName);


 var displayResults = function(gender){
     var maleName = getMaleName();
var femaleName = getFemaleName();

    if (gender == "male") {

        return maleName;
        
        
    } else if(gender == "female") {
        return femaleName;
    }
 }

 var displayName =displayResults(gender);

 alert(displayName);


 
 

 