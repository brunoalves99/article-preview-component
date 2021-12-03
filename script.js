let btnShare = document.getElementsByClassName('share-link')[0];
let shareModal = document.getElementsByClassName('share')[0];
let svgColor = document.getElementById('svg-color');
let imgName = document.getElementsByClassName('img-name')[0];
let shareELinks = document.getElementsByClassName('share+links')[0];

btnShare.addEventListener('click',() => {
    let wid = document.getElementsByTagName('body')[0].clientWidth;
    if(wid > 500){
        shareModal.classList.toggle('none');
    btnShare.classList.toggle('bg-dark');
    if(btnShare.classList.contains('bg-dark')){
        svgColor.setAttribute('fill','#FFF');
    }else{
        svgColor.setAttribute('fill','#6E8098');
    }
    }else{

        imgName.classList.toggle('none');
        shareModal.classList.toggle('none');
        shareELinks.classList.toggle('shareELinks');
        shareModal.classList.toggle('share-bottom');
        shareModal.classList.toggle('share');
        btnShare.classList.toggle('bg-dark');
        if(btnShare.classList.contains('bg-dark')){
            svgColor.setAttribute('fill','#FFF');
        }else{
            svgColor.setAttribute('fill','#6E8098');
        }
    }
    
});
