
var phrase = document.getElementById('phrase');
document.getElementById('phrase').addEventListener('keyup', function() {
    
    
    console.log(phrase.textLength);
    phraseLenght(phrase.textLength);
});
document.getElementById("validButton").addEventListener('click', function() {
    
   alert(search(phrase.value));
});

function search(phrase){
   
    phraseElements = phrase.split('');
    result = `Les lettres qui sont en 4ème, 10ème, 35ème et 59ème position sont : ${phraseElements[3]}, ${phraseElements[9]}, ${phraseElements[34]}, ${phraseElements[58]}`    ;
    return result;
}

function phraseLenght(phraseLenght){
    var label = document.getElementById('label');
     
    if (phraseLenght <= 58){
        label.innerHTML=`Phrase : (minimum 58 catactères. Il en manque ${(Math.abs(phraseLenght - 58))})`;
        document.getElementById("validButton").disabled = true;
    }
    else{
        document.getElementById("validButton").disabled = false;
    }
}