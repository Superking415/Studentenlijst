 const studenten = [
        { Naam: "Jens ", Tussenvoegsel: "", Achternaam: "Bul", Telefoonnummer: "0621924766", Email: "40201508@roctilburg.nl" },
        { Naam: "Mika ", Tussenvoegsel: "", Achternaam: "Deijkers", Telefoonnummer: "0618798583", Email: "4077710@ogt013.nl" },
        { Naam: "Farhan ", Tussenvoegsel: "", Achternaam: "Farah", Telefoonnummer: "0684143386", Email: "40206093@ogt013.nl" },
        { Naam: "Mohamad ", Tussenvoegsel: "", Achternaam: "Hamoud", Telefoonnummer: "0635867424", Email: "40178423@ogt013.nl" },
        { Naam: "Kris ", Tussenvoegsel: "", Achternaam: "den Hartog", Telefoonnummer: "0623784323", Email: "401892134@ogt013.nl" },
        { Naam: "Finn ", Tussenvoegsel: "", Achternaam: "Jager", Telefoonnummer: "0678392124", Email: "40972817@ogt013.nl" },
        { Naam: "Mateo ", Tussenvoegsel: "", Achternaam: "Kristić", Telefoonnummer: "0686745323", Email: "4082341@ogt013.nl" },
        { Naam: "Maciej ", Tussenvoegsel: "", Achternaam: "Kwiatkowski", Telefoonnummer: "0678989873", Email: "4023577@ogt013.nl" },
        { Naam: "Nishaar ", Tussenvoegsel: "", Achternaam: "Liakathoesein", Telefoonnummer: "0674532123", Email: "4076598@ogt013.nl" },
        { Naam: "Noah ", Tussenvoegsel: "", Achternaam: "van Loon", Telefoonnummer: "0634521895", Email: "4012345@ogt013.nl" },
        { Naam: "Yordi ", Tussenvoegsel: "", Achternaam: "van den Meijdenberg", Telefoonnummer: "0682084748", Email: "40179757@ogt013.nl" },
        { Naam: "Sven ", Tussenvoegsel: "", Achternaam: "Mutsaers", Telefoonnummer: "0654378921", Email: "4014324@ogt013.nl" },
        { Naam: "Karsten ", Tussenvoegsel: "", Achternaam: "Schoenmakers", Telefoonnummer: "0678435213", Email: "4067894@ogt013.nl" },
        { Naam: "Parsa ", Tussenvoegsel: "", Achternaam: "Siddighi", Telefoonnummer: "0649722742", Email: "4043985@ogt013.nl" },
        { Naam: "Dylan ", Tussenvoegsel: "", Achternaam: "van der Ven", Telefoonnummer: "0678954987", Email: "4098765@ogt013.nl" },
        { Naam: "Stefan ", Tussenvoegsel: "", Achternaam: "Versteeg", Telefoonnummer: "0623412895", Email: "4012956@ogt013.nl" },
        { Naam: "Frank ", Tussenvoegsel: "", Achternaam: "van Vroenhoven", Telefoonnummer: "0678453267", Email: "4018745@ogt013.nl" },
        { Naam: "Oliwier ", Tussenvoegsel: "", Achternaam: "Woźniak", Telefoonnummer: "0678934123", Email: "4098719@ogt013.nl" },
        { Naam: "Roney ", Tussenvoegsel: "", Achternaam: "Zakko", Telefoonnummer: "0655532897", Email: "4083341@ogt013.nl" },
        { Naam: "Arda ", Tussenvoegsel: "", Achternaam: "Özkan", Telefoonnummer: "0655777821", Email: "4014452@ogt013.nl" }
    ];



function displayStudents(studentList) {
    const studentenlijstDiv = document.getElementById("studentenlijst");
    studentenlijstDiv.innerHTML = "";

    studentList.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.classList.add("student");
        studentDiv.innerHTML = `
            <p>Naam: ${student.Naam} ${student.Tussenvoegsel} ${student.Achternaam}</p>
            <p>Telefoonnummer: ${student.Telefoonnummer}</p>
            <p>Email: ${student.Email}</p>
        `;
        studentenlijstDiv.appendChild(studentDiv);
    });
}


document.getElementById("sortAZ").addEventListener("click", function () {
    studenten.sort((a, b) => a.Naam.localeCompare(b.Naam));
    displayStudents(studenten);
});

document.getElementById("sortAchternamen").addEventListener("click", function () {
    studenten.sort((a, b) => a.Achternaam.localeCompare(b.Achternaam));
    displayStudents(studenten);
});


document.getElementById("filter").addEventListener("input", function () {
    const filterText = this.value.toLowerCase();
    const filteredStudents = studenten.filter(student => {
        const fullName = `${student.Naam} ${student.Tussenvoegsel} ${student.Achternaam}`;
        return fullName.toLowerCase().includes(filterText);
    });
    displayStudents(filteredStudents);
});

displayStudents(studenten);