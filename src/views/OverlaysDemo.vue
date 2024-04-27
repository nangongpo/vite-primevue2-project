<template>
  <div class="grid overlay-demo">
    <div class="col-12 lg:col-6">
      <div class="card dialog-card">
        <h4>Dialog对话框</h4>
        <h5>基础</h5>
        <Button label="显示" icon="pi pi-external-link" @click="displayBasic = true" />
        <Dialog header="标题 " :visible.sync="displayBasic" :containerStyle="{ width: '50vw' }">
          <p class="m-0">
            话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
            官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
            簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
            开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          </p>
          <template #footer>
            <Button label="取消" icon="pi pi-times" @click="displayBasic = false" class="p-button-text" />
            <Button label="确认" icon="pi pi-check" @click="displayBasic = false" autofocus />
          </template>
        </Dialog>

        <Button label="长内容" icon="pi pi-external-link" @click="displayBasic2 = true" />
        <Dialog header="标题" :visible.sync="displayBasic2" :containerStyle="{ width: '50vw' }">
          <p>
            话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
            官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
            簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
            开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          </p>

          <p>
            话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
            官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
            簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
            开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          </p>

          <p>
            话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
            官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
            簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
            开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          </p>
          <template #footer>
            <Button label="取消" icon="pi pi-times" @click="displayBasic2 = false" class="p-button-text" />
            <Button label="确认" icon="pi pi-check" @click="displayBasic2 = false" autofocus />
          </template>
        </Dialog>

        <h5>带遮罩层</h5>
        <Button label="显示" icon="pi pi-external-link" @click="displayModal = true" />
        <Dialog header="标题" :visible.sync="displayModal" :containerStyle="{ width: '50vw' }" :modal="true">
          <p class="m-0">
            话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
            官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
            簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
            开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          </p>
          <template #footer>
            <Button label="取消" icon="pi pi-times" @click="displayModal = false" class="p-button-text" />
            <Button label="确认" icon="pi pi-check" @click="displayModal = false" autofocus />
          </template>
        </Dialog>

        <h5>确认对话框</h5>
        <Button label="删除" icon="pi pi-trash" class="p-button-danger" @click="displayConfirmation = true" />
        <Dialog :visible.sync="displayConfirmation" header="删除" :containerStyle="{ width: '350px' }" :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>你确认删除数据吗?</span>
          </div>
          <template #footer>
            <Button label="否" icon="pi pi-times" class="p-button-text" @click="displayConfirmation = false" />
            <Button
              label="是"
              icon="pi pi-check"
              class="p-button-text"
              autofocus
              @click="displayConfirmation = false" />
          </template>
        </Dialog>

        <h5>最大化</h5>
        <Button label="显示" icon="pi pi-external-link" @click="displayMaximizable = true" />
        <Dialog
          header="标题"
          :visible.sync="displayMaximizable"
          :containerStyle="{ width: '50vw' }"
          :maximizable="true"
          :modal="true">
          <p class="m-0">
            话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
            官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
            簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
            开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          </p>
          <template #footer>
            <Button label="取消" icon="pi pi-times" @click="displayMaximizable = false" class="p-button-text" />
            <Button label="确认" icon="pi pi-check" @click="displayMaximizable = false" autofocus />
          </template>
        </Dialog>

        <h5>位置</h5>
        <div class="grid flex-column">
          <div class="col">
            <Button label="左边" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
            <Button label="右边" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
          </div>
          <div class="col">
            <Button label="顶部" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
            <Button
              label="左上方"
              icon="pi pi-arrow-down-right"
              @click="openPosition('topleft')"
              class="p-button-warning" />
            <Button
              label="右上方"
              icon="pi pi-arrow-down-left"
              @click="openPosition('topright')"
              class="p-button-warning" />
          </div>
          <div class="col">
            <Button label="底部" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
            <Button
              label="左下方"
              icon="pi pi-arrow-up-right"
              @click="openPosition('bottomleft')"
              class="p-button-warning" />
            <Button
              label="右下方"
              icon="pi pi-arrow-up-left"
              @click="openPosition('bottomright')"
              class="p-button-warning" />
          </div>
        </div>

        <Dialog
          header="标题"
          :visible.sync="displayPosition"
          :containerStyle="{ width: '50vw' }"
          :position="position"
          :modal="true">
          <p class="m-0">
            话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
            官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
            簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
            开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          </p>
          <template #footer>
            <Button label="取消" icon="pi pi-times" @click="closePosition" class="p-button-text" />
            <Button label="确认" icon="pi pi-check" @click="closePosition" autofocus />
          </template>
        </Dialog>
      </div>
    </div>
    <div class="col-12 lg:col-6">
      <div class="grid">
        <div class="col-12">
          <div class="card">
            <h4>ConfirmDialog 确认对话框</h4>
            <ConfirmDialog></ConfirmDialog>
            <ConfirmDialog group="positionDialog"></ConfirmDialog>
            <h5>基础</h5>
            <Button @click="confirm1()" icon="pi pi-check" label="确认" class="mr-2"></Button>
            <Button @click="confirm2()" icon="pi pi-times" label="删除"></Button>

            <h5>位置</h5>
            <div class="grid flex-column">
              <div class="col">
                <Button
                  @click="confirmPosition('left')"
                  icon="pi pi-arrow-right"
                  label="左边"
                  class="p-button-help mr-2"></Button>
                <Button
                  @click="confirmPosition('right')"
                  icon="pi pi-arrow-left"
                  label="右边"
                  class="p-button-help"></Button>
              </div>
              <div class="col">
                <Button
                  @click="confirmPosition('topleft')"
                  icon="pi pi-arrow-down-right"
                  label="左上方"
                  class="p-button-warning mr-2"></Button>
                <Button
                  @click="confirmPosition('top')"
                  icon="pi pi-arrow-down"
                  label="顶部"
                  class="p-button-warning mr-2"></Button>
                <Button
                  @click="confirmPosition('topright')"
                  icon="pi pi-arrow-down-left"
                  label="右上方"
                  class="p-button-warning"></Button>
              </div>
              <div class="col">
                <Button
                  @click="confirmPosition('bottomleft')"
                  icon="pi pi-arrow-up-right"
                  label="左下方"
                  class="p-button-success mr-2"></Button>
                <Button
                  @click="confirmPosition('bottom')"
                  icon="pi pi-arrow-up"
                  label="底部"
                  class="p-button-success mr-2"></Button>
                <Button
                  @click="confirmPosition('bottomright')"
                  icon="pi pi-arrow-up-left"
                  label="右下方"
                  class="p-button-success"></Button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card">
            <h4>ConfirmPopup 气泡确认框</h4>
            <ConfirmPopup group="confirmPopup"></ConfirmPopup>
            <Button @click="confirmPopup1($event)" icon="pi pi-check" label="确认" class="mr-2"></Button>
            <Button
              @click="confirmPopup2($event)"
              icon="pi pi-times"
              label="删除"
              class="p-button-danger p-button-outlined">
            </Button>
          </div>
        </div>
        <div class="col-12">
          <div class="card p-fluid">
            <h5>OverlayPanel 弹出框</h5>
            <div class="grid formgrid">
              <div class="col-6">
                <Button type="button" label="图片" class="p-button-success" @click="toggle" />
                <OverlayPanel ref="op" append-to="body" :show-close-icon="true">
                  <img :src="$publicUrl('resource/demo/images/nature/nature9.jpg')" alt="Nature 9" />
                </OverlayPanel>
              </div>
              <div class="col-6">
                <Button type="button" label="数据表格" class="p-button-success" @click="toggleDataTable" />
                <OverlayPanel
                  id="overlay_panel"
                  ref="op2"
                  append-to="body"
                  :show-close-icon="true"
                  style="width: 450px">
                  <DataTable
                    :selection.sync="selectedProduct"
                    :value="products"
                    selection-mode="single"
                    :paginator="true"
                    :rows="5"
                    @row-select="onProductSelect">
                    <Column field="name" header="Name" sortable />
                    <Column header="Image">
                      <template #body="slotProps">
                        <img
                          :src="$publicUrl('resource/demo/images/product/' + slotProps.data.image)"
                          :alt="slotProps.data.image"
                          class="product-image" />
                      </template>
                    </Column>
                    <Column field="price" header="Price" sortable>
                      <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                      </template>
                    </Column>
                  </DataTable>
                </OverlayPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6">
      <div class="card">
        <h5>Sidebar 侧边栏</h5>

        <Button icon="pi pi-arrow-right" class="mr-2" @click="visibleLeft = true" />
        <Button icon="pi pi-arrow-left" class="mr-2" @click="visibleRight = true" />
        <Button icon="pi pi-arrow-down" class="mr-2" @click="visibleTop = true" />
        <Button icon="pi pi-arrow-up" class="mr-2" @click="visibleBottom = true" />
        <Button icon="pi pi-th-large" @click="visibleFull = true" />

        <Sidebar :visible.sync="visibleLeft" :baseZIndex="1000">
          <h4>左侧边栏</h4>
        </Sidebar>

        <Sidebar :visible.sync="visibleRight" :baseZIndex="1000" position="right">
          <h4>右侧边栏</h4>
        </Sidebar>

        <Sidebar :visible.sync="visibleTop" :baseZIndex="1000" position="top">
          <h4>上侧边栏</h4>
        </Sidebar>

        <Sidebar :visible.sync="visibleBottom" :baseZIndex="1000" position="bottom">
          <h4>下侧边栏</h4>
        </Sidebar>

        <Sidebar :visible.sync="visibleFull" :baseZIndex="1000" position="full">
          <template #header>
            <h4 class="mb-0">全屏</h4>
          </template>
        </Sidebar>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <h4>Tooltip 文字提示</h4>
        <h5>方向</h5>
        <div class="grid p-fluid">
          <div class="col-12 md:col-3">
            <InputText type="text" placeholder="右边" v-tooltip.right="'请输入'" />
          </div>
          <div class="col-12 md:col-3">
            <InputText type="text" placeholder="顶部" v-tooltip.top="'请输入'" />
          </div>
          <div class="col-12 md:col-3">
            <InputText type="text" placeholder="底部" v-tooltip.bottom="'请输入'" />
          </div>
          <div class="col-12 md:col-3">
            <InputText type="text" placeholder="左边" v-tooltip.left="'请输入'" />
          </div>
        </div>
        <h5>聚焦和模糊</h5>
        <InputText type="text" placeholder="聚焦" v-tooltip.bottom.focus="'请输入'" />

        <h5>按钮</h5>
        <Button type="button" label="保存" icon="pi pi-check" v-tooltip="'点击继续'" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '../api/ProductService'

export default {
  data() {
    return {
      display: false,
      displayBasic: false,
      displayBasic2: false,
      displayModal: false,
      displayConfirmation: false,
      displayMaximizable: false,
      displayPosition: false,
      position: 'center',
      visibleLeft: false,
      visibleRight: false,
      visibleTop: false,
      visibleBottom: false,
      visibleFull: false,
      products: null,
      selectedProduct: null
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()
  },
  mounted() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data))
  },
  methods: {
    confirm1() {
      this.$confirm.require({
        message: '您确定要继续吗？',
        header: '确定',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$toast.add({
            severity: 'success',
            summary: '确定',
            detail: '操作成功',
            life: 3000
          })
        },
        reject: () => {
          this.$toast.add({
            severity: 'info',
            summary: '取消',
            detail: '你已取消操作',
            life: 3000
          })
        }
      })
    },
    confirm2() {
      this.$confirm.require({
        message: '您想删除这条记录吗？',
        header: '删除',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          this.$toast.add({
            severity: 'info',
            summary: '确认',
            detail: '记录已删除',
            life: 3000
          })
        },
        reject: () => {
          this.$toast.add({
            severity: 'info',
            summary: '取消',
            detail: '你已取消删除操作',
            life: 3000
          })
        }
      })
    },
    confirmPosition(position) {
      this.$confirm.require({
        group: 'positionDialog',
        message: '您想删除这条记录吗?',
        header: '删除',
        icon: 'pi pi-info-circle',
        position: position,
        accept: () => {
          this.$toast.add({
            severity: 'info',
            summary: '确认',
            detail: '记录已删除',
            life: 3000
          })
        },
        reject: () => {
          this.$toast.add({
            severity: 'info',
            summary: '取消',
            detail: '你已取消删除操作',
            life: 3000
          })
        }
      })
    },
    openPosition(position) {
      this.position = position
      this.displayPosition = true
    },
    closePosition() {
      this.displayPosition = false
    },
    confirmPopup1(event) {
      this.$confirm.require({
        group: 'confirmPopup',
        target: event.currentTarget,
        message: '您确定要继续吗？',
        header: '确定',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$toast.add({
            severity: 'success',
            summary: '确定',
            detail: '操作成功',
            life: 3000
          })
        },
        reject: () => {
          this.$toast.add({
            severity: 'info',
            summary: '取消',
            detail: '你已取消操作',
            life: 3000
          })
        }
      })
    },
    confirmPopup2(event) {
      this.$confirm.require({
        group: 'confirmPopup',
        target: event.currentTarget,
        message: '您想删除这条记录吗？',
        header: '删除',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          this.$toast.add({
            severity: 'info',
            summary: '确认',
            detail: '记录已删除',
            life: 3000
          })
        },
        reject: () => {
          this.$toast.add({
            severity: 'info',
            summary: '取消',
            detail: '你已取消删除操作',
            life: 3000
          })
        }
      })
    },
    open() {
      this.display = true
    },
    close() {
      this.display = false
    },
    toggle(event) {
      this.$refs.op.toggle(event)
    },
    toggleDataTable(event) {
      this.$refs.op2.toggle(event)
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    },
    onProductSelect(event) {
      this.$refs.op.hide()
      this.$toast.add({
        severity: 'info',
        summary: 'Product Selected',
        detail: event.data.name,
        life: 3000
      })
    }
  }
}
</script>

<style scoped>
.dialog-card p {
  text-indent: 1.75rem;
}
.dialog-card .p-button {
  margin: 0 0.5rem 0 0;
  min-width: 10rem;
}

.dialog-card .p-dialog .p-button {
  min-width: 6rem;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
