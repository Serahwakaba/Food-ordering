<template>
<div class="container">
<div class="container">
<div class="d-flex flex-row bd-highlight mb-3">

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
  <span class="text" style="margin-left:40px;">     <b> Pick up Station </b></span><br>
<div class="card-body" style="margin-left:40px;">
  <span>Ready for pick up between Friday 11 Dec and Thursday 14 Jan with cheaper shipping fees</span>
  <span>Britex Jogoo Rd PUS
Light chapel house, first floor, suite no. 12, Jogoo lane, off Jogoo road
Shipping Fee KSh 424 </span>
</div>
</div>
<div class="card" style="margin-left:50px;">
<span class="text-uppercase"> <b>3. Payment Method</b></span><br>
  <span class="text" style="margin-left:40px;">How do You Want To Pay For Your Order?</span><br>
  <img src="@/assets/Mall.png" width=600 alt="...">
   <div class="paym" style="display: flex; text-align: center;padding: 10px;">
     <button style="text-align: center;">    <img src="@/assets/mpesa.png" width=45 alt="...">

      </button>
                 <h4>Mpesa On Delivery</h4><br>

      <form align="center" class="form-inline" action="/action_page.php">
     <input align="center" type="Mobile" class="form-control" id="Mobile-number" placeholder="Enter Mobile Number" name="first-name">
   </form><br>
   </div>
    <p>Pay for your package when our delivery associate brings it to your doorstep or when you pick it up at one of our pickup stations.<br>

We encourage you to Pay Online - it saves you time & money</p>
  <div class="paym" style="display: flex; text-align: center;padding: 10px;">

       <button style="text-align: center;"> <img src="@/assets/visa_logo.jpg" width=45 alt="..."></button>
       <form align="center" class="form-inline" action="/action_page.php">

      <input align="center" type="Mobile" class="form-control" id="Mobile-number" placeholder="Account Number" name="first-name">
      <input align="center" type="Mobile" class="form-control" id="Mobile-number" placeholder="CSV" name="first-name">
</form>
   </div>
   <div class="centre" style="text-align: center;">

      <table align="center" style="width:50%;padding: 500px;">
<br>
      <tr>
        <th>QUANTITY</th>
        <th>     <input type="number" class="Region" id="a" placeholder="Please Select" name="Region">
</th>

      </tr>
      <tr>
        <td>Subtotal</td>
        <td>320</td>
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
        <td>424</td>
      </tr>0
    </table>
     <router-link to="/Complete"><button style="background-color:orange;height: 50px;width:300px;">Confirm Order</button></router-link>
    <router-link to="/"> <button style="background-color:grey;height: 50px;width:300px;">Cancel Order</button></router-link>
  </div>
  
</div>
</div>
<div class= "d" style="margin-left:50px;">
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
</div>
 </template>