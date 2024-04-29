document.addEventListener('DOMContentLoaded', function () {

    let preview = document.getElementById('preview-btn');
    let cross = document.getElementById('cross-btn');

    let mockup = document.getElementsByClassName('right-sidebar')[0];
    let mockupDiv = document.getElementsByClassName('r-sidebar')[0];


    preview.addEventListener('click', function () {
        mockup.classList.add('show');
        mockupDiv.classList.add('show2');
        document.body.classList.add('overflow-none');

    });


    cross.addEventListener('click', function () {
        mockup.classList.remove('show');
        mockupDiv.classList.remove('show2');
        document.body.classList.remove('overflow-none');
    })
    
});




