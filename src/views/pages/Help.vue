<template>
  <div class="grid help-page">
    <div class="col-12">
      <div class="card help-search">
        <div class="help-search-content">
          <h1>我们在这里为您提供帮助</h1>
          <div class="search-container">
            <i class="pi pi-search" />
            <InputText
              type="text"
              placeholder="检索"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 lg:col-6">
      <div class="card">
        <h4>一般</h4>
        <Accordion>
          <AccordionTab
            header="开始"
            :active="true"
          >
            <p>PrimeVue是Vue的丰富的开源组件集。</p>
          </AccordionTab>
          <AccordionTab header="下载">
            <p>PrimeVue在npm可用，如果您已有应用程序，请运行以下命令以将PrimeVue和PrimeIcons下载到您的项目。</p>
          </AccordionTab>
          <AccordionTab header="使用">
            <p>如果您的应用程序使用vue-cli 或配置了vue-loader的基于Webpack的构建，则这是推荐的方法。将组件作为.vue文件导入，以便在项目中无缝集成，其中每个组件的路径在组件文档的“导入”部分可以查看。</p>
          </AccordionTab>
        </Accordion>

        <h4>常见问题</h4>
        <Accordion>
          <AccordionTab
            header="常见问题一"
            :active="true"
          >
            <p>PrimeVue是一个与设计无关的库，因此与其他UI库不同，它不强制使用某种样式（例如：material 或者 bootstrap）。为了实现这一目标，将样式分为core和theme。core驻留在PrimeVue内部，以实现和组件结构相关的效果，例如定位，而theme实现颜色，填充和边距。</p>
          </AccordionTab>
          <AccordionTab header="常见问题二">
            <p>PrimeVue提供各种免费主题和高级主题，以及提供应用程序布局的高级模板。所有免费主题都是使用Theme Designer 构建的，npm软件包可以制作CSS的主题，而SASS的主题是设计器的高级功能。这意味着免费主题是开源的，如果要通过SASS进行主题定制，则需要获得designer license。</p>
          </AccordionTab>
          <AccordionTab header="常见问题三">
            <p>主题的CSS与PrimeVue使用相同的MIT许可证，这意味着可以根据您的需求定制生成的CSS，但是如果定制不简单，则应避免这样做。例如，甚至要更改原色，由于没有变量，因此要多次执行查找和替换。另一方面，这可以通过更改单个变量（例如$ primaryColor）来实现。访问SASS API以获取可用定制选项的文档.</p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>

    <div class="col-12 lg:col-6">
      <div class="card">
        <h4>系统状况</h4>
        <p>所有服务均可使用。</p>
        <div class="status-bars">
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar status-bar-failure" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
          <div class="status-bar" />
        </div>
        <div class="status-bar-footer">
          <span>30天前</span>
          <span>今天</span>
        </div>
      </div>

      <div class="card">
        <h4>文章</h4>
        <p>我们团队的最新文章。</p>
        <div class="blog-posts">
          <div class="blog-post">
            <div class="blog-text">
              <h1>充满信心地建立收入</h1>
              <span>并避免失败</span>
            </div>
            <div class="blog-profile">
              <img
                :src="$publicUrl('resource/demo/images/avatar/amyelsner.png')"
                alt="apollo"
              >
            </div>
          </div>

          <div class="blog-post">
            <div class="blog-text">
              <h1>最新行销趋势</h1>
              <span>不要错过我们的提示</span>
            </div>
            <div class="blog-profile">
              <img
                :src="$publicUrl('resource/demo/images/avatar/annafali.png')"
                alt="apollo"
              >
            </div>
          </div>

          <div class="blog-post">
            <div class="blog-text">
              <h1>如何吸引观众</h1>
              <span>10种提高效率的方法</span>
            </div>
            <div class="blog-profile">
              <img
                :src="$publicUrl('resource/demo/images/avatar/stephenshaw.png')"
                alt="apollo"
              >
            </div>
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

</style>
