<template>
  <div class="grid">
    <div class="col-12 flexbox-demo">
      <h4>FlexBox</h4>
      <p>
        使用响应式FlexBox实用程序轻松管理组件的布局。如果您需要实用程序来管理应用程序的布局，请参考<router-link to="/grid">
          网格系统
        </router-link>  。
      </p>

      <h5>Flex 容器</h5>
      <p>可以使用<i>flex</i> 或者 <i>inline-flex</i>类将元素配置为flexbox容器。</p>

      <CodeHighlight>
        &lt;div class="flex"&gt;Flex 容器&lt;/div&gt;
        &lt;div class="inline-flex"&gt;Inline Flex 容器&lt;/div&gt;
      </CodeHighlight>

      <div class="box flex mb-3">
        Flex 容器
      </div>
      <div class="box inline-flex">
        Inline Flex 容器
      </div>

      <h5>方向</h5>
      <p>使用<i>flex-{direction}</i> 类应用默认值，其中direction可以是以下任意一种。</p>
      <ul>
        <li>row (default)</li>
        <li>row-reverse</li>
        <li>column</li>
        <li>column-reverse</li>
      </ul>

      <h6>Row</h6>
      <CodeHighlight>
        &lt;div class="flex"&gt;
        &lt;div class="mr-2"&gt;项目 1&lt;/div&gt;
        &lt;div class="mr-2"&gt;项目 2&lt;/div&gt;
        &lt;div&gt;项目 3&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex">
        <div class="mr-2">
          项目 1
        </div>
        <div class="mr-2">
          项目 2
        </div>
        <div>项目 3</div>
      </div>

      <h6>列</h6>
      <CodeHighlight>
        &lt;div class="flex flex-column"&gt;
        &lt;div class="mb-2"&gt;项目 1&lt;/div&gt;
        &lt;div class="mb-2"&gt;项目 2&lt;/div&gt;
        &lt;div&gt;项目 3&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex flex-column">
        <div class="mb-2">
          项目 1
        </div>
        <div class="mb-2">
          项目 2
        </div>
        <div>项目 3</div>
      </div>

      <h6>响应式</h6>
      <p>R大屏幕的行方向，小屏幕的列。</p>

      <CodeHighlight>
        &lt;div class="flex flex-column md:flex-row"&gt;
        &lt;div class="mb-2 mr-2"&gt;项目 1&lt;/div&gt;
        &lt;div class="mb-2 mr-2"&gt;项目 2&lt;/div&gt;
        &lt;div class="mb-2 mr-2"&gt;项目 3&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>

      <div class="flex flex-column md:flex-row">
        <div class="mb-2 mr-2">
          项目 1
        </div>
        <div class="mb-2 mr-2">
          项目 2
        </div>
        <div class="mb-2 mr-2">
          项目 3
        </div>
      </div>

      <h6>Direction 类</h6>
      <ul>
        <li>flex-row</li>
        <li>flex-row-reverse</li>
        <li>flex-column</li>
        <li>flex-column-reverse</li>
        <li>sm:flex-row</li>
        <li>sm:flex-row-reverse</li>
        <li>sm:flex-column</li>
        <li>sm:flex-column-reverse</li>
        <li>md:flex-row</li>
        <li>md:flex-row-reverse</li>
        <li>md:flex-column</li>
        <li>md:flex-column-reverse</li>
        <li>lg:flex-row</li>
        <li>lg:flex-row-reverse</li>
        <li>lg:flex-column</li>
        <li>lg:flex-column-reverse</li>
        <li>xl:flex-row</li>
        <li>xl:flex-row-reverse</li>
        <li>xl:flex-column</li>
        <li>xl:flex-column-reverse</li>
      </ul>

      <h5>排序</h5>
      <p>使用<i>flex-order-{value}</i>指定组件在容器中的排序。它的值可以是 0 到 6.</p>
      <CodeHighlight>
        &lt;div class="flex"&gt;
        &lt;div class="mr-2 flex-order-3"&gt;项目 1&lt;/div&gt;
        &lt;div class="mr-2 flex-order-1"&gt;项目 2&lt;/div&gt;
        &lt;div class="mr-2 flex-order-2"&gt;项目 3&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex">
        <div class="mr-2 flex-order-3">
          项目 1
        </div>
        <div class="mr-2 flex-order-1">
          项目 2
        </div>
        <div class="mr-2 flex-order-2">
          项目 3
        </div>
      </div>

      <h6>响应式</h6>
      <p>排序根据屏幕尺寸而变化。</p>
      <CodeHighlight>
        &lt;div class="flex"&gt;
        &lt;div class="mr-2 flex-order-3 md:flex-order-2"&gt;项目 1&lt;/div&gt;
        &lt;div class="mr-2 flex-order-1 md:flex-order-3"&gt;项目 2&lt;/div&gt;
        &lt;div class="mr-2 flex-order-2 md:flex-order-1"&gt;项目 3&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>

      <div class="flex">
        <div class="mr-2 flex-order-3 md:flex-order-2">
          项目 1
        </div>
        <div class="mr-2 flex-order-1 md:flex-order-3">
          项目 2
        </div>
        <div class="mr-2 flex-order-2 md:flex-order-1">
          项目 3
        </div>
      </div>

      <h6>Order 类</h6>
      <ul>
        <li>flex-order-0</li>
        <li>flex-order-1</li>
        <li>flex-order-2</li>
        <li>flex-order-3</li>
        <li>flex-order-4</li>
        <li>flex-order-5</li>
        <li>flex-order-6</li>
        <li>sm:flex-order-0</li>
        <li>sm:flex-order-1</li>
        <li>sm:flex-order-2</li>
        <li>sm:flex-order-3</li>
        <li>sm:flex-order-4</li>
        <li>sm:flex-order-5</li>
        <li>sm:flex-order-6</li>
        <li>md:flex-order-0</li>
        <li>md:flex-order-1</li>
        <li>md:flex-order-2</li>
        <li>md:flex-order-3</li>
        <li>md:flex-order-4</li>
        <li>md:flex-order-5</li>
        <li>md:flex-order-6</li>
        <li>lg:flex-order-0</li>
        <li>lg:flex-order-1</li>
        <li>lg:flex-order-2</li>
        <li>lg:flex-order-3</li>
        <li>lg:flex-order-4</li>
        <li>lg:flex-order-5</li>
        <li>lg:flex-order-6</li>
        <li>xl:flex-order-0</li>
        <li>xl:flex-order-1</li>
        <li>xl:flex-order-2</li>
        <li>xl:flex-order-3</li>
        <li>xl:flex-order-4</li>
        <li>xl:flex-order-5</li>
        <li>xl:flex-order-6</li>
      </ul>

      <h5>包装 wrap</h5>
      <p>当容器中没有足够的空间时，Flex wrap定义包装行为（避免组件变形）。该类的格式为<i>flex-{value}</i>，value是下面可选值。</p>

      <ul>
        <li>nowrap (默认)</li>
        <li>wrap</li>
        <li>wrap-reverse</li>
      </ul>

      <h6>不使用 Wrap 包装</h6>
      <CodeHighlight>
        &lt;div class="flex"&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 1&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 2&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 3&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 4&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 5&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 6&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex">
        <div class="mr-2 mb-2">
          项目 1
        </div>
        <div class="mr-2 mb-2">
          项目 2
        </div>
        <div class="mr-2 mb-2">
          项目 3
        </div>
        <div class="mr-2 mb-2">
          项目 4
        </div>
        <div class="mr-2 mb-2">
          项目 5
        </div>
        <div class="mr-2 mb-2">
          项目 6
        </div>
      </div>

      <h6>使用 Wrap 包装</h6>
      <CodeHighlight>
        &lt;div class="flex flex-wrap"&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 1&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 2&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 3&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 4&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 5&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 6&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex flex-wrap">
        <div class="mr-2 mb-2">
          项目 1
        </div>
        <div class="mr-2 mb-2">
          项目 2
        </div>
        <div class="mr-2 mb-2">
          项目 3
        </div>
        <div class="mr-2 mb-2">
          项目 4
        </div>
        <div class="mr-2 mb-2">
          项目 5
        </div>
        <div class="mr-2 mb-2">
          项目 6
        </div>
      </div>

      <h6>Wrap Reverse</h6>
      <CodeHighlight>
        &lt;div class="flex flex-wrap-reverse"&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 1&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 2&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 3&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 4&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 5&lt;/div&gt;
        &lt;div class="mr-2 mb-2"&gt;项目 6&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex flex-wrap-reverse">
        <div class="mr-2 mb-2">
          项目 1
        </div>
        <div class="mr-2 mb-2">
          项目 2
        </div>
        <div class="mr-2 mb-2">
          项目 3
        </div>
        <div class="mr-2 mb-2">
          项目 4
        </div>
        <div class="mr-2 mb-2">
          项目 5
        </div>
        <div class="mr-2 mb-2">
          项目 6
        </div>
      </div>

      <h6>Wrap 类</h6>
      <ul>
        <li>flex-nowrap</li>
        <li>flex-wrap</li>
        <li>flex-wrap-reverse</li>
        <li>sm:flex-nowrap</li>
        <li>sm:flex-wrap</li>
        <li>sm:flex-wrap-reverse</li>
        <li>md:flex-nowrap</li>
        <li>md:flex-wrap</li>
        <li>md:flex-wrap-reverse</li>
        <li>lg:flex-nowrap</li>
        <li>lg:flex-wrap</li>
        <li>lg:flex-wrap-reverse</li>
        <li>xl:flex-nowrap</li>
        <li>xl:flex-wrap</li>
        <li>xl:flex-wrap-reverse</li>
      </ul>

      <h5>内容对齐 Justify Content</h5>
      <p>内容对齐是沿主轴的对齐方式，并使用 <i>jc-{value}</i>格式和响应方式进行定义。值字段可以是以下类型。</p>
      <ul>
        <li>start</li>
        <li>end</li>
        <li>center</li>
        <li>between</li>
        <li>around</li>
        <li>evenly</li>
      </ul>

      <h6>两端对齐 Between</h6>
      <CodeHighlight>
        &lt;div class="flex justify-content-between"&gt;
        &lt;div&gt;项目 1&lt;/div&gt;
        &lt;div&gt;项目 2&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex justify-content-between">
        <div>项目 1</div>
        <div>项目 2</div>
      </div>

      <h6>居中 Center</h6>
      <CodeHighlight>
        &lt;div class="flex justify-content-center"&gt;
        &lt;div class="mr-2"&gt;项目 1&lt;/div&gt;
        &lt;div&gt;项目 2&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex justify-content-center">
        <div class="mr-2">
          项目 1
        </div>
        <div>项目 2</div>
      </div>

      <h6>Justify Content 类</h6>
      <ul>
        <li>justify-content-start</li>
        <li>justify-content-end</li>
        <li>justify-content-center</li>
        <li>justify-content-between</li>
        <li>justify-content-around</li>
        <li>justify-content-evenly</li>
        <li>sm:justify-content-start</li>
        <li>sm:justify-content-end</li>
        <li>sm:justify-content-center</li>
        <li>sm:justify-content-between</li>
        <li>sm:justify-content-around</li>
        <li>sm:justify-content-evenly</li>
        <li>md:justify-content-start</li>
        <li>md:justify-content-end</li>
        <li>md:justify-content-center</li>
        <li>md:justify-content-between</li>
        <li>md:justify-content-around</li>
        <li>md:justify-content-evenly</li>
        <li>lg:justify-content-start</li>
        <li>lg:justify-content-end</li>
        <li>lg:justify-content-center</li>
        <li>lg:justify-content-between</li>
        <li>lg:justify-content-around</li>
        <li>lg:justify-content-evenly</li>
        <li>xl:justify-content-start</li>
        <li>xl:justify-content-end</li>
        <li>xl:justify-content-center</li>
        <li>xl:justify-content-between</li>
        <li>xl:justify-content-around</li>
        <li>xl:justify-content-evenly</li>
      </ul>

      <h5>对齐项目 Align Items</h5>
      <p>“对齐项目”配置是沿横轴的对齐方式，并使用<i>ai-{value}</i>格式和响应选项进行定义。值字段接受以下选项。</p>
      <ul>
        <li>start</li>
        <li>end</li>
        <li>center</li>
        <li>baseline</li>
        <li>stretch (default)</li>
      </ul>

      <h6>Start</h6>
      <CodeHighlight>
        &lt;div class="flex align-items-start"&gt;
        &lt;div class="mr-2" style="height:100px"&gt;项目 1&lt;/div&gt;
        &lt;div style="height:50px"&gt;项目 2&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex align-items-start">
        <div
          class="mr-2"
          style="height:100px"
        >
          项目 1
        </div>
        <div style="height:50px">
          项目 2
        </div>
      </div>

      <h6>Center</h6>
      <CodeHighlight>
        &lt;div class="flex align-items-center"&gt;
        &lt;div class="mr-2" style="height:100px"&gt;项目 1&lt;/div&gt;
        &lt;div style="height:50px"&gt;项目 2&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex align-items-center">
        <div
          class="mr-2"
          style="height:100px"
        >
          项目 1
        </div>
        <div style="height:50px">
          项目 2
        </div>
      </div>

      <h6>Align Items 类</h6>
      <ul>
        <li>align-items-start</li>
        <li>align-items-end</li>
        <li>align-items-center</li>
        <li>align-items-baseline</li>
        <li>align-items-strech</li>
        <li>sm:align-items-start</li>
        <li>sm:align-items-end</li>
        <li>sm:align-items-center</li>
        <li>sm:align-items-baseline</li>
        <li>sm:align-items-strech</li>
        <li>md:align-items-start</li>
        <li>md:align-items-end</li>
        <li>md:align-items-center</li>
        <li>md:align-items-baseline</li>
        <li>md:align-items-strech</li>
        <li>lg:align-items-start</li>
        <li>lg:align-items-end</li>
        <li>lg:align-items-center</li>
        <li>lg:align-items-baseline</li>
        <li>lg:align-items-strech</li>
        <li>xl:align-items-start</li>
        <li>xl:align-items-end</li>
        <li>xl:align-items-center</li>
        <li>xl:align-items-baseline</li>
        <li>xl:align-items-strech</li>
      </ul>

      <h5>自我对齐 Align Self</h5>
      <p>
        Align Self配置是特定元素沿横轴的对齐方式，并使用<i>align-self-{value}</i>  格式和响应选项进行定义。值字段接受以下选项。
      </p>
      <ul>
        <li>start</li>
        <li>end</li>
        <li>center</li>
        <li>baseline</li>
        <li>stretch (default)</li>
      </ul>

      <CodeHighlight>
        &lt;div class="flex" style="height: 150px;"&gt;
        &lt;div class="mr-2 align-self-start"&gt;Start&lt;/div&gt;
        &lt;div class="mr-2 align-self-center"&gt;Center&lt;/div&gt;
        &lt;div class="mr-2 align-self-end"&gt;End&lt;/div&gt;
        &lt;div class="mr-2 align-self-stretch"&gt;Stretch&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div
        class="flex"
        style="height: 150px;"
      >
        <div class="mr-2 align-self-start">
          Start
        </div>
        <div class="mr-2 align-self-center">
          Center
        </div>
        <div class="mr-2 align-self-end">
          End
        </div>
        <div class="mr-2 align-self-stretch">
          Stretch
        </div>
      </div>

      <h6>Align Self 类</h6>
      <ul>
        <li>align-self-start</li>
        <li>align-self-end</li>
        <li>align-self-center</li>
        <li>align-self-baseline</li>
        <li>align-self-strech</li>
        <li>sm:align-self-start</li>
        <li>sm:align-self-end</li>
        <li>sm:align-self-center</li>
        <li>sm:align-self-baseline</li>
        <li>sm:align-self-strech</li>
        <li>md:align-self-start</li>
        <li>md:align-self-end</li>
        <li>md:align-self-center</li>
        <li>md:align-self-baseline</li>
        <li>md:align-self-strech</li>
        <li>lg:align-self-start</li>
        <li>lg:align-self-end</li>
        <li>lg:align-self-center</li>
        <li>lg:align-self-baseline</li>
        <li>lg:align-self-strech</li>
        <li>xl:align-self-start</li>
        <li>xl:align-self-end</li>
        <li>xl:align-self-center</li>
        <li>xl:align-self-baseline</li>
        <li>xl:align-self-strech</li>
      </ul>

      <h5>内容对齐 Align Content</h5>
      <p>内容对齐是沿横轴的对齐方式，并使用<i>align-content-{value}</i> 格式和响应选项进行定义。值字段是以下可选值。</p>
      <ul>
        <li>start</li>
        <li>end</li>
        <li>center</li>
        <li>around</li>
        <li>between</li>
        <li>evenly</li>
      </ul>

      <h6>Start</h6>
      <CodeHighlight>
        &lt;div class="flex align-content-start flex-wrap" style="height:200px"&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 1&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 2&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="card">
        <div class="flex align-content-start flex-wrap" style="height:200px">
          <div
            class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;">
            项目 1
          </div>
          <div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;">
            项目 2
          </div>
        </div>
      </div>

      <h6>Center</h6>
      <CodeHighlight>
        &lt;div class="flex align-content-center flex-wrap" style="height:200px"&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 1&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 2&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="card">
        <div class="flex align-content-center flex-wrap" style="height:200px">
          <div
            class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;">
            项目 1
          </div>
          <div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;">
            项目 2
          </div>
        </div>
      </div>

      <h6>Between</h6>
      <CodeHighlight>
        &lt;div class="flex align-content-between flex-wrap" style="height:200px"&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 1&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 2&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 3&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 4&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 5&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="card">
        <div class="flex align-content-between flex-wrap" style="height:200px;">
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 1</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 2</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 3</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 4</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 5</div>
        </div>
      </div>

      <h6>Around 柔性线均匀分布，两端有一半的空间</h6>
      <CodeHighlight>
        &lt;div class="flex align-content-around flex-wrap" style="height:200px"&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 1&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 2&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 3&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 4&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 5&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="card">
        <div class="flex align-content-around flex-wrap" style="height:200px;">
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 1</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 2</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 3</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 4</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 5</div>
        </div>
      </div>

      <h6>Evenly 柔性线均匀分布，周围空间相等</h6>
      <CodeHighlight>
        &lt;div class="flex align-content-evenly flex-wrap" style="height:200px"&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 1&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 2&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 3&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 4&lt;/div&gt;
        &lt;div class="flex align-items-center justify-content-center m-2" style="width: 200px; height: 50px;"&gt;项目 5&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="card">
        <div class="flex align-content-evenly flex-wrap" style="height:200px;">
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 1</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 2</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 3</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 4</div>
          <div class="flex align-items-center justify-content-center border-round m-2" style="width: 200px; height: 50px;">项目 5</div>
        </div>
      </div>

      <h6>Align Content 类</h6>
      <ul>
        <li>align-content-start</li>
        <li>align-content-end</li>
        <li>align-content-center</li>
        <li>align-content-around</li>
        <li>align-content-between</li>
        <li>align-content-evenly</li>
        <li>sm:align-content-start</li>
        <li>sm:align-content-end</li>
        <li>sm:align-content-center</li>
        <li>sm:align-content-around</li>
        <li>sm:align-content-between</li>
        <li>sm:align-content-evenly</li>
        <li>md:align-content-start</li>
        <li>md:align-content-end</li>
        <li>md:align-content-center</li>
        <li>md:align-content-around</li>
        <li>md:align-content-between</li>
        <li>md:align-content-evenly</li>
        <li>lg:align-content-start</li>
        <li>lg:align-content-end</li>
        <li>lg:align-content-center</li>
        <li>lg:align-content-around</li>
        <li>lg:align-content-between</li>
        <li>lg:align-content-evenly</li>
        <li>xl:align-content-start</li>
        <li>xl:align-content-end</li>
        <li>xl:align-content-center</li>
        <li>xl:align-content-around</li>
        <li>xl:align-content-between</li>
        <li>xl:align-content-evenly</li>
      </ul>

      <h5>Margin with FlexBox</h5>
      <p>
        与<router-link to="/setup">
          spacing utilities
        </router-link>结合使用时，flexbox提供了无限的可能性。
      </p>
      <h6>水平间距</h6>

      <CodeHighlight>
        &lt;div class="flex card"&gt;
        &lt;Button type="Button" icon="pi pi-check" class="mr-2" /&gt;
        &lt;Button type="Button" icon="pi pi-trash" class="p-button-danger"/&gt;
        &lt;Button type="Button" icon="pi pi-search" class="ml-auto p-button-help"/&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex card">
        <Button
          type="Button"
          icon="pi pi-check"
          class="mr-2"
        />
        <Button
          type="Button"
          icon="pi pi-trash"
          class="p-button-danger"
        />
        <Button
          type="Button"
          icon="pi pi-search"
          class="ml-auto p-button-help"
        />
      </div>

      <h6>垂直间距</h6>
      <CodeHighlight>
        &lt;div class="flex flex-column" style="height:150px"&gt;
        &lt;div&gt;项目 1&lt;/div&gt;
        &lt;div class="mt-auto"&gt;项目 2&lt;/div&gt;
        &lt;/div&gt;
      </CodeHighlight>
      <div class="flex flex-column" style="height:150px">
        <div>项目 1</div>
        <div class="mt-auto">
          项目 2
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight.vue'

export default {
  components: {
    'CodeHighlight': CodeHighlight
  }
}
</script>

<style lang="scss" scoped>
	.flex > div,
	.box {
		background-color: var(--surface-e);
		text-align: center;
		padding: 1rem;
		border-radius: 4px;
		box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
	}

	.flex > div {
		width: 8rem;
	}

	i:not([class~="pi"]) {
		background-color: #ffffff;
		color: #2196f3;
		font-family: Monaco, courier, monospace;
		font-style: normal;
		font-size: 12px;
		padding: 2px 4px;
		letter-spacing: .5px;
		border-radius: 3px;
		font-weight: 600;
		margin: 0 2px;
	}

	::v-deep pre[class*="language-"] {
		&:before, &:after {
			display: none !important;
		}

		code {
			border-left: 10px solid var(--surface-d) !important;
			box-shadow: none !important;
			background: var(--surface-e) !important;
			margin: 1em 0;
			color: var(--text-color);
			font-size: 14px;

			.token {
				&.tag,
				&.keyword {
					color: #2196F3 !important;
				}

				&.attr-name,
				&.attr-string {
					color: #2196F3 !important;
				}

				&.attr-value {
					color: #4CAF50 !important;
				}

				&.punctuation {
					color: var(--text-color);
				}

				&.operator,
				&.string {
					background: transparent;
				}
			}
		}
	}
</style>
