<template>
	<div class="container" ref="containerRef">
			<div class="item"><img src="/images/1.jpg" /></div>
			<div class="item"><img src="/images/2.jpg" /></div>
			<div class="item"><img src="/images/3.jpg" /></div>
			<div class="item"><img src="/images/4.jpg" /></div>
			<div class="item"><img src="/images/5.jpg" /></div>
			<div class="item"><img src="/images/6.jpg" /></div>
			<div class="item"><img src="/images/7.jpg" /></div>

			<div class="mark" ref="markRef" >
					<div v-if="dialogConfig.showStatus" class="dialog" :style="`left: ${dialogConfig.left}px; top: ${dialogConfig.top}px; transform: scale(${dialogConfig.scale})`">
						<div class="box">
							<div class="left">
								<img :src="dialogConfig.activityImage" alt="" />
							</div>
							<div class="right">loading...</div>
						</div>
					</div>
			</div>
	</div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { nextTick } from 'vue';
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

const markRef = ref<HTMLDivElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

const dialogConfig = reactive({
	showStatus: false,
	left: 0,
	top: 0,
	scale: 1,
	activityImage: ''
})

const scale = toRef(dialogConfig, 'scale')

function installEvent() {
	containerRef.value!.addEventListener('click', function (e) {
		const target = e.target as HTMLImageElement
		if(target.tagName === 'IMG') {
			console.log('setDialogAnimation')
			setDialogAnimation(target)
		}
	})

	markRef.value!.addEventListener('click', function (e) {
		markRef.value!.style.background = 'transparent'

		nextTick(() => {
			const dialog = document.querySelector('.dialog')
			console.log(dialog)
			dialog?.classList.remove('blow-up')	
			dialog!.classList.add('minification')
			setTimeout(() => {
						dialogConfig.showStatus = false
						markRef.value!.style.zIndex = '-1'
			}, 500)
		})
	})
}

function setDialogAnimation(target: HTMLImageElement) {
	markRef.value!.style.background = 'rgba(255,255,255, 0.95)'
	markRef.value!.style.zIndex = '100'
	markRef.value!.style.height = '100%'

	const scale = target.offsetWidth / 500
	let top = target.offsetTop

	if(target.offsetHeight < 660 * scale) {
		top = top - (660 * scale - target.offsetHeight) / 2
	}

	dialogConfig.activityImage = target.src	
	dialogConfig.scale = scale
	dialogConfig.left = target.offsetLeft
	dialogConfig.top = top
	dialogConfig.showStatus = true


	nextTick(() => {
		console.log(document.querySelector('.dialog'))
		document.querySelector('.dialog')!.classList.add('blow-up')
	})
}

onMounted(() => {
	installEvent()
})

</script>

<style scoped lang="scss">

.container {
	width: 100%;
	margin: 10px;
	column-count: 3;
	column-gap: 10px;
	.item {
		margin-bottom: 10px;
		img {
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
	}
}


.mark {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;

	.dialog {
		position: absolute;
		transform-origin:left top;

		.box {
			display: flex;
			align-items: center;
			justify-content: center;

			.left {
				font-size: 30px;
				img {
					opacity: 1;
					border-radius: 10px;
					width: 500px;
					object-fit: cover;
				}
			}
			.right {
				background-color: #fff;
				width: 300px;
				border-radius: 10px;
			}
		}
	}

}

@keyframes animateBlowUp {
	0% {
		width: 500px;
		transform: scale(v-bind(scale));
	}
	100% {
		width: 800px;
		left: calc(50% - 400px);
		top: calc(50% - 330px);
		transform: scale(1);
	}
}

.blow-up {
	animation: animateBlowUp 0.5s ease both;
}


@keyframes animateMinification {
	0% {
		width: 800px;
		left: calc(50% - 400px);
		top: calc(50% - 330px);
		transform: scale(1);
	}
	100% {
		width: 500px;
		transform: scale(v-bind(scale));
	}
}

.minification {
	animation: animateMinification 0.5s ease both;
}
</style>