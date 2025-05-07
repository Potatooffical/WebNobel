fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y =>{
        let vege=y.prizes[0].year
        let sz=""
        for (let i = vege; i >= 1901; i--) {
            sz+=`<option value="${i}">${i}</option>`
        }
        document.getElementById("beev").innerHTML=sz
    })



function kereses(){
    let beev=document.getElementById("beev").value
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => {
        let sz = ""; 
        y.prizes.forEach(elem => {
            console.log(elem);       
            if (elem.year == beev) {
                sz += `<p style="font-size:15px;font-style:italic">${elem.year} ${elem.category}</p>`;
            } 
            if (elem.laureates) {
                for (const elemember of elem.laureates) {
                    sz += `<p style="font-size:15px;font-style:italic">${elem.year} ${elem.category}</p>`
                    sz += `<p style="font-size:15px;font-style:italic">${elemember.firstname} ${elemember.surname}</p>
                    <p style="font-size:10px">${elemember.motivation}</p>`;
                }
            }
            sz += `<hr>`;
        });
        if (sz=="") {
            sz+="Nincs találtat."
        }
        document.getElementById("kiadat").innerHTML = sz; 
    })
}