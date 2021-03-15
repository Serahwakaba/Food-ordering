<template>
<div class="container">
<div class="d-flex">

<div class="container">

<div class="card" style="color:black;">

<span class=" border-secondary" style="height:50px; margin-left:50px;"><b>1. ADDRESS DETAILS</b></span>
  <div class="border border-secondary">
<div class="card-body" style="margin-left:50px;">
<h6><b>Sarah Gathoni</b></h6>
<h6>Parklands,Dagoretti South</h6>
<h6> A.S.K Showground,Nairobi</h6>
<h6>+254703661311</h6>
</div>
</div>
<div class="card" style="margin-left:50px;">
<span class="text-uppercase"> <b>2. Delivery Method</b></span><br>
<div class="card-body">
  <span><b>How Do You Want Your Order Delivered?</b></span>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Delivery Method</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option>Home Delivery(Delivered to your door step)</option>
      <option>Pick Up station</option>
      </select>
  </div>
  </div>
  <span class="text-uppercase margin-left:30px;">     <b> Pick up Station </b></span><br>
<div class="card-body">
  <span><b>Where do u want to pick it up?</b></span>
   <div class="form-group">
    <label for="exampleFormControlSelect1">Select Region</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Nairobi</option>
      <option>Kiambu</option>
      <option>Mombasa</option>
      <option>KIkuyu</option>
      <option>Nakuru</option>
    </select>
  </div>
</div>
  <span class="text-uppercase margin-left:30px;"> <b>Delivery to your Home Or Office </b></span><br>
  <div class="card-body">
  <span>Delivered between Friday 11 Dec and Thursday 14 Jan </span>
  </div>
  <h4><b>Confirm Your Order</b></h4>
<div class="tbl">
  <table align="center" style="width:50%;padding: 500px;">
<br>
      <tr>
        <th>QUANTITY</th>
        <th>2
</th>

      </tr>
      <tr>
        <td>Subtotal</td>
        <td>250</td>
      </tr>
       <tr>
        <td>VAT</td>
        <td>120</td>
      </tr>
       <tr>
        <td>Local Delivery Fee</td>
        <td>24</td>
      </tr>
       <tr>
        <td>Total</td>
        <td>500</td>
      </tr>
    </table>
</div>
 
  </div>
  </div>
 
<router-link to="/Payment"><button style="width: 100%;background-color:orange ;height: 50px;">PROCEED TO PAYMENT</button></router-link>


</div>
<div class= "d" >
<span class=" border-secondary" style="height:50px; margin-left:50px;height:500px;"><b>Your Order(2 items)</b></span>

      <img src="@/assets/rice.jpg"  alt="..." width="200" height="100">
     <div class="flex">
     <h3>Rice And Chicken</h3>
     <h5>Brand: kenchick Similar products from kenchick 4.6 out of 5</h5>
     <h5>(214 ratings)</h5>
     <h1>sh 250 </h1>
     <div style="">
     
    </div>
    </div>
    <img src="@/assets/rice.jpg"  alt="..." width="200" height="100">
     <div class="flex">
     <h3>Rice And Chicken</h3>
     <h5>Brand: kenchick Similar products from kenchick 4.6 out of 5</h5>
     <h5>(214 ratings)</h5>
     <h1>sh 250 </h1>
     <div style="">
     
    </div>
    </div>
    </div>
</div>
 </div>
</template>
<style>
.container{
color:white;
  
}

</style>