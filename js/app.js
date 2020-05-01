//Add listening functionality

var btnListener  = document.getElementById("submit");
btnListener.addEventListener("click",function(){
      



//Function that outputs the day of the week




var yearOfBirth = document.getElementById("yob").value;

var centuryDigits = parseInt(yearOfBirth.substring(-1,2));
var yearDigits = parseInt(yearOfBirth.substring(2,4));
var month = parseInt(document.getElementById("month").value);
var dayOfMonth = parseInt(document.getElementById("date").value);
var gender = document.getElementsByName("gender");

// alert(yearOfBirth);
// alert(centuryDigits);
// alert(yearDigits);

//alert(gender);






var dayOfWeek = function(){

    
    var weekDay =  ( ( (centuryDigits/4) -2*centuryDigits-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + dayOfMonth ) %7;
    
    return Math.round(weekDay);

     

};

//alert(dayOfWeek(centuryDigits,yearDigits,month,dayOfMonth));
var result = (dayOfWeek(centuryDigits,yearDigits,month,dayOfMonth));

//alert(result);


var femaleNames = ["Akosua", "Adwoa", "Abenaa" ," Akua", "Yaa", "Afua","Ama"];

var maleNames = ["Kwasi","Kwadwo","Kwabena"," Kwaku" , "Yaw", " Kofi","Kwame"];



var isMale =  document.getElementById("maleBox").checked ;
var isFemale =  document.getElementById("femaleBox").checked ;

// alert(isFemale);
// alert(isMale)

var girlname;

var getFemaleName =function(){

  
    for (let index = 0; index < femaleNames.length; index++) {
                if (index == result) {
                    
                   
                girlname = femaleNames[result];
                }                   
                
                
            }
    
            return girlname;

}

var boyname;

var getMaleName = function(){

    for (let index = 0; index < maleNames.length; index++) {
        if (index == result) {
            
          
           boyname= maleNames[result];            
            
        }     
        
                   
    }       
   
    
    return boyname;
}
 
var maleName = getMaleName();
var femaleName = getFemaleName();

alert(maleName);
alert(femaleName);


var displayResults = function(gender){
     var maleName = getMaleName();
var femaleName = getFemaleName();

// if (isFemale ==true) {
//     this.gender =document.getElementById("femaleBox").value;
//     return femaleName;

    
// } else if (isMale ==true) {
//     return maleName;
    
// }

    if ((gender.value ) == "male") {

        return maleName;
        
        
    } else if((gender.value )== "female") {
        return femaleName;
    }
 }

 var displayName =displayResults();

 alert(displayName);


 
 
});
 