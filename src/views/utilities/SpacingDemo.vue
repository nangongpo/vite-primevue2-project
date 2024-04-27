<template>
  <div class="grid spacing-demo">
    <div class="col-12">
      <div class="card">
        <h4>间距</h4>
        <p>
          <router-link to="grid">
            PrimeFlex3.x
          </router-link> 提供了各种间距实用程序来修改元素的布局。
        </p>

        <h5>类</h5>
        <p>间隔类使用<mark>m{position}-{value}</mark>语法，而对于响应值，则使用<mark>{breakpoint}:m{position}-{value}</mark> 格式。</p>
        <pre>
          &lt;div class="mb-2"&gt;&lt;/div&gt;
          &lt;div class="mt-4"&gt;&lt;/div&gt;
          &lt;div class="m-1 lg:m-2"&gt;&lt;/div&gt;
        </pre>
        <h5>位置</h5>
        <p>位置可用于各边，x-y轴或空白可用于所有边的短边。</p>
        <ul>
          <li><b>t</b>: top</li>
          <li><b>b</b>: bottom</li>
          <li><b>l</b>: left</li>
          <li><b>r</b>: right</li>
          <li><b>x</b>: left and right</li>
          <li><b>y</b>: top and bottom</li>
        </ul>

        <h5>值</h5>
        <p>值字段从0到6不等，其中 <mark>$spacer</mark>的默认值为1rem。auto值仅可用于边距，并用于使元素居中。</p>
        <ul>
          <li><b>0</b>: $spacer * 0</li>
          <li><b>1</b>: $spacer * .25</li>
          <li><b>2</b>: $spacer * .5</li>
          <li><b>3</b>: $spacer * 1</li>
          <li><b>4</b>: $spacer * 1.5</li>
          <li><b>5</b>: $spacer * 2</li>
          <li><b>6</b>: $spacer * 3</li>
        </ul>

        <h5>断点</h5>
        <p>断点定义了如何根据屏幕尺寸定义间距。设计是移动优先的，因此较小的值也可以应用于较大的屏幕，例如md也可以应用于lg或xl（如果未明确定义）。</p>
        <ul>
          <li><b>sm</b>: 小屏幕，例如电话</li>
          <li><b>md</b>: 中型屏幕，例如平板电脑</li>
          <li><b>lg</b>: 大屏幕，例如笔记本</li>
          <li><b>xl</b>: 更大的屏幕，例如显示器</li>
        </ul>
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>用例 1</h5>
        <p>
          当屏幕尺寸变小时元素自动换行时，间隔是一个方便的实用程序。在下面的示例中，当按钮环绕时，它们会彼此叠置显示，而如果间隔一定，则可以轻松解决此问题。
        </p>

        <h6>无间距</h6>
        <Button
          type="button"
          label="按钮 1"
          style="width:20rem"
        />
        <Button
          type="button"
          label="按钮 2"
          style="width:20rem"
        />

        <h6>带间距</h6>
        <Button
          type="button"
          label="按钮 1"
          style="width:20rem"
          class="mr-2 mb-2"
        />
        <Button
          type="button"
          label="按钮 2"
          style="width:20rem"
          class="mb-2"
        />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>用例 2</h5>
        <p>
          间隔实用程序还可以与响应式PrimeFlex网格实用程序无缝协作。下面的示例演示了以下情况：在较小的屏幕上，输入要有边距以在堆叠模式下分别定位自己，请减小窗口的尺寸以查看差异。
        </p>

        <h6>无间距</h6>
        <div class="grid formgrid p-fluid">
          <div class="col-12 lg:col-4">
            <InputText />
          </div>
          <div class="col-12 lg:col-4">
            <InputText />
          </div>
          <div class="col-12 lg:col-4">
            <InputText />
          </div>
        </div>

        <h6>带间距</h6>
        <div class="grid formgrid p-fluid">
          <div class="col-12 mb-2 lg:col-4 lg:mb-0">
            <InputText />
          </div>
          <div class="col-12 mb-2 lg:col-4 lg:mb-0">
            <InputText />
          </div>
          <div class="col-12 mb-2 lg:col-4 lg:mb-0">
            <InputText />
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

<style scoped>
.demo-container {
    border: 1px solid var(--surface-d);
}
</style>
