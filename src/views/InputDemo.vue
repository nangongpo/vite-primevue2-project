<template>
  <div class="grid p-fluid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5>输入框</h5>
        <div class="grid formgrid">
          <div class="col-12 mb-2 lg:col-4">
            <InputText
              type="text"
              placeholder="默认"
            />
          </div>
          <div class="col-12 mb-2 lg:col-4">
            <InputText
              type="text"
              placeholder="禁用"
              :disabled="true"
            />
          </div>
          <div class="col-12 mb-2 lg:col-4">
            <InputText
              type="text"
              placeholder="无效"
              class="p-invalid"
            />
          </div>
        </div>

        <h5>带图标 Icons</h5>
        <div class="grid formgrid">
          <div class="col-12 mb-2 lg:col-4">
            <span class="p-input-icon-left">
              <i class="pi pi-user" />
              <InputText
                type="text"
                placeholder="用户名"
              />
            </span>
          </div>
          <div class="col-12 mb-2 lg:col-4">
            <span class="p-input-icon-right">
              <InputText
                type="text"
                placeholder="检索"
              />
              <i class="pi pi-search" />
            </span>
          </div>
          <div class="col-12 mb-2 lg:col-4">
            <span class="p-input-icon-left p-input-icon-right">
              <i class="pi pi-user" />
              <InputText
                type="text"
                placeholder="检索"
              />
              <i class="pi pi-search" />
            </span>
          </div>
        </div>

        <h5>浮动标签</h5>
        <span class="p-float-label">
          <InputText
            id="username"
            v-model="floatValue"
            type="text"
          />
          <label for="username">用户名</label>
        </span>

        <h5>文本框</h5>
        <Textarea
          placeholder="请输入"
          :auto-resize="true"
          rows="3"
          cols="30"
        />

        <h5>自动完成</h5>
        <AutoComplete
          id="dd"
          v-model="selectedAutoValue"
          placeholder="检索"
          :dropdown="true"
          :multiple="true"
          :suggestions="autoFilteredValue"
          field="name"
          @complete="searchCountry($event)"
        />

        <h5>日期选择</h5>
        <Calendar
          v-model="calendarValue"
          :show-icon="true"
          :show-button-bar="true"
        />

        <h5>计数器</h5>
        <InputNumber
          v-model="inputNumberValue"
          show-buttons
          mode="decimal"
        />

        <h5>标签输入框</h5>
        <Chips v-model="chipsValue" />
      </div>

      <div class="card">
        <h5>滑块</h5>
        <InputText v-model.number="sliderValue" />
        <Slider v-model="sliderValue" />

        <h5>评分</h5>
        <Rating v-model="ratingValue" />

        <h5>颜色选择器</h5>
        <ColorPicker
          v-model="colorValue"
          style="width: 2rem"
        />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>单选</h5>
        <div class="grid">
          <div class="col-12 md:col-4">
            <div class="field-radiobutton">
              <RadioButton
                id="option1"
                v-model="radioValue"
                name="option"
                value="Chicago"
              />
              <label for="option1">芝加哥</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-radiobutton">
              <RadioButton
                id="option2"
                v-model="radioValue"
                name="option"
                value="Los Angeles"
              />
              <label for="option2">洛杉矶</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-radiobutton">
              <RadioButton
                id="option3"
                v-model="radioValue"
                name="option"
                value="New York"
              />
              <label for="option3">纽约</label>
            </div>
          </div>
        </div>

        <h5 style="margin-top: 0">
          多选
        </h5>
        <div class="grid">
          <div class="col-12 md:col-4">
            <div class="field-checkbox">
              <Checkbox
                id="checkOption1"
                v-model="checkboxValue"
                name="option"
                value="Chicago"
              />
              <label for="checkOption1">芝加哥</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-checkbox">
              <Checkbox
                id="checkOption2"
                v-model="checkboxValue"
                name="option"
                value="Los Angeles"
              />
              <label for="checkOption2">洛杉矶</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-checkbox">
              <Checkbox
                id="checkOption3"
                v-model="checkboxValue"
                name="option"
                value="New York"
              />
              <label for="checkOption3">纽约</label>
            </div>
          </div>
        </div>

        <h5 style="margin-top: 0">
          开关
        </h5>
        <InputSwitch v-model="switchValue" />
      </div>

      <div class="card">
        <h5>列表框</h5>
        <Listbox
          v-model="listboxValue"
          :options="listboxValues"
          option-label="name"
          :filter="true"
        />

        <h5>下拉菜单</h5>
        <Dropdown
          v-model="dropdownValue"
          :options="dropdownValues"
          option-label="name"
          placeholder="选择"
        />

        <h5>多选下拉菜单</h5>
        <MultiSelect
          v-model="multiselectValue"
          :options="multiselectValues"
          option-label="name"
          placeholder="选择国家"
          :filter="true"
          class="multiselect-custom"
        >
          <template #value="slotProps">
            <div
              v-for="option of slotProps.value"
              :key="option.code"
              class="country-item country-item-value"
            >
              <span :class="'flag flag-' + option.code.toLowerCase()" />
              <div>{{ option.name }}</div>
            </div>
            <template v-if="!slotProps.value || slotProps.value.length === 0">
              选择国家
            </template>
          </template>
          <template #option="slotProps">
            <div class="country-item">
              <span :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </MultiSelect>
      </div>

      <div class="card">
        <h5>切换按钮</h5>
        <ToggleButton
          v-model="toggleValue"
          on-label="是"
          off-label="否"
        />

        <h5>按钮选择组-单选</h5>
        <SelectButton
          v-model="selectButtonValue1"
          :options="selectButtonValues1"
          option-label="name"
        />

        <h5>按钮选择组 - 多选</h5>
        <SelectButton
          v-model="selectButtonValue2"
          :options="selectButtonValues2"
          option-label="name"
          :multiple="true"
        />
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>输入组</h5>
        <div class="grid p-fluid">
          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-user" />
              </span>
              <InputText placeholder="用户名" />
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon"><i class="pi pi-shopping-cart" /></span>
              <span class="p-inputgroup-addon"><i class="pi pi-globe" /></span>
              <InputText placeholder="价格" />
              <span class="p-inputgroup-addon">$</span>
              <span class="p-inputgroup-addon">.00</span>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <Button label="检索" />
              <InputText placeholder="关键词" />
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon p-inputgroup-addon-checkbox">
                <Checkbox
                  v-model="inputGroupValue"
                  :binary="true"
                />
              </span>
              <InputText placeholder="确定" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountryService from '../api/CountryService'
export default {
  data() {
    return {
      floatValue: null,
      autoValue: null,
      selectedAutoValue: null,
      autoFilteredValue: [],
      calendarValue: null,
      inputNumberValue: null,
      chipsValue: null,
      sliderValue: null,
      ratingValue: null,
      colorValue: '1976D2',
      radioValue: null,
      checkboxValue: [],
      switchValue: false,
      listboxValues: [
        { name: '纽约', code: 'NY' },
        { name: '罗马', code: 'RM' },
        { name: '伦敦', code: 'LDN' },
        { name: '伊斯坦布尔', code: 'IST' },
        { name: '巴黎', code: 'PRS' }
      ],
      listboxValue: null,
      dropdownValues: [
        { name: '纽约', code: 'NY' },
        { name: '罗马', code: 'RM' },
        { name: '伦敦', code: 'LDN' },
        { name: '伊斯坦布尔', code: 'IST' },
        { name: '巴黎', code: 'PRS' }
      ],
      dropdownValue: null,
      multiselectValue: null,
      multiselectValues: [
        { name: '澳大利亚', code: 'AU' },
        { name: '巴西', code: 'BR' },
        { name: '中国', code: 'CN' },
        { name: '埃及', code: 'EG' },
        { name: '法国', code: 'FR' },
        { name: '德国', code: 'DE' },
        { name: '印度', code: 'IN' },
        { name: '日本', code: 'JP' },
        { name: '西班牙', code: 'ES' },
        { name: '美国', code: 'US' }
      ],
      toggleValue: false,
      selectButtonValues1: [
        { name: '选项 1', code: 'O1' },
        { name: '选项 2', code: 'O2' },
        { name: '选项 3', code: 'O3' }
      ],
      selectButtonValue1: null,
      selectButtonValues2: [
        { name: '选项 1', code: 'O1' },
        { name: '选项 2', code: 'O2' },
        { name: '选项 3', code: 'O3' }
      ],
      selectButtonValue2: null,
      inputGroupValue: false
    }
  },
  countryService: null,
  created() {
    this.countryService = new CountryService()
  },
  mounted() {
    this.countryService.getCountries().then(data => (this.autoValue = data))
  },
  methods: {
    searchCountry(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.autoFilteredValue = [...this.autoValue]
        } else {
          this.autoFilteredValue = this.autoValue.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase())
          })
        }
      }, 250)
    }
  }
}
</script>

<style scoped lang="scss">
	.p-multiselect {
		min-width: 15rem;
	}

	.multiselect-custom {

		.p-multiselect-label:not(.p-placeholder) {
			padding-top: .25rem;
			padding-bottom: .25rem;
		}

		.country-item {
			display: flex;
			align-items: center;

			span.flag {
				width: 18px;
				height: 12px;
				margin-right: .5rem;
				margin-left: .5rem;
			}
		}

		.country-item-value {
			border-radius: 3px;
			display: inline-flex;
			margin-right: .5rem;
			background-color: var(--primary-color);
			color: var(--primary-color-text);
		}
	}
</style>
