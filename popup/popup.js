/**
 * Created by August @2020.11
 * Popup_Script
 */
(function(){
    document.querySelector('#start-btn').addEventListener('click', addToCart);

    function addToCart() {
        let message = {
            size: document.querySelector('#size-input').value,
            msg: 'add to cart'
        }
    
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
                if (res) {
                    console.log(res);
                }
            })
        })
    }
})();
