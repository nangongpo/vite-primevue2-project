<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>DataView 数据视图</h5>
        <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sort-order="sortOrder"
          :sort-field="sortField">
          <template #header>
            <div class="grid p-nogutter">
              <div class="col-6" style="text-align: left">
                <Dropdown v-model="sortKey" :options="sortOptions" option-label="label" placeholder="按价格排序"
                  @change="onSortChange($event)" />
              </div>
              <div class="col-6" style="text-align: right">
                <DataViewLayoutOptions v-model="layout" />
              </div>
            </div>
          </template>

          <template #list="slotProps">
            <div class="col-12">
              <div class="product-list-item">
                <img :src="$publicUrl('resource/demo/images/product/' + slotProps.data.image)" :alt="slotProps.data.name">
                <div class="product-list-detail">
                  <div class="product-name">
                    {{ slotProps.data.name }}
                  </div>
                  <div class="product-description">
                    {{ slotProps.data.description }}
                  </div>
                  <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
                  <i class="pi pi-tag product-category-icon" /><span class="product-category">{{ slotProps.data.category
                    }}</span>
                </div>
                <div class="product-list-action">
                  <span class="product-price">${{ slotProps.data.price }}</span>
                  <Button icon="pi pi-shopping-cart" label="Add to Cart"
                    :disabled="slotProps.data.inventoryStatus === '缺货'" />
                  <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                </div>
              </div>
            </div>
          </template>

          <template #grid="slotProps">
            <div class="col-12 md:col-4">
              <div class="product-grid-item card">
                <div class="product-grid-item-top">
                  <div>
                    <i class="pi pi-tag product-category-icon" />
                    <span class="product-category">{{ slotProps.data.category }}</span>
                  </div>
                  <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                </div>
                <div class="product-grid-item-content">
                  <img :src="$publicUrl('resource/demo/images/product/' + slotProps.data.image)" :alt="slotProps.data.name">
                  <div class="product-name">
                    {{ slotProps.data.name }}
                  </div>
                  <div class="product-description">
                    {{ slotProps.data.description }}
                  </div>
                  <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
                </div>
                <div class="product-grid-item-bottom">
                  <span class="product-price">${{ slotProps.data.price }}</span>
                  <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === '缺货'" />
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>

    <div class="col-12 lg:col-8">
      <div class="card">
        <h5>PickList 穿梭框</h5>
        <PickList v-model="picklistValue" data-key="code">
          <template #sourceHeader>
            可选
          </template>
          <template #targetHeader>
            已选
          </template>
          <template #item="slotProps">
            <div>{{ slotProps.item.name }}</div>
          </template>
        </PickList>
      </div>
    </div>

    <div class="col-12 lg:col-4">
      <div class="card">
        <h5>OrderList 排序列表</h5>
        <OrderList v-model="orderlistValue" list-style="height:250px" data-key="code" class="p-orderlist-responsive"
          :rows="10">
          <template #header>
            城市
          </template>
          <template #item="slotProps">
            <div>{{ slotProps.item.name }}</div>
          </template>
        </OrderList>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '../api/ProductService'

export default {
  data() {
    return {
      picklistValue: [[
        { name: '旧金山', code: 'SF' },
        { name: '伦敦', code: 'LDN' },
        { name: '巴黎', code: 'PRS' },
        { name: '伊斯坦布尔', code: 'IST' },
        { name: '柏林', code: 'BRL' },
        { name: '巴塞罗那', code: 'BRC' },
        { name: '罗马', code: 'RM' }
      ], []],
      orderlistValue: [
        { name: '旧金山', code: 'SF' },
        { name: '伦敦', code: 'LDN' },
        { name: '巴黎', code: 'PRS' },
        { name: '伊斯坦布尔', code: 'IST' },
        { name: '柏林', code: 'BRL' },
        { name: '巴塞罗那', code: 'BRC' },
        { name: '罗马', code: 'RM' }
      ],
      dataviewValue: null,
      layout: 'grid',
      sortKey: null,
      sortOrder: null,
      sortField: null,
      sortOptions: [
        { label: '从高到低', value: '!price' },
        { label: '从低到告', value: 'price' }
      ]
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()
  },
  mounted() {
    this.productService.getProducts().then(data => (this.dataviewValue = data))
  },
  methods: {
    onSortChange(event) {
      const value = event.value.value
      const sortValue = event.value

      if (value.indexOf('!') === 0) {
        this.sortOrder = -1
        this.sortField = value.substring(1, value.length)
        this.sortKey = sortValue
      } else {
        this.sortOrder = 1
        this.sortField = value
        this.sortKey = sortValue
      }
    }
  }
}
</script>

<style scoped lang="scss">
.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: .5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

::v-deep .product-list-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 150px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }

  .product-list-detail {
    flex: 1 1 0;
    -ms-flex: 1 1 0px;
  }

  .p-rating {
    margin: 0 0 .5rem 0;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5rem;
    align-self: flex-end;
  }

  .product-list-action {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: .5rem;
  }

}

.product-badge {
  border-radius: 2px;
  padding: .25em .5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: .3px;

  &.status-有现货 {
    background: #C8E6C9;
    color: #256029;
  }

  &.status-缺货 {
    background: #FFCDD2;
    color: #C63737;
  }

  &.status-低库存 {
    background: #FEEDAF;
    color: #8A5340;
  }
}

::v-deep .product-grid-item {
  margin: .5em;
  border: 1px solid var(--surface-d);

  .product-grid-item-top,
  .product-grid-item-bottom {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  img {
    width: 75%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
  ::v-deep .product-list-item {
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;

    img {
      width: 75%;
      margin: 2rem 0;
    }

    .product-list-detail {
      text-align: center;
    }

    .product-price {
      align-self: center;
    }

    .product-list-action {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .product-list-action {
      margin-top: 2rem;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
