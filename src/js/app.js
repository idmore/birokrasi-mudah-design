var ModalEl = document.getElementById('modal')
var ResultEl = document.getElementById('bigsearch-recomendation');
var WrapperEl = document.getElementById('wrapper')
var Modal

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

//recomendation
window.recomendation = {
    show: function(data)
    {
        ResultEl.style.display = 'inherit'
        ResultEl.style.opacity = 1
    },
    close: function()
    {
        ResultEl.style.opacity = 0
        ResultEl.style.display = 'none'
    }
}