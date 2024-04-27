<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h4>显示</h4>
				<p>使用<a href="https://github.com/primefaces/primeflex">PrimeFlex3.x</a> 控制组件的显示效果。</p>

				<h5>inline</h5>
				<InputText class="mr-2 inline" />
				<InputText class="inline" />

				<h5>Block</h5>
				<InputText class="mb-2 block" />
				<InputText class="block" />

				<h5>在小屏幕上可见</h5>
				<p>请调整浏览器大小查看。</p>
        <Button type="button" icon="pi pi-bars" class="p-button-rounded md:hidden" />

				<h5>在小屏幕上隐藏。</h5>
				<p>请调整大小隐藏。</p>
        <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success hidden md:inline-flex" />

        <h4>使用 @media print 定义打印样式</h4>
        <CodeHighlight lang="css"> 
          @media print {
            .hidden {
              display: none !important;
            }

            .inline {
              display: inline !important;
            }

            .inline-block {
              display: inline-block !important;
            }

            .block {
              display: block !important;
            }

            .flex {
              display: flex !important;
            }

            .inline-flex {
              display: inline-flex !important;
            }
          }
        </CodeHighlight>
        <Button type="button" icon="pi pi-print" label="打印测试" @click="printClick" />
        <div ref="print" class="print-a4">
          <Button icon="pi pi-star" label="按钮" />
          <h5>打印可见，屏幕不可见</h5>
          <p class="hidden print:block text-8xl">仅当打印时显示</p>

          <h5>屏幕可见，打印不可见</h5>
          <p class="block print:hidden">不适于打印。</p>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight.vue'
import printJS from '@/utils/print.js'

export default {
  components: { CodeHighlight },
  computed: {
    settings({ $store }) {
      return $store.state.settings
    }
  },
  methods: {
    printClick() {
      printJS({
        printable: this.$refs.print,
        type: 'html',
        header: '打印测试',
        css: 'print-a4.css' // public/print/print-a4.css
      }, this.settings)
    }
  }
}
</script>

<style>
@import url('/print/print-a4.css');
</style>
