<template>
  <div class="grid crud-demo">
    <div class="col-12">
      <div class="card">
        <Toast />
        <Toolbar class="mb-4">
          <template #start>
            <Button
              label="新建"
              icon="pi pi-plus"
              class="p-button-success mr-2"
              @click="openNew"
            />
            <Button
              label="删除"
              icon="pi pi-trash"
              class="p-button-danger"
              :disabled="!selectedProducts || !selectedProducts.length"
              @click="confirmDeleteSelected"
            />
          </template>

          <template #end>
            <FileUpload
              mode="basic"
              accept="image/*"
              :max-file-size="1000000"
              choose-label="导入"
              class="mr-2 p-d-inline-block"
            />
            <Button
              label="导出"
              icon="pi pi-upload"
              class="p-button-help"
              @click="exportCSV($event)"
            />
          </template>
        </Toolbar>

        <DataTable
          ref="dt"
          :selection.sync="selectedProducts"
          :value="products"
          data-key="id"
          :row-hover="true"
          :paginator="true"
          :rows="10"
          :filters="filters"
          paginator-template=" FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink    RowsPerPageDropdown  CurrentPageReport"
          :rows-per-page-options="[5, 10, 25]"
          current-page-report-template=" 显示第 {first} 到第 {last} 条记录，总共 {totalRecords} 条记录 "
          class="p-datatable-customers"
        >
          <template #header>
            <div class="table-header">
              <h5 class="p-m-0">
                产品列表
              </h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters['global']"
                  placeholder="检索..."
                />
              </span>
            </div>
          </template>

          <Column
            selection-mode="multiple"
            header-style="width: 3rem"
          />
          <Column
            field="code"
            header="编码"
            sortable
          />
          <Column
            field="name"
            header="名称"
            sortable
          />
          <Column header="图片">
            <template #body="slotProps">
              <img
                :src="$publicUrl('resource/demo/images/product/' + slotProps.data.image)"
                :alt="slotProps.data.image"
                class="product-image"
              >
            </template>
          </Column>
          <Column
            field="price"
            header="价格"
            sortable
          >
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column
            field="category"
            header="类别"
            sortable
          />
          <Column
            field="rating"
            header="评分"
            sortable
          >
            <template #body="slotProps">
              <Rating
                :value="slotProps.data.rating"
                :readonly="true"
                :cancel="false"
              />
            </template>
          </Column>
          <Column
            field="inventoryStatus"
            header="状态"
            sortable
          >
            <template #body="slotProps">
              <span
                :class="
                  'product-badge status-' +
                    slotProps.data.inventoryStatus.toLowerCase()
                "
              >{{ slotProps.data.inventoryStatus }}</span>
            </template>
          </Column>
          <Column>
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success mr-2"
                @click="editProduct(slotProps.data)"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-warning"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </template>
          </Column>
        </DataTable>

        <Dialog
          visible.sync="productDialog"
          :style="{ width: '450px' }"
          header="产品详情"
          :modal="true"
          class="p-fluid"
        >
          <img
            v-if="product.image"
            :src="$publicUrl('resource/demo/images/product/' + product.image)"
            :alt="product.image"
            class="product-image"
          >
          <div class="field">
            <label for="name">名称</label>
            <InputText
              id="name"
              v-model.trim="product.name"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !product.name }"
            />
            <small
              v-if="submitted && !product.name"
              class="p-invalid"
            >名称是必须的。</small>
          </div>
          <div class="field">
            <label for="description">描述</label>
            <Textarea
              id="description"
              v-model="product.description"
              required="true"
              rows="3"
              cols="20"
            />
          </div>

          <div class="field">
            <label class="mb-3">分类</label>
            <div class="formgrid grid">
              <div class="field-radiobutton col-6">
                <RadioButton
                  id="category1"
                  v-model="product.category"
                  name="category"
                />
                <label for="category1">穿戴配饰</label>
              </div>
              <div class="field-radiobutton col-6">
                <RadioButton
                  id="category2"
                  v-model="product.category"
                  name="category"
                />
                <label for="category2">服装</label>
              </div>
              <div class="field-radiobutton col-6">
                <RadioButton
                  id="category3"
                  v-model="product.category"
                  name="category"
                />
                <label for="category3">电子产品</label>
              </div>
              <div class="field-radiobutton col-6">
                <RadioButton
                  id="category4"
                  v-model="product.category"
                  name="category"
                />
                <label for="category4">小饰品</label>
              </div>
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label for="price">价格</label>
              <InputNumber
                id="price"
                v-model="product.price"
                mode="currency"
                currency="USD"
                locale="en-US"
              />
            </div>
            <div class="field col">
              <label for="quantity">数量</label>
              <InputNumber
                id="quantity"
                v-model="product.quantity"
                integeronly
              />
            </div>
          </div>
          <template #footer>
            <Button
              label="取消"
              icon="pi pi-times"
              class="p-button-text"
              @click="hideDialog"
            />
            <Button
              label="保存"
              icon="pi pi-check"
              class="p-button-text"
              @click="saveProduct"
            />
          </template>
        </Dialog>

        <Dialog
          :visible.sync="deleteProductDialog"
          :style="{ width: '450px' }"
          header="确认"
          :modal="true"
        >
          <div class="confirmation-content">
            <i
              class="pi pi-exclamation-triangle mr-3"
              style="font-size: 2rem"
            />
            <span v-if="product">确认删除 <b>{{ product.name }}</b>?</span>
          </div>
          <template #footer>
            <Button
              label="否"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteProductDialog = false"
            />
            <Button
              label="是"
              icon="pi pi-check"
              class="p-button-text"
              @click="deleteProduct"
            />
          </template>
        </Dialog>

        <Dialog
          :visible.sync="deleteProductsDialog"
          :style="{ width: '450px' }"
          header="确认"
          :modal="true"
        >
          <div class="confirmation-content">
            <i
              class="pi pi-exclamation-triangle mr-3"
              style="font-size: 2rem"
            />
            <span v-if="product">确认删除所选项吗?</span>
          </div>
          <template #footer>
            <Button
              label="否"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteProductsDialog = false"
            />
            <Button
              label="是"
              icon="pi pi-check"
              class="p-button-text"
              @click="deleteSelectedProducts"
            />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '@/api/ProductService'

export default {
  data() {
    return {
      products: null,
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      product: {},
      selectedProducts: null,
      filters: {},
      submitted: false
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()
  },
  mounted() {
    this.productService.getProducts().then((data) => (this.products = data))
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    },
    openNew() {
      this.product = {}
      this.submitted = false
      this.productDialog = true
    },
    hideDialog() {
      this.productDialog = false
      this.submitted = false
    },
    saveProduct() {
      this.submitted = true

      if (this.product.name.trim()) {
        if (this.product.id) {
          this.$set(
            this.products,
            this.findIndexById(this.product.id),
            this.product
          )
          this.$toast.add({
            severity: 'success',
            summary: '提示',
            detail: '更新成功',
            life: 3000
          })
        } else {
          this.product.id = this.createId()
          this.product.code = this.createId()
          this.product.image = 'product-placeholder.svg'
          this.product.inventoryStatus = 'INSTOCK'
          this.products.push(this.product)
          this.$toast.add({
            severity: 'success',
            summary: '提示',
            detail: '新建成功',
            life: 3000
          })
        }

        this.productDialog = false
        this.product = {}
      }
    },
    editProduct(product) {
      this.product = { ...product }
      this.productDialog = true
    },
    confirmDeleteProduct(product) {
      this.product = product
      this.deleteProductDialog = true
    },
    deleteProduct() {
      this.products = this.products.filter((val) => val.id !== this.product.id)
      this.deleteProductDialog = false
      this.product = {}
      this.$toast.add({
        severity: 'success',
        summary: '提示',
        detail: '删除成功',
        life: 3000
      })
    },
    findIndexById(id) {
      let index = -1
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          index = i
          break
        }
      }

      return index
    },
    createId() {
      let id = ''
      var chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return id
    },
    exportCSV() {
      this.$refs.dt.exportCSV()
    },
    confirmDeleteSelected() {
      this.deleteProductsDialog = true
    },
    deleteSelectedProducts() {
      this.products = this.products.filter(
        (val) => !this.selectedProducts.includes(val)
      )
      this.deleteProductsDialog = false
      this.selectedProducts = null
      this.$toast.add({
        severity: 'success',
        summary: '提示',
        detail: '删除成功',
        life: 3000
      })
    }
  }
}
</script>

<style scoped lang="scss">
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
  width: 150px;
  margin: 0 auto 2rem auto;
  display: block;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;

  &.status-有现货 {
    background: #c8e6c9;
    color: #256029;
  }

  &.status-缺货 {
    background: #ffcdd2;
    color: #c63737;
  }

  &.status-lowstock {
    background: #feedaf;
    color: #8a5340;
  }
}

@media screen and (max-width: 960px) {
  ::v-deep .p-datatable {
    &.p-datatable-customers {
      .p-datatable-thead > tr > th,
      .p-datatable-tfoot > tr > td {
        display: none !important;
      }

      .p-datatable-tbody > tr {
        border-bottom: 1px solid var(--surface-d);

        > td {
          text-align: left;
          display: block;
          border: 0 none !important;
          width: 100% !important;
          float: left;
          clear: left;
          border: 0 none;

          .p-column-title {
            padding: 0.4rem;
            min-width: 30%;
            display: inline-block;
            margin: -0.4rem 1rem -0.4rem -0.4rem;
            font-weight: bold;
          }

          .p-progressbar {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }

  ::v-deep .p-toolbar {
    flex-wrap: wrap;

    .p-button {
      margin-bottom: 0.25rem;
    }
  }
}
</style>
