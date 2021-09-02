<template>
	<div>
		<header class="header">
			<div class="wrapper">
				<nav>
					<router-link class="link" tag="div" :to="{path : '/admin/create'}">افزودن محصول جدید</router-link>
					<router-link class="link" tag="div" :to="{path : '/admin/create-admin'}">افزودن مدیر جدید</router-link>
				</nav>
			</div>
		</header>
		<router-view/>

	</div>
</template>

<script>
    export default {
        name: "Admin",
    }
</script>

<style scoped lang="scss">

	.header {
		background-color: dodgerblue;
		color: #F8F8F8;
		min-height: 120px;
		position: sticky;
		top: 0;

		nav {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;

			.link {
				cursor: pointer;
			}
		}
	}
</style>
