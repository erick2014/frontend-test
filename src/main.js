class ShoppingCart {
  constructor( name ){
    this.cartProducts=[];
  }
  get cartElements(){
    return this.cartProducts;
  }

  addArticleToCart( item ){
    this.cartProducts.push(item);
  }

  hideCartInView(){
    $('.section-shoppingcart').css({'display':'none'})
  }

  showCartInView(){
    $('.section-shoppingcart').css({'display':'block'})
  }
}

var cart=new ShoppingCart();

/*if there is not elements in the cart, then hide the cart in view*/
if( cart.cartElements.length===0 ){
  cart.hideCartInView();
}

/*Add to cart click handler*/
$('.add-to-cart-btn').click(function(e){
  var cartData=$(this).attr("data-shop-listing");
  cartData=$.parseJSON(cartData);
  cart.addArticleToCart(cartData);
  cart.showCartInView();
})
