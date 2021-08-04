var CC, YY, MM, DD, d, dayAttribute;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function calculateDayValue(){
    year = document.getElementById("myear").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("mmonth").value);
    DD = parseInt(document.getElementById("mdate").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.round(d));
}

function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
        var gender = "male";
    }
    else if(genders[1].checked == true){
        var gender = "female";
    }
    else{
        return false;
    }
    switch(gender){
        case "male":
            if (dayValue == 0){
                alert("You were born on " +dayNames[0] + " and your akan name is " + "," + maleNames[0]+".");
            }
            else if(dayValue == 1){
                alert("You were born on " +dayNames[1] + " and your akan name is " + "," + maleNames[1]+".");
            }
            else if(dayValue == 2){
                alert("You were born on " +dayNames[2] + " and your akan name is " + "," + maleNames[2]+".");

            }else if(dayValue == 3){
                alert("You were born on " +dayNames[3] + " and your akan name is " + "," + maleNames[3]+".");
            }
            else if(dayValue == 4){
                alert("You were born on " +dayNames[4] + " and your akan name is " + "," + maleNames[4]+".");
            }
            else if(dayValue == 5){
                alert("You were born on " +dayNames[5] + " and your akan name is " + "," + maleNames[5]+".");
            }
            else if(dayValue == 6){
                alert("You were born on " +dayNames[6] + " and your akan name is " + "," + maleNames[6]+".");
            }
            break;
            case "female":
                if (dayValue == 0){
                    alert("You were born on " +dayNames[0] + " and your akan name is " + "," + femaleNames[0]+".");
                }
                else if(dayValue == 1){
                    alert("You were born on " +dayNames[1] + " and your akan name is " + "," + femaleNames[1]+".");
                }
                else if(dayValue == 2){
                    alert("You were born on " +dayNames[2] + " and your akan name is " + "," + femaleNames[2]+".");
                }
                else if(dayValue == 3){
                    alert("You were born on " +dayNames[3] + " and your akan name is " + "," + femaleNames[3]+".");
                }
                else if(dayValue == 4){
                    alert("You were born on " +dayNames[4] + " and your akan name is " + "," + femaleNames[4]+".");
                }
                else if(dayValue == 5){
                    alert("You were born on " +dayNames[5] + " and your akan name is " + "," + femaleNames[5]+".");
                }
                else if(dayValue == 6){
                    alert("You were born on " +dayNames[6] + " and your akan name is " + "," + femaleNames[6]+".");
                }
                break;
                default:
    }
}
function getName(){
    dayValue = calculateDayValue();
    getGender();
}