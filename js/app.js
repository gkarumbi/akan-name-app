//Function that outputs the day of the week


var dayOfWeek = function(centuryDigits,yearDigits,month,dayOfMonth){

    var weekDay =  ( ( (centuryDigits/4) -2*centuryDigits-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + dayOfMonth ) %7;
    
    return Math.round(weekDay);
};

var result = (dayOfWeek(19,88,5,31));

alert(result);


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

 
 