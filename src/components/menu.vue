 <template>

<div class="c">
   <div class="h2 mb-0">
  </div>
  
  <b-navbar>

 <div class="footer-logo">
        <img src="@/assets/Star-icon.png"  alt="..." width="65">
                            </div>
    <b-navbar-brand href="#"><b>STARKIUTS RESTAURANT</b></b-navbar-brand>
      <b-navbar-nav class="left">
        <b-nav-form left>
          <b-form-input size="md"  placeholder="Search"></b-form-input>
        </b-nav-form>
      </b-navbar-nav>


       <b-nav-item  style="display: table-cell;
              padding: 0 .75em 0 0;
              vertical-align: end;
              text-align: right;
              margin-left:500px;
              white-space: nowrap;">
            <button style="display: inline-block;
                  padding: .45em .35em;
                  border-radius: 4px;
                  outline: none;">Log In</button>
        </b-nav-item>

        <b-nav-item class="right">
            <router-link to="/Cart"><button style="background-color:yellow; text-align:right;padding:.45em .35em;display: inline-block;
            border-radius: 4px;
            background: #f9eb38;
            color: #333;
            font-weight: 700;
            border: #f9eb38 solid 1px;">CART</button></router-link>
         </b-nav-item>
  </b-navbar>
</div>

</template>

<style scoped>
.c{
padding:0;
	background: pink;
  height: 80px;
	color: #fff;
  display: block;
  width: 100%;
  
}  

.logo{
  display: table-cell;
width: 28%;
padding: 0 .5em;
vertical-align: middle;
text-align: center;
}

</style>