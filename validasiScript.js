
class YearCalculator {
  constructor(semester) {
    this.semester = semester;
  }

  calculateYear() {
    return Math.floor((this.semester - 1) / 2);
  }
}

//INI INHERITANCE
class SemesterYearCalculator extends YearCalculator {
  constructor(semester) {
    super(semester);
  }

  calculateYear() {
    let date = new Date();
    let currentMonth = date.getMonth() + 1; 
    let currentYear = date.getFullYear();

    let adjustedYear = currentYear - super.calculateYear();

   
    if (this.semester % 2 === 1 && currentMonth > 6) {
      adjustedYear++;
    }

    else if (this.semester % 2 === 0 && currentMonth <= 6) {
      adjustedYear--;
    }

    return adjustedYear;
  }
}


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


let nim = getParameterByName("nim");
let nama = getParameterByName("nama");
let semester = parseInt(getParameterByName("semester")); 
let prodi = getParameterByName("prodi");
let mk = getParameterByName("mk");


let yearCalculator = new SemesterYearCalculator(semester);
let year = yearCalculator.calculateYear();


let element = document.getElementById("hasil");
if (element !== null) {
  element.innerHTML =
    "Nim : <b>" +
    nim +
    "</b>, <br/>Nama : <b>" +
    nama +
    "</b>, <br/>Tahun Masuk: <b>" +
    year +
    "</b>";
}


const list_mk = document.getElementById("list_mk");
let mkArray = mk.split(",");
mkArray.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list_mk.appendChild(li);
});
