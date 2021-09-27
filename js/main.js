let uczniowie = document.getElementById("pracownicy");
let button = document.getElementById("oblicz");

const wynik = (event) => {
    let name = document.querySelectorAll(".uczen")
    let matematyka = document.querySelectorAll(".matematyka");
    let polski = document.querySelectorAll(".polski");
    let biologia = document.querySelectorAll(".biologia");
    let geografia = document.querySelectorAll(".geografia");
    let fizyka = document.querySelectorAll(".fizyka");
    let chemia = document.querySelectorAll(".chemia");
    let informatyka = document.querySelectorAll(".informatyka");
    let zajeciaDodatkowe = document.querySelectorAll(".zajecia-dodatkowe");
    let average = document.querySelectorAll(".srednia");
    // console.log(polski.length);
    for (let i = 1; i < matematyka.length; i++) {
        let mathScore = parseFloat(matematyka[i].value);
        let polishScore = parseFloat(polski[i].value);
        let biologyScore = parseFloat(biologia[i].value);
        let geographyScore = parseFloat(geografia[i].value);
        let physicsScore = parseFloat(fizyka[i].value);
        let chemistryScore = parseFloat(chemia[i].value);
        let computerScienceScore = parseFloat(informatyka[i].value);

        // console.log(mathScore);
        if (zajeciaDodatkowe[i].value === matematyka[i].className && mathScore <= 6) {
            mathScore += 0.5;
        }
        if (zajeciaDodatkowe[i].value === polski[i].className && polishScore <= 6) {
            polishScore += 0.5;
        }
        if (zajeciaDodatkowe[i].value === biologia[i].className && biologyScore <= 6) {
            biologyScore += 0.5;
        }
        if (zajeciaDodatkowe[i].value == geografia[i].className && geographyScore <= 6) {
            geographyScore += 0.5;
        }
        if (zajeciaDodatkowe[i].value === fizyka[i].className && physicsScore <= 6) {
            physicsScore += 0.5;
        }
        if (zajeciaDodatkowe[i].value === chemia[i].className && chemistryScore <= 6) {
            chemistryScore += 0.5;
        }
        if (zajeciaDodatkowe[i].value === informatyka[i].className && computerScienceScore <= 6) {
            computerScienceScore += 0.5;
        }

        let gpa = (mathScore + polishScore + biologyScore + geographyScore + physicsScore + chemistryScore + computerScienceScore) / 7;
        // console.log(gpa);

        average[i].innerHTML = gpa;
        gpa.innerHTML = average;

        let students = [];
        for (let i = 1; i < matematyka.length; i++) {
            students.push({
                result: Number(average[i].innerText),
                name: String(name[i].innerHTML)
            });

        }
        let sort = students.sort((a, b) => (b.result < a.result ? -1 : Number(b.result > a.result)));

        if (average[i].innerHTML >= 4.75) {

            name[i].setAttribute("id", "green");
        }
        console.log(sort);
    }

}
button.addEventListener('click', wynik);