
function carregar () {
var msg = window.document.getElementById('msg')
var data = new Date ()
var hora = data.getHours()

msg.innerHTML = `Parabens conseguiu vai dormir ${hora} !.`

}
