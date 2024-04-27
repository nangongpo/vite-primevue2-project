<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h4>默认</h4>
        <p>分页，排序，过滤和复选框选择。</p>
        <DataTable
          :selection.sync="selectedCustomers1"
          :value="customer1"
          :paginator="true"
          class="p-datatable-customers"
          :rows="10"
          data-key="id"
          :row-hover="true"
          :filters="filters1"
          :loading="loading1">
          <template #header>
            <div class="table-header">
              客户列表
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters1['global']" placeholder="全局检索" />
              </span>
            </div>
          </template>
          <template #empty> 无数据。 </template>
          <template #loading> 正在加载数据，请稍后... </template>
          <Column selection-mode="multiple" header-style="width: 3em" />
          <Column field="name" header="名称" :sortable="true">
            <template #body="slotProps">
              {{ slotProps.data.name }}
            </template>
          </Column>
          <Column header="国家" :sortable="true" sort-field="country.name" filter-field="country.name">
            <template #body="slotProps">
              <img
                :src="$publicUrl('resource/demo/flags/flag_placeholder.png')"
                :alt="slotProps.data.country.name"
                :class="'flag flag-' + slotProps.data.country.code"
                width="30" />
              <span style="margin-left: 0.5em; vertical-align: middle" class="image-text">{{
                slotProps.data.country.name
              }}</span>
            </template>
          </Column>
          <Column header="代表" :sortable="true" sort-field="representative.name" filter-field="representative.name">
            <template #body="slotProps">
              <img
                :alt="slotProps.data.representative.name"
                :src="$publicUrl('resource/demo/images/avatar/' + slotProps.data.representative.image)"
                width="32"
                style="vertical-align: middle" />
              <span style="margin-left: 0.5em; vertical-align: middle" class="image-text">{{
                slotProps.data.representative.name
              }}</span>
            </template>
          </Column>
          <Column field="date" header="日期" :sortable="true">
            <template #body="slotProps">
              <span>{{ slotProps.data.date }}</span>
            </template>
          </Column>
          <Column field="status" header="状态" :sortable="true">
            <template #body="slotProps">
              <span :class="'customer-badge status-' + slotProps.data.status">{{ slotProps.data.status }}</span>
            </template>
          </Column>
          <Column field="activity" header="活动" :sortable="true">
            <template #body="slotProps">
              <ProgressBar :value="slotProps.data.activity" :show-value="false" />
            </template>
          </Column>
          <Column header-style="width: 8rem; text-align: center" body-style="text-align: center; overflow: visible">
            <template #body>
              <Button type="button" icon="pi pi-cog" class="p-button-secondary" />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <h4>自定义样式</h4>
        <p>
          带网格线的可滚动表格（<mark>.p-datatable-gridlines</mark>），条纹行（<mark>.p-datatable-striped</mark>）和较小的填充符（<mark>p-datatable-sm</mark>）。
        </p>
        <DataTable
          :selection.sync="selectedCustomers2"
          :value="customer2"
          :paginator="true"
          class="p-datatable-striped p-datatable-sm p-datatable-gridlines p-datatable-customers"
          :rows="10"
          data-key="id"
          :row-hover="true"
          :filters="filters2"
          :loading="loading2">
          <template #header>
            <div class="table-header">
              客户
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters2['global']" placeholder="Search" />
              </span>
            </div>
          </template>

          <template #empty> 无数据。 </template>
          <template #loading> 正加载数据，请稍等... </template>

          <Column field="name" header="名称" :sortable="true">
            <template #body="slotProps">
              {{ slotProps.data.name }}
            </template>
          </Column>
          <Column header="国家" :sortable="true" sort-field="country.name" filter-field="country.name">
            <template #body="slotProps">
              <span :class="'flag flag-' + slotProps.data.country.code" style="width: 30px; height: 20px" />
              <span style="vertical-align: middle; margin-left: 0.5em">{{ slotProps.data.country.name }}</span>
            </template>
          </Column>
          <Column header="代表" :sortable="true" sort-field="representative.name" filter-field="representative.name">
            <template #body="slotProps">
              <img
                :alt="slotProps.data.representative.name"
                :src="$publicUrl('resource/demo/images/avatar/' + slotProps.data.representative.image)"
                width="32"
                style="vertical-align: middle" />
              <span style="vertical-align: middle; margin-left: 0.5em">{{ slotProps.data.representative.name }}</span>
            </template>
          </Column>
          <Column field="date" header="加入日期" :sortable="true" />
          <Column field="status" header="状态" :sortable="true">
            <template #body="slotProps">
              <span :class="'customer-badge status-' + slotProps.data.status">{{ slotProps.data.status }}</span>
            </template>
          </Column>
          <Column field="activity" header="活动" :sortable="true">
            <template #body="slotProps">
              <ProgressBar :value="slotProps.data.activity" :show-value="false" />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h4>行展开</h4>

        <Toast />
        <DataTable
          :expanded-rows.sync="expandedRows"
          :value="products"
          class="p-datatable-customers"
          data-key="id"
          @row-expand="onRowExpand"
          @row-collapse="onRowCollapse">
          <template #header>
            <div class="table-header-container">
              <Button icon="pi pi-plus" label="全部展开" class="mr-2" @click="expandAll" />
              <Button icon="pi pi-minus" label="全部折叠" @click="collapseAll" />
            </div>
          </template>
          <Column :expander="true" header-style="width: 3rem" />
          <Column field="name" header="名称" sortable />
          <Column header="图片">
            <template #body="slotProps">
              <img
                :src="$publicUrl('resource/demo/images/product/' + slotProps.data.image)"
                :alt="slotProps.data.image"
                class="product-image" />
            </template>
          </Column>
          <Column field="price" header="价格" sortable>
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column field="category" header="分类" sortable />
          <Column field="rating" header="评分" sortable>
            <template #body="slotProps">
              <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
            </template>
          </Column>
          <Column field="inventoryStatus" header="状态" sortable>
            <template #body="slotProps">
              <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{
                slotProps.data.inventoryStatus
              }}</span>
            </template>
          </Column>
          <template #expansion="slotProps">
            <div class="orders-subtable">
              <h5>{{ slotProps.data.name }} 订单</h5>
              <DataTable :value="slotProps.data.orders">
                <Column field="id" header="Id" sortable />
                <Column field="customer" header="客户" sortable />
                <Column field="date" header="日期" sortable />
                <Column field="amount" header="金额" sortable>
                  <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.amount) }}
                  </template>
                </Column>
                <Column field="status" header="状态" sortable>
                  <template #body="slotProps">
                    <span :class="'order-badge order-' + slotProps.data.status.toLowerCase()">{{
                      slotProps.data.status
                    }}</span>
                  </template>
                </Column>
                <Column header-style="width:4rem">
                  <template #body>
                    <Button icon="pi pi-search" />
                  </template>
                </Column>
              </DataTable>
            </div>
          </template>
        </DataTable>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h4>行组</h4>
        <DataTable
          :value="customer3"
          class="p-datatable-customers"
          row-group-mode="subheader"
          group-rows-by="representative.name"
          sort-mode="single"
          sort-field="representative.name"
          :sort-order="1">
          <Column field="representative.name" header="代表" />
          <Column field="name" header="名称" />
          <Column field="country" header="国家">
            <template #body="slotProps">
              <img
                :src="$publicUrl('resource/demo/flags/flag_placeholder.png')"
                :class="'flag flag-' + slotProps.data.country.code"
                width="30" />
              <span style="margin-left: 0.5em; vertical-align: middle" class="image-text">{{
                slotProps.data.country.name
              }}</span>
            </template>
          </Column>
          <Column field="company" header="公司" />
          <Column field="status" header="状态">
            <template #body="slotProps">
              <span :class="'customer-badge status-' + slotProps.data.status">{{ slotProps.data.status }}</span>
            </template>
          </Column>
          <Column field="date" header="日期" />
          <template #groupheader="slotProps">
            <img
              :alt="slotProps.data.representative.name"
              :src="$publicUrl('resource/demo/images/avatar/' + slotProps.data.representative.image)"
              width="32"
              style="vertical-align: middle" />
            <span style="margin-left: 0.5em; vertical-align: middle" class="image-text">
              {{ slotProps.data.representative.name }}
            </span>
          </template>
          <template #groupfooter="slotProps">
            <td colspan="4" style="text-align: right">总计</td>
            <td>
              {{ calculateCustomerTotal(slotProps.data.representative.name) }}
            </td>
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from '../api/CustomerService'
import ProductService from '../api/ProductService'

export default {
  data() {
    return {
      customer1: null,
      customer2: null,
      customer3: null,
      selectedCustomers1: null,
      selectedCustomers2: null,
      filters1: {},
      filters2: {},
      loading1: true,
      loading2: true,
      products: null,
      expandedRows: []
    }
  },
  customerService: null,
  productService: null,
  created() {
    this.customerService = new CustomerService()
    this.productService = new ProductService()
  },
  mounted() {
    this.productService
      .getProductsWithOrdersSmall()
      .then((data) => (this.products = data))
    this.customerService
      .getCustomersMedium()
      .then((data) => (this.customer1 = data))
    this.customerService
      .getCustomersLarge()
      .then((data) => (this.customer2 = data))
    this.customerService
      .getCustomersMedium()
      .then((data) => (this.customer3 = data))
    this.loading1 = false
    this.loading2 = false
  },
  methods: {
    onRowExpand(event) {
      this.$toast.add({
        severity: 'info',
        summary: 'Product Expanded',
        detail: event.data.name,
        life: 3000
      })
    },
    onRowCollapse(event) {
      this.$toast.add({
        severity: 'success',
        summary: 'Product Collapsed',
        detail: event.data.name,
        life: 3000
      })
    },
    expandAll() {
      this.expandedRows = this.products.filter((p) => p.id)
      this.$toast.add({
        severity: 'success',
        summary: 'All Rows Expanded',
        life: 3000
      })
    },
    collapseAll() {
      this.expandedRows = null
      this.$toast.add({
        severity: 'success',
        summary: 'All Rows Collapsed',
        life: 3000
      })
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    },
    calculateCustomerTotal(name) {
      let total = 0

      if (this.customer3) {
        for (const customer of this.customer3) {
          if (customer.representative.name === name) {
            total++
          }
        }
      }

      return total
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .p-progressbar {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    background-color: #607d8b;
  }
}

.p-datatable .p-column-filter {
  display: none;
}

.table-header {
  display: flex;
  justify-content: space-between;
}

::v-deep .p-datatable.p-datatable-customers {
  .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
  }

  .p-paginator {
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    text-align: left;
  }

  .p-datatable-tbody > tr > td {
    cursor: auto;
  }

  .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
  }
}

/* Responsive */
.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
  display: none;
}

.customer-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;

  &.status-合格 {
    background: #c8e6c9;
    color: #256029;
  }

  &.status-不合格 {
    background: #ffcdd2;
    color: #c63737;
  }

  &.status-谈判 {
    background: #feedaf;
    color: #8a5340;
  }

  &.status-新建 {
    background: #b3e5fc;
    color: #23547b;
  }

  &.status-更新 {
    background: #eccfff;
    color: #694382;
  }

  &.status-提案 {
    background: #ffd8b2;
    color: #805b36;
  }
}

.p-progressbar-value.ui-widget-header {
  background: #607d8b;
}

@media (max-width: 640px) {
  .p-progressbar {
    margin-top: 0.5rem;
  }
}

.product-image {
  width: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.orders-subtable {
  padding: 1rem;
}

.product-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;

  &.status-instock {
    background: #c8e6c9;
    color: #256029;
  }

  &.status-outofstock {
    background: #ffcdd2;
    color: #c63737;
  }

  &.status-lowstock {
    background: #feedaf;
    color: #8a5340;
  }
}

.order-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;

  &.order-delivered {
    background: #c8e6c9;
    color: #256029;
  }

  &.order-cancelled {
    background: #ffcdd2;
    color: #c63737;
  }

  &.order-pending {
    background: #feedaf;
    color: #8a5340;
  }

  &.order-returned {
    background: #eccfff;
    color: #694382;
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
        border-bottom: 1px solid var(--layer-2);

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
}
</style>
