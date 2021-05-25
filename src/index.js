let select = function () {
    let selectOpenBtn = document.querySelector('.icon-open');
    let selectResetBtn = document.querySelector('.icon-reset');
    let selectItem = document.querySelectorAll('.select-item');
    let selectBody = document.querySelector('.select');
    let currentText = document.querySelector('.select-current');
    let select = document.querySelector('.select');
    
    // selectHeader.forEach(item => { item.addEventListener('click', selectToggle)});
    selectOpenBtn.addEventListener('click', selectToggle);
    selectResetBtn.addEventListener('click', selectReset);

    selectItem.forEach(item => { item.addEventListener('click', selectChoose)});

    function selectToggle() {
        selectBody.classList.toggle('is-active');
    };

    function selectChoose () {
        let text = this.innerText;
        currentText.innerText = text;
        select.classList.remove('is-active');
    };

    function selectReset () {
        currentText.innerText = '';
        select.classList.remove('is-active');
    }

};



select();