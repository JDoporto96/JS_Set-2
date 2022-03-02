//Ex01
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

regTest(/.abc/, "-abcdefgh...");
regTest(/a+b?!!1{4}/,"aa!!1111" );
regTest(/.{3}a\.b/, "---a.b");
regTest(/\w/, "word");
regTest(/\s/, "\n");
regTest(/\d/, "223");
regTest(/./, "    ");
regTest(/[abc]/, "as an example");
regTest(/(abc)/, "abc");
regTest(/[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/, "Z_$. A_$4.@a_$..com");
regTest(/\([0oOn]{1}(_|\s)[0oOn]{1}\)/, "(0_n)");
