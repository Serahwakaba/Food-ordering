<template>
	<div>
		<Menu />

		<router-view></router-view>

		<Footer />
	</div>

</template>

<script type="text/javascript">
import Footer from "@/components/footer";
import Menu from "@/components/menu";

export default {
	components: {  Footer, Menu }
}

</script>