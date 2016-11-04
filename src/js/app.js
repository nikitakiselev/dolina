let author = 'Nikita Kiselev';

$("#carousel").owlCarousel({
    items: 6,
    autoPlay: 5000,
    pagination: false,
    responsive: false
});

AjaxForm.prototype.flash = (message, status) => {
    swal({
        title: status === 'error' ? 'Error' : 'Information',
        text: message,
        type: status
    });
};

let callbackForm = new AjaxForm('#callback-form');
