var tableau = [];
console.log(tableau)
function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}
function equal() {
    let affichage = document.getElementById('textview').value;
    if (affichage) {
        document.getElementById('textview').value = eval(affichage)
        tableau.push(affichage);
        historique();
    }
}
function clean() {
    document.getElementById('textview').value = ""
}
function back() {
    let affichage = document.getElementById('textview').value;
    document.getElementById('textview').value = affichage.substring(0, affichage.length - 1);
}
function historique() {
if(tableau.length != 0) {
let html = '<ul>';
for(let i = 0; i< tableau.length; i++) {
    html = html + '<li><a onclick="getHistorique('+ tableau[i] + ')">' + tableau[i] + '</a></li>'
}
html = html + '</ul>';
document.getElementById('historique').innerHTML = html;
}
}

function getHistorique(equa) {
    document.getElementById('textview').value=eval(equa)
}
