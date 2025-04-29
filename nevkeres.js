function keresesnev() {
  let benev = document.getElementById("benev").value;
  fetch("https://api.nobelprize.org/v1/prize.json")
    .then((x) => x.json())
    .then((y) => nevmegjelenit(y, benev));
}

function nevmegjelenit(y, benev) {
  let sz = ` 
<table class="table">
    <thead>
      <tr>
        <th>Year/Category</th>
        <th>Firstname</th>
        <th>Surname</th>
        <th>Motivation</th>
      </tr>
    </thead>
    <tbody>`;

  for (const elem of y.prizes) {
    if (elem.laureates != undefined) {
      for (const alelem of elem.laureates) {
        const motivation = alelem.motivation ? alelem.motivation.toLowerCase() : "";
        if (
          alelem.firstname.toLowerCase().includes(benev.toLowerCase()) ||
          alelem.motivation.includes(benev.toLowerCase())
        ) {
          console.log(alelem.firstname);
          sz += `<tr>
          <td>${elem.year} ${elem.category}</td>
          <td>${alelem.firstname}</td>
          <td>${alelem.surname}</td>
          <td>${alelem.motivation || "N/A"}</td>
          </tr>`;
        }
        // surname vizsglata külön
        if (
           alelem.surname!=undefined && alelem.surname.toLowerCase().includes(benev.toLowerCase())
          ) {
            console.log(alelem.firstname);
            sz += `<tr>
            <td>${elem.year} ${elem.category}</td>
            <td>${alelem.firstname}</td>
            <td>${alelem.surname}</td>
            <td>${alelem.motivation || "N/A"}</td>
            </tr>`;
          }

      }
    }
  }

  sz += `    </tbody>
  </table>`;
  document.getElementById("tablazat").innerHTML = sz;
}
