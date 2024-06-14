<script setup lang="ts">
import { OrbitControls, Environment, MeshGlassMaterial } from '@tresjs/cientos';
import { useRenderLoop } from '@tresjs/core';

import { TresLeches, useControls } from '@tresjs/leches'
import '@tresjs/leches/dist/style.css'
import type { ShallowRef } from 'vue';
import { shallowRef } from 'vue';

const {transmission, clearcoat} = useControls({
	transmission: {
		value: 1,
		min: 0,
		max: 1,
		step: 0.1,
	},
	clearcoat: {
		value: 1,
		min: 0,
		max: 1,
		step: 0.1,
	}
})


const boxRef: ShallowRef<null> = shallowRef(null)

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  if (boxRef.value) {
    (boxRef.value as any).rotation.y += delta;
    (boxRef.value as any).rotation.z = elapsed * 0.2;
  }
});

</script>

<template>
  <TresCanvas clear-color="#bfe3dd">
    <Environment preset="city" background  />
    <OrbitControls  :enable-damping="true"></OrbitControls>
		<TresMesh :position-x="-2">
			<TresSphereGeometry />
			<TresMeshPhysicalMaterial 
				:metalness="0"
				:roughness="0"
				:transmission="transmission.transmission"
				:ior="2.333"
				:thickness=".5"
				:clearcoat="clearcoat.clearcoat"
			/>
		</TresMesh>
		<TresMesh :position-x="2">
			<TresSphereGeometry />
			<MeshGlassMaterial />
		</TresMesh>
		<TresMesh ref="boxRef" :scale="1" cast-shadow :position-x="0" :position-y="2">
        <TresBoxGeometry :args="[1, 1, 1]" />
        <TresMeshNormalMaterial />
    </TresMesh>
  </TresCanvas>
	<TresLeches></TresLeches>
</template>

