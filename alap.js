fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => Megjelnit(y)); 

function Megjelnit(y) {
    console.log(y);
    let sz="";
    sz+="<div><div class='row'>"
    for (const elem of y.prizes) {
        sz+=`
        <div class="col-lg-4">
        <div class="szegely">
            <p>${elem.year}</p>
            <p>${elem.category}</p>
            <p>${elem.firstname}</p>
            <p>${elem.surname}</p>
        </div>
        </div>

        `
    }
    sz+="</div></div>"
document.getElementById("nobel").innerHTML = sz;


}