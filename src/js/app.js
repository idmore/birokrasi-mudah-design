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
    smallText: document.querySelector('.form-control small'),
    setText: function(text)
    {
        this.smallText.style.display = 'none'
        ResultEl.style.display = 'inherit'
        ResultEl.style.opacity = 1
        var el = '<div class="col-12 card-result card-result-small">'+text+'</div>'
        document.getElementById('bigsearch-recomendation-result').innerHTML = el
    },
    show: function(data)
    {
        var _this = this
        var el = ''
        this.smallText.style.display = 'none'
        ResultEl.style.display = 'inherit'
        ResultEl.style.opacity = 1
        data.map(function(n){
            el += _this.resultEl(n)
        })
        document.getElementById('bigsearch-recomendation-result').innerHTML = el

    },
    resultEl: function(n)
    {
        return '<div class="col-12 card-result card-result-small">'+
            '<div class="card-result-inside">'+
                '<div class="logo"> <img src="'+n.logo+'" title="logo lembaga"/></div>'+
                '<div class="text">'+
                    '<div class="text-title"><a href="'+n.link+'">'+n.text+'</a></div>'+
                '</div>'+
            '</div>'+
        '</div>'
    },
    close: function()
    {
        this.smallText.style.display = 'inherit'
        ResultEl.style.opacity = 0
        ResultEl.style.display = 'none'
    }
}