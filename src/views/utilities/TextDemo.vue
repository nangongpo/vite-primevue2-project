<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h4>文本</h4>
        <p>使用PrimeFlex3.x文本实用程序管理文本的对齐方式和样式。</p>

        <h5>对齐</h5>
        <div class="mb-3 text-left">
          Left
        </div>
        <div class="mb-3 text-center">
          Center
        </div>
        <div class="text-right">
          Right
        </div>

        <h5>文本换行与溢出</h5>
        <div
          class="mb-3 border-round-sm border-1 p-3"
          style="width: 200px"
        >
          长文本会自动换行，并且不会溢出。
        </div>
        <div
          class="mb-3 border-round-sm border-1 p-3 white-space-nowrap"
          style="width: 200px"
        >
          长文本不会自动换行，并且会使父级溢出。
        </div>
        <div
          class="mb-3 border-round-sm border-1 p-3 white-space-nowrap overflow-hidden text-overflow-ellipsis"
          style="width: 200px"
        >
          长文本不会自动换行，也不会使父级溢出。
        </div>

        <h5>文本转换</h5>
        <div class="mb-3 lowercase">
          LOWERCASE
        </div>
        <div class="mb-3 uppercase">
          uppercase
        </div>
        <div class="capitalize">
          capitalize
        </div>

        <h5>文字样式</h5>
        <div class="mb-3 font-bold">
          Bold
        </div>
        <div class="mb-3 font-normal">
          Normal
        </div>
        <div class="mb-3 font-light">
          Light
        </div>
        <div class="mb-3 font-italic">
          Italic
        </div>
      </div>
    </div>
  </div>
</template>
