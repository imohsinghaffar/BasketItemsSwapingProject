let quantity1 = 0;
let quantity2 = 0;

let fullBasket = 100;
function updateRightBasket()
{
    let rightBasket = document.querySelector('.quantity2');
    rightBasket.innerHTML = quantity2+=1;
    let leftBasket = document.querySelector('.quantity1');
    leftBasket.innerHTML = fullBasket-=1;
}

function updateLeftBasket()
{
    let leftBasket = document.querySelector('.quantity1');
    leftBasket.innerHTML = fullBasket+=1;
    let rightBasket = document.querySelector('.quantity2');
    rightBasket.innerHTML = quantity2-=1;

}
