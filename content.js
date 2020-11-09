/**
 * Created by August @2020.11
 * Content_Script
 */
(function(){
    chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
        if (res && res.msg === 'add to cart') {
            let sizes = document.querySelectorAll('.product-form-dropdown-container .product-form-dropdown .dropdown-select a');
            let reg = new RegExp(res.size, 'ig');
            console.log(res.size);
            for (let i = 0; i < sizes.length; i++) {
                if (reg.test(sizes[i].innerText)) {
                    sizes[i].click();
                    document.querySelector('.product-form-submit').click();
                }
            }
            sendResponse('add to cart done!');
            setTimeout(() => {
                clickCheckout();
            }, 500);
        }
    })

    function clickCheckout(){
        if(document.querySelector('#mini-cart-modal').classList.contains("show")){
            document.querySelector('#mini-cart section.to-cart button.btn').click();
        }
    }
})();
