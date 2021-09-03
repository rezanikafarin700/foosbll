<template>
	<div class="parent-spinner">
		<div class="parent-spinner__spinner" :style="newStyle"></div>
	</div>
</template>

<script>
    export default {
        name: "Spinner",

        props: {
            color: {
                type: String,
                default: '#7290ff',
            },
        },

        data() {
            return {
				newStyle : {
                    border : '4px solid ' + this.color,
                    borderBottomColor: 'transparent',
                }
            }
        },
    }
</script>

<style scoped lang="scss">
	.parent-spinner {
		display: flex;
		justify-content: center;
		align-items: center;

		&__spinner {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			animation-name: a;
			animation-duration: 1s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}
	}

	@keyframes a {
		0% {
			transform: rotate(0)
		}
		100% {
			transform: rotate(360deg)
		}
	}
</style>
