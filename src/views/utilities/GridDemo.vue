<template>
  <div class="flexgrid-demo">
    <p>Grid是基于轻量级Flex的响应式布局实用程序，已针对手机，平板电脑和台式机进行了优化。</p>

    <h5>基本使用</h5>
    <div class="grid">
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          2
        </div>
      </div>
      <div class="col">
        <div class="box">
          3
        </div>
      </div>
    </div>

    <h5>动态</h5>
    <Button
      type="button"
      icon="pi pi-plus"
      title="Add Column"
      :disabled="columns.length === 20"
      style="margin-right: .5em"
      @click="addColumn"
    />
    <Button
      type="button"
      icon="pi pi-minus"
      title="Remove Column"
      :disabled="columns.length === 1"
      @click="removeColumn"
    />

    <div style="margin-top: .5em">
      <transition-group
        name="dynamic-box"
        tag="div"
        class="grid"
      >
        <div
          v-for="col of columns"
          :key="col"
          class="col"
        >
          <div class="box">
            {{ col }}
          </div>
        </div>
      </transition-group>
    </div>

    <h5>反转方向</h5>
    <div class="grid p-dir-rev">
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          2
        </div>
      </div>
      <div class="col">
        <div class="box">
          3
        </div>
      </div>
    </div>

    <h5>列布局</h5>
    <div class="grid p-dir-col">
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          2
        </div>
      </div>
      <div class="col">
        <div class="box">
          3
        </div>
      </div>
    </div>

    <h5>反转列布局</h5>
    <div class="grid p-dir-col-rev">
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          2
        </div>
      </div>
      <div class="col">
        <div class="box">
          3
        </div>
      </div>
    </div>

    <h5>12列网格布局</h5>
    <div class="grid">
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
      <div class="col">
        <div class="box">
          1
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-6">
        <div class="box">
          6
        </div>
      </div>
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-8">
        <div class="box">
          8
        </div>
      </div>
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
    </div>

    <h5>多行</h5>
    <div class="grid">
      <div class="col-6">
        <div class="box">
          6
        </div>
      </div>
      <div class="col-6">
        <div class="box">
          6
        </div>
      </div>
      <div class="col-6">
        <div class="box">
          6
        </div>
      </div>
      <div class="col-6">
        <div class="box">
          6
        </div>
      </div>
    </div>

    <h5>列固定宽度</h5>
    <div class="grid">
      <div
        class="col-fixed"
        style="width:100px"
      >
        <div class="box">
          100px
        </div>
      </div>
      <div class="col">
        <div class="box">
          auto
        </div>
      </div>
    </div>

    <h5>响应式</h5>
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3">
        <div class="box">
          col-12 md:col-6 lg:col-3
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="box">
          col-12 md:col-6 lg:col-3
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="box">
          col-12 md:col-6 lg:col-3
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="box">
          col-12 md:col-6 lg:col-3
        </div>
      </div>
    </div>

    <h5>水平对齐 - start</h5>
    <div class="grid p-justify-start">
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-1">
        <div class="box">
          1
        </div>
      </div>
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>水平对齐 - end</h5>
    <div class="grid p-justify-end">
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-1">
        <div class="box">
          1
        </div>
      </div>
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>水平对齐- Center</h5>
    <div class="grid p-justify-center">
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-1">
        <div class="box">
          1
        </div>
      </div>
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>水平对齐 - Between</h5>
    <div class="grid p-justify-between">
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-1">
        <div class="box">
          1
        </div>
      </div>
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>水平对齐 - Around</h5>
    <div class="grid p-justify-around">
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-1">
        <div class="box">
          1
        </div>
      </div>
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>水平对齐 - Even</h5>
    <div class="grid p-justify-even">
      <div class="col-2">
        <div class="box">
          2
        </div>
      </div>
      <div class="col-1">
        <div class="box">
          1
        </div>
      </div>
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>垂直对齐 - Start</h5>
    <div class="grid p-align-start vertical-container">
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>垂直对齐 - End</h5>
    <div class="grid p-align-end vertical-container">
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>垂直对齐 - Center</h5>
    <div class="grid p-align-center vertical-container">
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
      <div class="col">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>垂直对齐 - Stretch</h5>
    <div class="grid p-align-stretch vertical-container">
      <div class="col">
        <div class="box box-stretched">
          4
        </div>
      </div>
      <div class="col">
        <div class="box box-stretched">
          4
        </div>
      </div>
      <div class="col">
        <div class="box box-stretched">
          4
        </div>
      </div>
    </div>

    <h5>垂直对齐 - Per Column</h5>
    <div class="grid vertical-container">
      <div class="col col-align-start">
        <div class="box">
          4
        </div>
      </div>
      <div class="col col-align-center">
        <div class="box">
          4
        </div>
      </div>
      <div class="col col-align-end">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>分栏偏移</h5>
    <div class="grid">
      <div class="col-6 p-offset-3">
        <div class="box">
          6
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-4">
        <div class="box">
          4
        </div>
      </div>
      <div class="col-4 p-offset-4">
        <div class="box">
          4
        </div>
      </div>
    </div>

    <h5>嵌套 Nested</h5>
    <div class="grid nested-grid">
      <div class="col-8">
        <div class="grid">
          <div class="col-6">
            <div class="box">
              6
            </div>
          </div>
          <div class="col-6">
            <div class="box">
              6
            </div>
          </div>
          <div class="col-12">
            <div class="box">
              12
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="box box-stretched">
          4
        </div>
      </div>
    </div>

    <h5>面板 Panels</h5>
    <div class="grid">
      <div class="col">
        <Panel header="标题">
          <p>圣地亚哥是个在科希马尔海港附近独自驾驶小船捕鱼的老人。他 的面容消瘦而憔悴，脖颈上皱纹深陷，腮帮上还有些褐斑，那是太阳在热带海面上反射的光线所引起的良性皮肤癌变。由于两手经常拖拉挂着大鱼或其他重物的长长绳索，老人的手尤其是虎口处已经布满了勒痕与伤疤，仿佛是用刀刻下的。 他身上的一切都如同这双手，古老而斑驳，唯有眼睛，像海水一般清澈碧蓝的眼睛，透射出愉快而不肯轻易认输的光芒。</p>
        </Panel>
      </div>
      <div class="col">
        <Panel header="标题">
          <p>圣地亚哥是个在科希马尔海港附近独自驾驶小船捕鱼的老人。他 的面容消瘦而憔悴，脖颈上皱纹深陷，腮帮上还有些褐斑，那是太阳在热带海面上反射的光线所引起的良性皮肤癌变。由于两手经常拖拉挂着大鱼或其他重物的长长绳索，老人的手尤其是虎口处已经布满了勒痕与伤疤，仿佛是用刀刻下的。 他身上的一切都如同这双手，古老而斑驳，唯有眼睛，像海水一般清澈碧蓝的眼睛，透射出愉快而不肯轻易认输的光芒。</p>
        </Panel>
      </div>
      <div class="col">
        <Panel header="标题">
          <p>圣地亚哥是个在科希马尔海港附近独自驾驶小船捕鱼的老人。他 的面容消瘦而憔悴，脖颈上皱纹深陷，腮帮上还有些褐斑，那是太阳在热带海面上反射的光线所引起的良性皮肤癌变。由于两手经常拖拉挂着大鱼或其他重物的长长绳索，老人的手尤其是虎口处已经布满了勒痕与伤疤，仿佛是用刀刻下的。 他身上的一切都如同这双手，古老而斑驳，唯有眼睛，像海水一般清澈碧蓝的眼睛，透射出愉快而不肯轻易认输的光芒。</p>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridDemo',
  data() {
    return {
      columns: [0, 1, 2, 3, 4, 5]
    }
  },
  methods: {
    addColumn() {
      this.columns = [...this.columns, this.columns.length]
    },
    removeColumn() {
      this.columns.pop()
    }
  }
}
</script>

<style lang="scss">
	.flexgrid-demo {
		.box {
			background-color: var(--surface-e);
			text-align: center;
			padding-top: 1rem;
			padding-bottom: 1rem;
			border-radius: 4px;
			box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
		}

		.box-stretched {
			height: 100%;
		}

		.vertical-container {
			margin: 0;
			height: 200px;
			background: var(--surface-d);
			border-radius: 4px;
		}

		.nested-grid .col-4 {
			padding-bottom: 1rem;
		}

		.dynamic-box-enter-active, .dynamic-box-leave-active {
			transition: all .5s;
		}

		.dynamic-box-enter, .dynamic-box-leave-to {
			opacity: 0;
		}

		.dynamic-box-enter, .dynamic-box-leave-to {
			transform: translateX(30px);
		}

		p {
			margin: 0;
		}
	}
</style>
