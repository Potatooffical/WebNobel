fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => Megjelnit(y)); 

function Megjelnit(y) {
    console.log(y);
}