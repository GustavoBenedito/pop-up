function startPopup(popupID) {
    if (localStorage.closePopup !== popupID) {
        const popup = document.getElementById(popupID);
        if (popup) {
            popup.classList.add('show');
            popup.addEventListener('click', (e) => {
                if (e.target.id == popupID || e.target.className == 'close') {
                    popup.classList.remove('show');
                }
            });
            function stopPopup(){
                localStorage.closePopup = popupID;
                console.log('fechado');
            }
            
            const stopPop = document.querySelector('.stop-popup');
            
            stopPop.addEventListener('click', () => stopPopup());
        }
    }
}
const finddev = document.querySelector('.find-dev');
finddev.addEventListener('click', () => startPopup('popup'));

