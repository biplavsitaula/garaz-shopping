let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr): [];
    displayItemOnHome();
    displayBagIcon();
    }

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
   displayPopup();
}
function displayPopup(){
    let popup = document.getElementById('popup');
    popup.classList.add('popupShow');
    console.log(popup)
}
function removePopup(){
    popup.classList.remove('popupShow');
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length> 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}


function displayItemOnHome() {
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `<div class="item-container">
    <img src="${item.image}" class="item-image" alt="item image">
    <div class="rating">
        ${item.rating.stars}⭐| ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">${item.discount_percentage}% OFF</span>
    </div>
    <input type='button' class="btn-add-bag" onclick="addToBag(${item.id})" value ='Add to Bag'>
    
    </div>`
    });

    itemsContainerElement.innerHTML = innerHtml;
}
