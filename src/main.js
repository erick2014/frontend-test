class ShoppingCart {
  constructor(){
    this.cartProducts=[];
  }
  get cartElements(){
    return this.cartProducts;
  }

  addNewArticle( item ){
    this.cartProducts.push(item);
  }

  hideCartInView(){
    $('.section-shoppingcart').css({'display':'none'})
  }

  showCartInView(){
    $('.section-shoppingcart').css({'display':'block'})
  }

  removeItemFromCart(id,name){
    //remove element from dom
    $('.shoppingcart-form table tbody #'+id).remove( );
    //remove from array
    var newCartProds=this.cartProducts.filter( function(item){
      if( item.name !=name ){
        return item
      }
    })
    this.cartProducts=newCartProds;

  }

  addItemToCart(product){
    var idNum=Math.random().toString();
    var cartProduct=`<tr id="${idNum}">
                      <td>
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div>
                          <button
                              data-item-id="${idNum}"
                              data-item-name="${product.name}" class="rem-btn" >
                            Remove
                          </button>
                        </div>

                      </td>
                      <td>
                        <output>€${product.price}</output>
                      </td>
                      <td>
                        <input  type="number" min="1" value="1">
                          <span>
                            <button
                              class="substract-quantity-item"
                              type="button"
                              aria-label="decrease">
                            -
                          </button>
                        <button class="add-quantity-item" type="button" aria-label="step up">
                        +
                        </button>
                        </span>
                      </td>
                    </tr>
                     <tr>
                      <td colspan="3">
                        <div class="line-sep"></div>
                      </td>
                    </tr>`;

      $('.shoppingcart-form table tbody').append( cartProduct )
  }
}

var cart=new ShoppingCart();

/*if there is not elements in the cart, then hide the cart in view*/
if( cart.cartElements.length===0 ){
  cart.hideCartInView();
}

$(document).on('click','.add-quantity-item',function(){
 // console.log('increasing quantity..');

})

$(document).on('click','.rem-btn',function(){
  var itemName=$(this).attr('data-item-name');
  var itemId=$(this).attr('data-item-id');
  cart.removeItemFromCart( itemId,itemName );
})

/*Add to cart click handler*/
$('.add-to-cart-btn').click(function(){
  var cartData=$(this).attr('data-shop-listing');
  cartData=$.parseJSON(cartData);
  cart.addNewArticle(cartData);
  cart.showCartInView();
  cart.addItemToCart(cartData)
})
