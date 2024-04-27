<template>
  <pre ref="code" :class="languageClass">
    <code>
      <slot />
    </code>
  </pre>
</template>

<script>
import 'prismjs/themes/prism.css'
import Prism from 'prismjs'

export default {
  props: {
    lang: {
      type: String,
      default: 'markup'
    }
  },
  computed: {
    languageClass() {
      return 'language-' + this.lang
    }
  },
  mounted() {
    Prism.highlightElement(this.$el.children[0])
  }
}
</script>

<style>
.code-highlight {
  position: relative;
}
.code-highlight__toolbar {
  position: absolute;
  right: 0;
}
</style>
