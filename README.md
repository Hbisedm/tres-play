# Tres

## 渲染模型

提供gltf or glb 文件

将模型文件渲染到canvas上

使用 `@tresjs/cientos`的几个方式来实现

- 使用`useGlTF`

```js
  const { scene } = await useGLTF(path)
```

拿到场景对象，可以对其进行渲染

```html

<Suspense>
  <primitive :object="scene" />
</Suspense>

```

- 使用`GLTFModel`组件

```html

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

```

> 模型渲染是黑色

- 需要加点光源
- 看材质是否是可以接受光照的, 不行的话，换材质


## 阴影

- 提供一个平面去模拟阴影
- 可以给个阴影贴图的平面 

## 动画效果

- 使用`gasp`的提供的能力，更好的去处理动画效果

