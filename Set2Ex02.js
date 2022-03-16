//Ex02
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------


//A.
const date=/(january|february|march|april|may|june|july|august|september|october|november|december)\s\d{2}\,\s\d{4}/i
console.log(date.test("September 29, 1972"));
console.log(date.test("February 99, 0001"));
console.log(date.test("June 04, 3020"));
console.log(date.test("Julywe 14, 3020"));



//B.
const lettNum=/[a-zA-Z]\d|\d[a-zA-Z]/
console.log(lettNum.test("A52"));
console.log(lettNum.test( "d747"));
console.log(lettNum.test( "27X"));
console.log(lettNum.test("v2"));

//C.
const extention= /^[a-z]+\.(txt|cpp|java)$/i
console.log(extention.test("test.java"));
console.log(extention.test("program.cpp"));
console.log(extention.test("newReport.txt"));
console.log(extention.test("j.txtx"));


//D.
const pali5=/(.)(.).\2\1/
console.log(pali5.test( "abcba"));
console.log(pali5.test( "12321"));
console.log(pali5.test( "_1a1_"));


//E.
function regExArray(input,regExp){
    return input.match(regExp); 
}

const input ="Bee zapp Crow Eagle Zorro  mouse Ape  you",
regExp =/\b[b-y]+\b/ig;
console.log(regExArray(input,regExp));

//F.
const input2="Is <b>4 <em>hello </em> < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.",
regExp2 =/<(.+?)>.+?<\/\1>/g;

console.log(input2.match(regExp2));


