var ModalEl = document.getElementById('modal')
var Modal
var WrapperEl = document.getElementById('wrapper')

// modal global
window.modal = {
    show: function(title, content_id){
        console.log('start modal')
        // change modal title
        document.querySelector('#modal .modal-title h1').innerHTML = title
        document.querySelector('#modal .modal-content').innerHTML = document.getElementById(content_id).innerHTML
        // duplicat content, to modal content

        WrapperEl.style.filter = 'blur(3px)'
        ModalEl.style.top = '0'
    },
    close: function(){
        console.log('close modal')
        WrapperEl.style.filter = 'none'
        ModalEl.style.top = '-100vh'
    }
}