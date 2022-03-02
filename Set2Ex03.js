//Ex03
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//A.
function cycleShift2(string, k=1) {
    let result = '';

    for (let char of string) {
        var charCode = char.charCodeAt();
        if(charCode ==57){
            charCode-=9;
        }
        else if(charCode==90 || charCode==122){
            charCode-=25;
        }
        else{
            charCode++;
        }
       
        result += String.fromCharCode(charCode);
        
    }
    return result
}

console.log(cycleShift2('aBc',1));
console.log(cycleShift2('xyz',1));
console.log(cycleShift2('aK89',1));


//C.

function wPalMatch(text){
    var words = text.split(/\s+/);
    const regExp= /\b(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)\11?\10|\10?)\9|\9?)\8|\8?)\7|\7?)\6|\6?)\5|\5?)\4|\4?)\3|\3?)\2|\2?))?\1\b/i;
    var result= words.filter(word=>regExp.test(word));
    return result;
}

const par ="Las summer i went on a civic trip. Some of the activities had a high level of intensity like kayak on the river or driving a racecar. This company is not on the radarof many but let me refer you to it ";
 console.log(wPalMatch(par));