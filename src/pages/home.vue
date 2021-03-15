<template>
<div class="c">
<div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img alt="Vue logo" src="../assets/logo.jpg"  width="1350" height="500">
      <div class="carousel-caption">
        <h1 class="display-2">Starkiuts</h1>
        <h5>Start Your Order With Us</h5>

        <button type="button" class="btn btn-outline-light btn-lg">VIEW DISHES
        </button>
         <router-link to="/"><button type="button" class="btn btn-primary btn-lg">Get Started</button></router-link>
      </div>

    </div>
    <div class="carousel-item">
    <img alt="Vue logo" src="../assets/logo.jpg"  width="1350" height="500">
    </div>
    <div class="carousel-item">
    <img alt="Vue logo" src="../assets/logo.jpg"  width="1350" height="500">
    </div>
  </div>
  </div>

 <div class="bg">
    <h1 style="display:block; text-align:centre;color:black; margin-left:400px;">WELCOME TO OUR DELICACIES</h1>
    <h3 style="margin-left:430px; color:black;">There is no sincere love than the love of food</h3>
   </div>
 
<div class="fluid">
  <nav>
        <b-nav tabs>
          <b-nav-item disabled><b>FOOD CATEGORIES</b></b-nav-item>
         </b-nav>
 </nav>

<div class="d-flex justify-content-between align-items-center">
<div class="col">

<div class="card">
    <img src="@/assets/rice.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>
                </div>
              </div>
   </div>
</div>
</div>

 <div class="col">
  
 <div class="card">
    <img src="@/assets/pilau.jpeg" width="200"  class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
             <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>
                </div>
              </div>
              </div>

</div>
</div>
        <div class="col">

   <div class="card">
    <img src="@/assets/ugli.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
               <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>
                </div>
              </div>
              </div>
              </div>
</div>
        <div class="col">

<div class="card">
    <img src="@/assets/mokimo.jpeg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
               <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>
                </div>
              </div>
              </div>
</div>
</div>
</div>
<div class="d-flex justify-content-between align-items-center">
<div class="col">

  <div class="card">
    <img src="@/assets/Matoke.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>

                </div>
              </div>
              </div>
</div>
</div>
        <div class="col">

<div class="card">
    <img src="@/assets/nyamachoma.jpeg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Nyama Choma ksh 450<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>
                </div>
              </div>
              </div>
</div>
</div>
        <div class="col">

   <div class="card">
    <img src="@/assets/bhajia.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Bhajia ksh 150<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>

                </div>
              </div>
              </div>
              </div>

</div>
        <div class="col">

   <div class="card">
    <img src="@/assets/chiponyama.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Chipoh Nyama ksh 200<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
               <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>

                </div>
              </div>
              </div>

</div>
</div>
</div>
<div class="d-flex justify-content-between align-items-center">
<div class="col">

   <div class="card">
    <img src="@/assets/chapoh.png" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
               <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>

                </div>
              </div>
              </div>

</div>
</div>
<div class="col">

<div class="card">
    <img src="@/assets/fish.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>
                </div>
              </div>
              </div>

</div>
</div>
<div class="col">

  <div class="card">
    <img src="@/assets/sta.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>

                </div>
              </div>
              </div>

</div>
</div>
<div class="col">

   <div class="card">
    <img src="@/assets/mutura.jpg" class="card-img-top" alt="...">
   <div class="card-body">
              <p class="card-text" style="color: black;">Beaf Stew ksh 100<br></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link to="/Item"><button type="button" class="btn btn-sm btn-outline-secondary">OrderNow</button></router-link>
                <router-link to="/Cart"><button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button></router-link>

                </div>
              </div>
              </div>
</div>
</div>
</div>
</div>
</div>
</template>
<style>
.c{
  background-color:white;
}
.card-img-top {
    width: 100px;
    height: 15vw;
    object-fit: cover;
}
.bg {
  

  height: 50%;
  background-position: center;
  background-size: cover;
  background-image-repeat: no repeat;
  text-align:centre;

   
}
.bg{
      background-repeat: no-repeat;
      justify-content:centre;

}
.nav{
        background-color: white;
        font-size: 1.25em;
        text-color:#000;}
</style>
