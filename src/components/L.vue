<template>
	<primitive :object="scene"></primitive>
</template>

<script setup lang="ts">
import {useGLTF} from '@tresjs/cientos'

// const path = '/public/blender-cube.glb'
const path = '/public/model/scene.gltf'

const {scene} = await useGLTF(path, { draco: true})

scene.position.set(0, 0, -2)



</script>

<style scoped>

</style>