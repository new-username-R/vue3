<template lang="">
	<div class="container">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>
<script>
export default {
	name: 'test',
}
</script>
<script setup>
import { ref, defineModel } from 'vue'
</script>
<style>
.container header {
	background-color: aqua;
}
</style>
