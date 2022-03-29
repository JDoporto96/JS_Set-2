//Ex03
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//A.
function cycleShift(str) {
    return str.replace(/[a-z0-9]/ig, cycle)
}

function cycle(char){
    let charCode = char.charCodeAt();
        if(charCode ==57){
            charCode-=9;
        }
        else if(/z/i.test(char)){
            charCode-=25;
        }
        else{
            charCode++;
        }
       
    return String.fromCharCode(charCode);
}


console.log(cycleShift('aBc '));
console.log(cycleShift('xyz'));
console.log(cycleShift('aK89'));


//C.

function wPalMatch(text){
    var words = text.split(/\s+/);
    const regExp= /\b(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)\11?\10|\10?)\9|\9?)\8|\8?)\7|\7?)\6|\6?)\5|\5?)\4|\4?)\3|\3?)\2|\2?))?\1\b/i;
    var result= words.filter(word=>regExp.test(word));
    return result;
}

const par ="Las summer i went on a civic trip. Some of the activities had a high level of intensity like kayak on the river or driving a racecar. This company is not on the radarof many but let me refer you to it ";
 console.log(wPalMatch(par));