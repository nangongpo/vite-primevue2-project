<template>
  <div>
    <Button
      :key="1"
      label="打印"
      icon="pi pi-print"
      style="display: block; margin-bottom: 20px; margin-left: 6px"
      @click="printClick"
    />

    <div class="grid">
      <div class="col-12">
        <div
          id="invoice-content"
          class="card"
        >
          <div class="invoice">
            <div class="invoice-header">
              <div class="invoice-company">
                <Logo class="logo-image" />
                <div class="company-name">
                  你的公司
                </div>
                <div>9137 3rd Lane 加利福尼亚市</div>
                <div>CA 93504, 美国</div>
              </div>
              <div>
                <div class="invoice-title">
                  发票
                </div>
                <div class="invoice-details">
                  <div class="invoice-label">
                    日期
                  </div>
                  <div class="invoice-value">
                    {{ new Date().toISOString().split('T')[0] }}
                  </div>

                  <div class="invoice-label">
                    发票编号 #
                  </div>
                  <div class="invoice-value">
                    8523
                  </div>

                  <div class="invoice-label">
                    顾客 ID
                  </div>
                  <div class="invoice-value">
                    C1613
                  </div>
                </div>
              </div>
            </div>
            <div class="invoice-to">
              <div class="bill-to">
                记账到
              </div>
              <div class="invoice-to-info">
                <div>克莱尔·威廉姆斯（Hope Lane 148）</div>
                <div>加利福尼亚州帕洛阿尔托市94304。 </div>
              </div>
            </div>
            <div class="invoice-items">
              <table>
                <thead>
                  <tr>
                    <th>描述</th>
                    <th>数量</th>
                    <th>单价</th>
                    <th>总计</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>绿色T恤</td>
                    <td>1</td>
                    <td>$49.00</td>
                    <td>$49.00</td>
                  </tr>
                  <tr>
                    <td>游戏机</td>
                    <td>2</td>
                    <td>$99.00</td>
                    <td>$198.00</td>
                  </tr>
                  <tr>
                    <td>微型扬声器</td>
                    <td>1</td>
                    <td>$85.00</td>
                    <td>$85.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="invoice-summary">
              <div class="invoice-notes">
                <b>便签</b>
                <div />
              </div>
              <div>
                <div class="invoice-details">
                  <div class="invoice-label">
                    小计
                  </div>
                  <div class="invoice-value">
                    $332.00
                  </div>

                  <div class="invoice-label">
                    增值税
                  </div>
                  <div class="invoice-value">
                    0
                  </div>

                  <div class="invoice-label">
                    总计
                  </div>
                  <div class="invoice-value">
                    $332.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/index.vue'
import printJS from '@/utils/print'

export default {
  components: { Logo },
  computed: {
    settings({ $store }) {
      return $store.state.settings
    }
  },
  methods: {
    printClick() {
      // window.print()
      printJS({
        printable: this.$el,
        type: 'html',
        css: 'print-invoice.css',
      }, this.settings)
    }
  }
}
</script>

<style>
@import url('/print/print-invoice.css');
</style>
