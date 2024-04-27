<template>
  <div class="card icons-demo">
    <h4>图标</h4>
    <p>Avalon使用PrimeTek新的现代图标库PrimeIcons v6。</p>

    <h5>入门</h5>
    <p>PrimeIcons使用pi pi- {icon}语法，例如pi pi-check。可以使用诸如i或span之类的元素来显示独立图标。</p>
    <CodeHighlight> &lt;i class="pi pi-check"&gt;&lt;/i&gt; &lt;i class="pi pi-times"&gt;&lt;/i&gt; </CodeHighlight>

    <i class="pi pi-check" style="margin-right: 0.5rem" />
    <i class="pi pi-times" />

    <h5>组件图标</h5>
    <p>具有图标属性的组件使用pi pi- {icon}语法接受PrimeIcons。</p>
    <CodeHighlight> &lt;Button label="确认" icon="pi pi-check"&gt;&lt;/Button&gt; </CodeHighlight>

    <Button label="确认" icon="pi pi-check" />

    <h5>尺寸</h5>
    <p>使用font-size属性可以轻松更改图标的大小。</p>

    <CodeHighlight> &lt;i class="pi pi-check"&gt;&lt;/i&gt; </CodeHighlight>

    <i class="pi pi-check" />

    <CodeHighlight> &lt;i class="pi pi-check" style="fontSize: 2rem"&gt;&lt;/i&gt; </CodeHighlight>

    <i class="pi pi-check" style="fontsize: 2rem" />

    <h5>旋转动画</h5>
    <p>特殊的pi-spin类将连续旋转应用于图标。</p>
    <CodeHighlight> &lt;i class="pi pi-spin pi-spinner" style="fontSize: 2rem"&gt;&lt;/i&gt; </CodeHighlight>

    <i class="pi pi-spin pi-spinner" style="fontsize: 2rem" />

    <h5>图标列表</h5>
    <p>这是PrimeIcons的当前列表，会定期添加更多图标。您也可以在问题跟踪器中请求新图标。</p>

    <InputText v-model="filter" class="icon-filter" placeholder="搜索图标" />

    <div class="grid icons-list">
      <div v-for="icon of filteredIcons" :key="icon.properties.name" class="col-12 md:col-2 icon">
        <i :class="'pi pi-' + icon.properties.name" />
        <div>pi-{{ icon.properties.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight.vue'
import IconService from '@/api/IconService'

export default {
  components: {
    'CodeHighlight': CodeHighlight
  },
  data() {
    return {
      icons: null,
      filter: null
    }
  },
  computed: {
    filteredIcons({ icons, filter }) {
      if (filter) {
        return icons.filter(icon => icon.properties.name.indexOf(filter.toLowerCase()) > -1)
      }
      return icons
    }
  },
  created() {
    this.iconService = new IconService()
  },
  mounted() {
    this.iconService.getIcons().then(icons => this.icons = icons)
  }
}
</script>

<style lang="scss" scoped>
.icon-filter {
  width: 100%;
  padding: 1rem;
  margin: 1rem 0 1.5rem 0;
}

.icons-list {
  text-align: center;

  i {
    font-size: 1.5rem;
    color: var(--text-color-secondary);
    margin-bottom: 0.5rem;
  }

  .icon {
    padding-bottom: 2rem;
  }
}

::v-deep pre[class*="language-"] {
  &:before,
  &:after {
    display: none !important;
  }

  code {
    border-left: 10px solid var(--surface-d) !important;
    box-shadow: none !important;
    background: var(--surface-b) !important;
    margin: 1em 0;
    color: var(--text-color);
    font-size: 14px;

    .token {
      &.tag,
      &.keyword {
        color: #2196f3 !important;
      }

      &.attr-name,
      &.attr-string {
        color: #2196f3 !important;
      }

      &.attr-value {
        color: #4caf50 !important;
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
