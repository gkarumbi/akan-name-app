//Function that outputs the day of the week

var centuryDigits = parseInt(prompt("Enter the Century you were born "));
var yearDigits = parseInt(prompt("Enter the year of Birth"));
var month = parseInt(prompt("Enter mont of birth"));
var dayOfMonth = parseInt(prompt("Enter date of birth"));

//alert(typeof centuryDigits);

if ((dayOfMonth<=0 || dayOfMonth>31) &&   (month<=0 || month>12)) {
    
    var dayOfMonth = parseInt(prompt("Enter date of birth that is between 0 and 31"));

    var month = parseInt(prompt("Enter month of birth that is between 1 and 12"));

}
 


var dayOfWeek = function(centuryDigits,yearDigits,month,dayOfMonth){

    
    var weekDay =  ( ( (centuryDigits/4) -2*centuryDigits-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + dayOfMonth ) %7;
    
    return Math.round(weekDay);

     

};

alert(dayOfWeek(centuryDigits,yearDigits,month,dayOfMonth));
var result = (dayOfWeek());

//alert(result);


var femaleNames = ["Akosua", "Adwoa", "Abenaa" ," Akua", "Yaa", "Afua","Ama"];

var maleNames = ["Kwasi","Kwadwo","Kwabena"," Kwaku" , "Yaw", " Kofi","Kwame"];

var isMale = false;
var isFemale = false;

var getFemaleName =function(isFemale){

    if (!isFemale) {

        for (let index = 0; index < femaleNames.length; index++) {
            if (index == result) {
                
               alert(femaleNames[result]);
               
                
            }     
            
            
            
        }

        return femaleNames[result];
    }

}

var getMaleName = function(isMale){

    if (!isMale) {
        for (let index = 0; index < maleNames.length; index++) {
            if (index == result) {
                
               alert(maleNames[result]);               
                
            }     
            
                       
        }       
       
        return maleNames[result];
        
    }

}
 
getFemaleName();

 
 