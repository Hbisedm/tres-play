<script setup lang="ts">
import { GLTFModel } from '@tresjs/cientos'
import {Color, Vector3} from 'three';
import {ref} from 'vue';
import gsap from 'gsap';
import Tson from './Tson.vue';

const gl = {
	antialias: true,
	alpha: true
}



const modelRef= ref()
const planeViewRef = ref()

let scrollY = window.scrollY

window.addEventListener('scroll', () => {
	scrollY = window.scrollY
	const newSection = Math.round(scrollY / window.innerHeight)

	switch (newSection) {
		case 0: {
			gsap.to(modelRef.value.value.position, {
				duration: 1,
				ease: 'power2.inOut',
				x: 1.5,
				y: 0
			})
			gsap.to(modelRef.value.value.rotation, {
				duration: 1,
				ease: 'power2.inOut',
				z: Math.PI * 0.15
			})
			gsap.to(planeViewRef.value.position, {
				duration: 1,
				ease: 'power2.inOut',
				x: 0,
				y: 0,
			})
			break;
		}
		case 1: {
			gsap.to(modelRef.value.value.position, {
				duration: 1,
				ease: 'power2.inOut',
				x: -1.5,
				y: 0
			})
			gsap.to(modelRef.value.value.rotation, {
				duration: 1,
				ease: 'power2.inOut',
				z: -0.45 
			})
			gsap.to(planeViewRef.value.position, {
				duration: 1,
				ease: 'power2.inOut',
				x: -3,
				y: 0
			})
			break;
		}
			
		case 2:
			gsap.to(modelRef.value.value.position, {
				duration: 1,
				ease: 'power2.inOut',
				x: 0,
				y: 0.5
			})
			gsap.to(modelRef.value.value.rotation, {
				duration: 1,
				ease: 'power2.inOut',
				z: 0
			})
			gsap.to(planeViewRef.value.position, {
				duration: 1,
				ease: 'power2.inOut',
				x: -1.5,
				y: 0.5
			})
			
			break;
		default:
			break;
	}

})

</script>

<template>
	<div class="three-js">
		<TresCanvas v-bind="gl" shadows>
			<TresPerspectiveCamera :position="[0, 0, 5]" :fov="45" ></TresPerspectiveCamera>

			<TresGroup cast-shadow>
				<Suspense>
					<GLTFModel 
						cast-shadow
						ref="modelRef"
						:scale="[8, 8, 8]"
						:position="[1.5, 0, 0]"
						:rotation-x="Math.PI * 0.2"
						:rotation-y="Math.PI * 0.15"
						path="/donut/scene.gltf" />
				</Suspense>
			</TresGroup>

			<TresGroup ref="planeViewRef">
				<Suspense>
					<Tson></Tson>
				</Suspense>
			</TresGroup>

			<TresAmbientLight 
				:color="new Color('0xffffff')" 
				:intensity="1.8" />

			<TresDirectionalLight
				:position="new Vector3(1, 2, 0)"
				:color="new Color('0xffffff')"
				:intensity="2"
			></TresDirectionalLight>

			<!-- <TresMesh ref="boxRef" :scale="1" cast-shadow :position-x="1" :position-y="0">
					<TresBoxGeometry :args="[1, 1, 1]"  />
					<TresMeshNormalMaterial />
			</TresMesh> -->
		</TresCanvas>
	</div>
	<div class="dount-bg">
		<section class="section-box left">
			<div class="container">
				<div class="hero">
					<h2>How we do</h2>
					<h3>Exff9999999</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
						<br />
						proxxxxxxxxxxxxxx
					</p>
				</div>
			</div>
		</section>

		<section class="section-box right">
			<div class="container">
				<div class="hero">
					<h2>How we do</h2>
					<h3>Exff9999999</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
						<br />
						proxxxxxxxxxxxxxx
					</p>
				</div>
			</div>
		</section>

		<section class="section-box ">
			<div class="container">
				<div class="hero">
					<h1>How we do</h1>
				</div>
			</div>
		</section>

	</div>
</template>


<style scoped lang="scss">
@font-face {
	font-family: 'pop';
	src: url('../../public/Poppins-Medium.ttf');
	font-weight: normal;
	font-style: normal;
}

.three-js {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

}

.dount-bg {
	background: linear-gradient(to left, #fffcdc, #ecc0dc);
	font-family: 'pop';
}

h2{
	font-size: 60px;
	font-weight: 600;
	line-height: 70px;
	font-family: inherit;
	display:block;
	width:100%;
}
h3{
	font-size: 40px;
	font-weight: 400;
	line-height: 60px;
	margin-bottom: 30px;
	display: block;
	width:100%;
}
.left {
	.container {
		grid-template-areas: 'content ..';
	}
}

.right {
	.container {
		grid-template-areas: '.. content';
	}
}

.section-box {
	position: relative;
	.container {
	  height: 100vh;
		margin: 0 auto;
		padding: 0 15px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		justify-content: flex-start;

		.hero {
			width: 94%;
			height: 100%;
			margin-bottom: 50px;
			grid-area: content;
			display: flex;
			align-items:flex-start;
			justify-content: center;
			flex-direction: column;

			h1 {
				position: absolute;
				bottom: 20%;
				left: 50%;
				transform: translate(-50%, 0);
				font-size: 90px;
				line-height: 100px;
				font-weight: 700;
				height: 100px;
				width: 100%;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;

			}
		}
	}



}

</style>