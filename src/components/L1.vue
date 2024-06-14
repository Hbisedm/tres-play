<script setup lang="ts">
import { OrbitControls, Environment } from '@tresjs/cientos';
import L from './L.vue';

</script>

<template>
  <TresCanvas clear-color="#bfe3dd">
    <TresPerspectiveCamera :position="[0, 1, 4]" ></TresPerspectiveCamera>
    <Suspense>
      <L></L>
    </Suspense>
    <Environment preset="umbrellas"  />
    <OrbitControls  :enable-pan="false" :enable-damping="true"></OrbitControls>
  </TresCanvas>
</template>

