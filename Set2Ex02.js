//Ex02
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
function regTest(regexp,string){
    if(regexp.test(string)){
        console.log("Test passed")
    }
    else{
        console.log("Not a correct string")
    }
}

//A.
regTest(/\w\s\d{2}\,\s\d{4}/, "September 29, 1972");
regTest(/\w\s\d{2}\,\s\d{4}/, "February 99, 0001");
regTest(/\w\s\d{2}\,\s\d{4}/, "June 04, 3000");

//B.
regTest(/[a-zA-Z]\d|\d[a-zA-Z]/, "A52");
regTest(/[a-zA-Z]\d|\d[a-zA-Z]/, "d747");
regTest(/[a-zA-Z]\d|\d[a-zA-Z]/, "27X");
regTest(/[a-zA-Z]\d|\d[a-zA-Z]/, "v2");

//C.
regTest(/^[a-zA-Z]+\.txt|java|cpp$/, "test.java");
regTest(/^[a-zA-Z]+\.txt|java|cpp$/, "program.cpp");
regTest(/^[a-zA-Z]+\.txt|java|cpp$/, "newReport.txt");

//D.
regTest(/(.)(.).\2\1/, "abcba");
regTest(/(.)(.).\2\1/, "12321");
regTest(/(.)(.).\2\1/, "_1a1_");


//E.
function regExArray(str,regExp){
    var tempArray = str.split(/\s+/);
    var result = tempArray.filter(word => !regExp.test(word));
    return result;
}

const input ="Bee zapp Crow Eagle Zorro  mouse Ape  you",
regExp =/[aAzZ]+/;
console.log(regExArray(input,regExp));

//F.
const input2="Is <b>4 <em>hello </em> < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.",
regExp2 =/<(.+?)>.+?<\/\1>/g;

console.log(input2.match(regExp2));




