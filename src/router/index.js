import Vue from "vue"
import VueRouter from "vue-router"

import Index from "@/pages/index";
import Home from "@/pages/home";
import Complete from "@/pages/Complete";
import Address from "@/pages/Address";
import Cart from "@/pages/Cart";
import Details from "@/pages/Details";
import Item from "@/pages/Item";
import Payment from "@/pages/Payment";



Vue.use(VueRouter)


const routes =[

		{ path: "/", component: Index, children: [
			{path: "", name: "home", component: Home},
			{path: "complete", name: "complete", component: Complete},
            {path: "cart", name: "Cart", component: Cart},
            {path: "details", name: "Details", component: Details},
            {path: "item", name: "Item", component: Item},
            {path: "payment", name: "Payment", component: Payment},

            {path: "address", name: "Address", component: Address},


		] },
];


const router = new VueRouter({
	routes	
})

export default router;