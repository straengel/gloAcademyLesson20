//popup
/*
const togglePopUp = () => {
    const   popUp = document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn');

    popUpBtn.forEach((elem) => elem.addEventListener('click', () => {
        popUp.style.display = 'block';
    }));

    popUp.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popUp.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popUp.style.display = 'none';
            }
        }
    });
};
/**/
//popup
const togglePopUp = () => {
    const   popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = popup.querySelector('.popup-content'),
            popupOffsetTop = popupContent.offsetTop,
            popupAnimate = () => {
                if(document.documentElement.offsetWidth > 992){
                    
                    popup.style.display = 'block';
                    countTopPopup++;
                    popupContent.style.top = `${countTopPopup}px`;
                    if((window.innerHeight / 10) >= countTopPopup){
                        setTimeout(popupAnimate, 10);
                    }
                } else {
                    popupContent.style.top = `${popupOffsetTop}px`;
                    popup.style.display = 'block';
                }
            };
    let countTopPopup = 0;
    //обнуляем высоту
    popupContent.style.top = 0;

    popupBtn.forEach((elem) => elem.addEventListener('click', popupAnimate)); 
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        if(document.documentElement.offsetWidth > 992){
            popupContent.style.top = `0px`;
            countTopPopup = 0;
        }
    }); 
};
export default togglePopUp;
