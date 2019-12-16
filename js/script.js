$("document").ready(function() {

$("button").click(function() {
    let inWord = $("input").val();
    console.log(inWord);
    let word = inWord.toLowerCase();
    console.log(word);
    let type = word.charAt();
    console.log(type);
    var array = word.split(" ");
    //for ()
    if ((type === "a") || (type === "e") || (type === "i") || (type === "o") || (type === "u")){
        console.log("Vowel");
        

    }else{
        console.log("constat")
        let len = word.length;
        console.log(len);

        let app = word.slice(1 , len);
        console.log("slice", app);
        $(".output").text(app + type + "ay");

    }

var aa = "apple orjojf";
var tt = aa.split(" ");
console.log(tt);
// console.log(aa.slice(3));  
  
  
  
});

});

//python3 -m http.server 3000