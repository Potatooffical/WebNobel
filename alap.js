fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => Megjelnit(y)); 

function Megjelnit(y) {
    console.log(y);
    let sz="";
    for (const elem of y.prizes) {
        sz+=`
        <div>
        <p>${elem.year}</p>
        <p>${elem.category}</p>
        </div>

        `
    }
document.getElementById("nobel").innerHTML = sz;




}