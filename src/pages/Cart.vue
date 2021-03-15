<template>
<div class="p" style="    background-color:black;
">
<div class="container" style="text-align: centre; background:white;">
<form>
  <div class="form-group">
    <input type="cart" class="form-control" id="cart" placeholder="Your Cart Has Been Updated">
  </div>
  </form>
    <p><b>Cart(1)item</b></p>
  <div class= "content">
      <img src="@/assets/rice.jpg"  alt="..." height="60" width="200">
      <span>RicewithBeafstew</span>
    <b-table striped hover :items="items"  ></b-table>
  </div>
  <div class= "content">
      <img src="@/assets/rice.jpg"  alt="..." height="60" width="200">
      <span>Rice And Beaf</span>
    <b-table striped hover :items="items"  ></b-table>
  </div>
  </div>
  <div  class="e" style="justify-content:between; ">
	<p>TOTAL:  250</p>
	<p> Delivery Fee Not Included</p>
 <router-link to="/"><button style="height:50px;">CONTINUE SHOPPING</button></router-link>
 <router-link to="/Address"><button style="background-color:orange;height: 50px;;">PROCEED TO CHECKOUT</button></router-link>

 </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        items: [
          { QUANTITY: 1, UNITPRICE: '250', SUBTOTAL: '250' },          
        ]
      }
    }
  }
</script>

<style>
.content{
		display: inline-flex;
		width:700px;

}
.e{
	text-align:centre;
	justify-content:centre;
	margin-left:800px;

}
</style>