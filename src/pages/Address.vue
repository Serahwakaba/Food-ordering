<template>
<div class="container">
<div class="d-flex">
<div class="form-items" style="text-align: center;width: 550px;">
 <h2 style="width:250px;">Address Detail</h2>
 <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">First Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your First Name">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Second Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Second Name">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Mobile Number</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your PhoneNumber">
  </div>
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
 <div class="form-group">
    <label for="exampleFormControlSelect1">Select City</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Umoja</option>
      <option>Westlands</option>
      <option>Dandora</option>
      <option>KIkuyu</option>
      <option>Kiambu</option>
    </select>
  </div>
</form>
</div>
<div class="c" style="margin-left:100px;color:black;">
<h2></h2>
<h6>Sarah Gathoni</h6>
<h6>Parklands,Dagoretti South</h6>
<h6> A.S.K Showground,Nairobi</h6>
<h6>+254703661311</h6>
   <h2>Delivery Method</h2>
  <h7>How Do You Want Your Order Delivered?</h7>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Delivery Method</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option>Home Delivery(Delivered to your door step)</option>
      <option>Pick Up station</option>
      
    </select>
  </div>
  <h4>Pick Up Station</h4>
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
<div class="flex" style="margin-left:100px;">
<div class="tbl">
  <table align="center" style="width:50%;padding: 500px;">
        <img src="@/assets/rice.jpg"  alt="..." width="200" height="250">

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
</div></div>
  <router-link to="/Details"><button style="width: 100%;background-color:orange ;height: 50px;">Save $ Continue</button></router-link>

</div>
</template>
<style>
.container{
  color:white;
    background-color:black;


}
</style>