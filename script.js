let boks = document.getElementById("boks");

function byttFarge() {
    // Sjekkar om fargen ikkje er den gule. Viss den ikkje er gul, gjer me den gul.
    if (boks.style.backgroundColor !== "rgb(233, 196, 106)") {
        boks.style.backgroundColor = "rgb(233, 196, 106)"; // Ein fin, varm gul/oransje
    } else {
        boks.style.backgroundColor = "rgb(38, 70, 83)";  // Ein moderne mørk sjøgrøn
    }
}
