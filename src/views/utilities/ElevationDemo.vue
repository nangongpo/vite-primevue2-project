<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h4>阴影</h4>
        <p>阴影(<mark>.shadow-{level}</mark>) 是PrimeFlex3.x的css样式，用于指定沿z轴的表面和元素之间的间距。</p>

        <div class="grid">
          <div class="col-4">
            <div :class="['box', 'shadow-none', 'm-3']">shadow-none</div>
          </div>

          <div v-for="index in 8" :key="index" class="col-4">
            <div :class="['border-round', 'box', 'shadow-' + index, 'm-3']">shadow-{{ index }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.box {
  min-height: 100px;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  // border-radius: 4px;
}
</style>
