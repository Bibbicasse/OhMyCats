
 /* ***********************************************/
 /*                 BOUTON ENVOI                  */
 /* ***********************************************/
 

 alert('"nfioezmvdsubljk')
var bouton = document.getElementById('btnEnvoiChat')
var formulaire = document.getElementById('formulaire')

bouton.addEventListener('click', function() {
    formulaire.innerHTML = 'Votre formulaire à bien été pris en compte';
    formulaire.classList.add('alert', 'alert-success');
})