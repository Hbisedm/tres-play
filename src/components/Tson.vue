<template>
		<TresMesh
		   		receive-shadow
					:rotation-x="-Math.PI * 0.5"
					:position="[1.5, -1, 0]"
					>
					<TresPlaneGeometry :args="[1.5, 1.5]" />
					<TresMeshBasicMaterial 
						:color="new Color('0xffffff')"
						:transparent="false"
						:opacity="0.5"
					 />
		</TresMesh>
</template>

<script setup lang="ts">
import { useTexture } from '@tresjs/core';
import {Color} from 'three';

// 						:alphaMap="alphaMap"
const alphaMap = await useTexture(['/donut/textures/donut_normal.png'])

</script>
