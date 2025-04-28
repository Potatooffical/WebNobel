let tomb=[]
fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => Megjelnit(y)); 

function Megjelnit(y) {
    tomb=y
    console.log(y);
    let sz="";
    sz+="<div><div class='row'>"
    let sorszam=0;
    for (const elem of y.prizes) {
        sz+=`
        <div class="col-sm-3">
        <div class="szegely" data-bs-toggle="modal" data-bs-target="#myModal" onclick='reszletkiir(${sorszam})'>
            <p>${elem.year}</p>
            <p>${elem.category}</p>
        </div>
        </div>

        `
        sorszam++;
       
    }
    sz+="</div></div>"
document.getElementById("nobel").innerHTML = sz;
}
function reszletkiir(sorszam) {
    //console.log(sorszam);
    //alert(JSON.stringify(tomb))
    //console.log(tomb)
    document.getElementById("modalfej").innerHTML=tomb.prizes[sorszam].year+" "+tomb.prizes[sorszam].category

}