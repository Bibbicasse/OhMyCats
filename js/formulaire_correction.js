// JS pour adopte un chat 
// alert('coucou')
$(function() {
    var choixChat = $('#choix');
    var raison = $('#raison');
    var error = false;

    // console.log(choix, raison)

    //soumission du formulaire
    //if else
    $('#chatFORMULAIRE').on('submit', function(e) {
        e.preventDefault(); //on empeche l'envoi du form
        
        //On vérifie que c'est pas vide, et que la valeur sélectionnée dans le select
        //Les classes alert etc. viennent de Bootstrap et on les applique à la class parente donc form-group
        if(choixChat.val().length == 0) {
            choixChat.parent().addClass('alert alert-danger');
            error = true;
        }
        else {
            choixChat.parent().addClass('alert alert-success');
        }

        //On vérifie la longueur du textarea (min 15 caractère)
        if(raison.val().length <= 15) {
            raison.parent().addClass('alert alert-danger');
            error = true;
        } else {
            raison.parent().addClass('alert alert-success');
        }

        if(error === false) {
            $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyé, vous recevrez votre chat à manger par nos livreur privé dans les meilleurs délais !<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span><button></div>')
        }
    });

            //on retire les classes dès que les champs changent

    choixChat.on('change', function(e) {
        $(this).parent().removeClass('alert alert-danger');
        error = false;
    });

    raison.on('change', function(e) {
        $(this).parent().removeClass('alert alert-danger');
        error = false;
    });
});

