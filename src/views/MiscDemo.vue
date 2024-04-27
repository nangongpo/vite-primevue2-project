<!-- eslint-disable semi -->
<template>
  <div>
    <h4>Avatar 头像</h4>
    <div class="grid">
      <div class="col-12 md:col-4">
        <div class="card">
          <h5>标签</h5>
          <Avatar label="P" class="mr-2" size="xlarge" />
          <Avatar
            label="V"
            class="mr-2"
            size="large"
            style="background-color: #2196f3; color: #ffffff"
          />
          <Avatar
            label="U"
            class="mr-2"
            style="background-color: #9c27b0; color: #ffffff"
          />
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>标签 - 圆形</h5>
          <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
          <Avatar
            label="V"
            class="mr-2"
            size="large"
            style="background-color: #2196f3; color: #ffffff"
            shape="circle"
          />
          <Avatar
            label="U"
            class="mr-2"
            style="background-color: #9c27b0; color: #ffffff"
            shape="circle"
          />
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>标签 - 徽章</h5>
          <Avatar
            label="U"
            size="xlarge"
            style="background-color: #4caf4f; color: #ffffff"
            v-badge="4"
          />
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-12 md:col-4">
        <div class="card">
          <h5>图标</h5>
          <Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
          <Avatar
            icon="pi pi-user"
            class="mr-2"
            size="large"
            style="background-color: #2196f3; color: #ffffff"
          />
          <Avatar
            icon="pi pi-user"
            class="mr-2"
            style="background-color: #9c27b0; color: #ffffff"
          />
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>图标 - 圆形</h5>
          <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
          <Avatar
            icon="pi pi-user"
            class="mr-2"
            size="large"
            style="background-color: #2196f3; color: #ffffff"
            shape="circle"
          />
          <Avatar
            icon="pi pi-user"
            class="mr-2"
            style="background-color: #9c27b0; color: #ffffff"
            shape="circle"
          />
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>图标 - 徽章</h5>
          <Avatar icon="pi pi-user" size="xlarge" v-badge="4" />
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-12 md:col-4">
        <div class="card">
          <h5>图片</h5>
          <Avatar
            :image="$publicUrl('resource/demo/images/avatar/amyelsner.png')"
            class="mr-2"
            size="xlarge"
            shape="circle"
          />
          <Avatar
            :image="$publicUrl('resource/demo/images/avatar/asiyajavayant.png')"
            class="mr-2"
            size="large"
            shape="circle"
          />
          <Avatar
            :image="$publicUrl('resource/demo/images/avatar/onyamalimba.png')"
            class="mr-2"
            shape="circle"
          />
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>头像群组</h5>
          <AvatarGroup class="mb-3">
            <Avatar
              :image="$publicUrl('resource/demo/images/avatar/amyelsner.png')"
              size="large"
              shape="circle"
            />
            <Avatar
              :image="
                $publicUrl('resource/demo/images/avatar/asiyajavayant.png')
              "
              size="large"
              shape="circle"
            />
            <Avatar
              :image="$publicUrl('resource/demo/images/avatar/onyamalimba.png')"
              size="large"
              shape="circle"
            />
            <Avatar
              :image="$publicUrl('resource/demo/images/avatar/ionibowcher.png')"
              size="large"
              shape="circle"
            />
            <Avatar
              :image="$publicUrl('resource/demo/images/avatar/xuxuefeng.png')"
              size="large"
              shape="circle"
            />
            <Avatar
              label="+2"
              shape="circle"
              size="large"
              style="background-color: #9c27b0; color: #ffffff"
            />
          </AvatarGroup>
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>图片 - 徽章</h5>
          <Avatar
            :image="$publicUrl('resource/demo/images/organization/walter.jpg')"
            size="xlarge"
            v-badge.danger="4"
          />
        </div>
      </div>
    </div>

    <h4>Badge 徽章</h4>
    <div class="card">
      <h5>数字</h5>
      <Badge value="2" class="mr-2"></Badge>
      <Badge value="8" severity="success" class="mr-2"></Badge>
      <Badge value="4" severity="info" class="mr-2"></Badge>
      <Badge value="12" severity="warning" class="mr-2"></Badge>
      <Badge value="3" severity="danger"></Badge>

      <h5 class="mb-4">角标</h5>
      <i
        class="pi pi-bell mr-4 p-text-secondary"
        style="font-size: 2rem"
        v-badge="2"
      ></i>
      <i
        class="pi pi-calendar mr-4 p-text-secondary"
        style="font-size: 2rem"
        v-badge.danger="'10+'"
      ></i>
      <i
        class="pi pi-envelope p-text-secondary"
        style="font-size: 2rem"
        v-badge.danger
      ></i>

      <h5>按钮徽章</h5>
      <Button type="button" label="Emails" badge="8" class="mr-2" />
      <Button
        type="button"
        label="Messages"
        icon="pi pi-users"
        class="p-button-warning"
        badge="8"
        badgeClass="p-badge-danger"
      />

      <h5>尺寸</h5>
      <Badge value="2" class="mr-2"></Badge>
      <Badge value="4" class="mr-2" size="large" severity="warning"></Badge>
      <Badge value="6" size="xlarge" severity="success"></Badge>
    </div>

    <h4>Chip 碎片</h4>
    <div class="card">
      <h5>基础</h5>
      <div class="flex align-items-center">
        <Chip label="Action" class="mr-2" />
        <Chip label="Comedy" class="mr-2" />
        <Chip label="Mystery" class="mr-2" />
        <Chip label="Thriller" removable />
      </div>

      <h5>图标</h5>
      <div class="flex align-items-center">
        <Chip label="Apple" icon="pi pi-apple" class="mr-2" />
        <Chip label="Facebook" icon="pi pi-facebook" class="mr-2" />
        <Chip label="Google" icon="pi pi-google" class="mr-2" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
      </div>

      <h5>图片</h5>
      <div class="flex align-items-center">
        <Chip
          label="Amy Elsner"
          :image="$publicUrl('resource/demo/images/avatar/amyelsner.png')"
          class="mr-2"
        />
        <Chip
          label="Asiya Javayant"
          :image="$publicUrl('resource/demo/images/avatar/asiyajavayant.png')"
          class="mr-2"
        />
        <Chip
          label="Onyama Limba"
          :image="$publicUrl('resource/demo/images/avatar/onyamalimba.png')"
          class="mr-2"
        />
        <Chip
          label="Xuxue Feng"
          :image="$publicUrl('resource/demo/images/avatar/xuxuefeng.png')"
          removable
        />
      </div>

      <h5>自定义样式</h5>
      <div class="flex align-items-center">
        <Chip label="Action" class="mr-2 custom-chip" />
        <Chip label="Apple" icon="pi pi-apple" class="mr-2 custom-chip" />
        <Chip
          label="Onyama Limba"
          :image="$publicUrl('resource/demo/images/avatar/onyamalimba.png')"
          class="mr-2 custom-chip"
        />
        <Chip
          label="Xuxue Feng"
          :image="$publicUrl('resource/demo/images/avatar/xuxuefeng.png')"
          class="custom-chip"
          removable
        />
      </div>
    </div>

    <h4>BlockUI 锁屏</h4>
    <div class="card">
      <h5>全局</h5>
      <BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>

      <Button type="button" label="锁屏" @click="blockDocument()"></Button>

      <h5>Panel组件</h5>
      <Button type="button" label="锁屏" @click="blockPanel()"></Button>
      <Button type="button" label="解锁" @click="unblockPanel()"></Button>

      <BlockUI :blocked="blockedPanel">
        <Panel header="Godfather I" style="margin-top: 20px">
          <p>
            The story begins as Don Vito Corleone, the head of a New York Mafia
            family, oversees his daughter's wedding. His beloved son Michael has
            just come home from the war, but does not intend to become part of
            his father's business. Through Michael's life the nature of the
            family business becomes clear. The business of the family is just
            like the head of the family, kind and benevolent to those who give
            respect, but given to ruthless violence whenever anything stands
            against the good of the family.
          </p>
        </Panel>
      </BlockUI>
    </div>

    <h4>Inplace 占位</h4>
    <div class="card">
      <h3>输入框</h3>
      <Inplace :closable="true">
        <template #display>
          {{ inplaceText || "点击可编辑" }}
        </template>
        <template #content>
          <InputText v-model="inplaceText" autoFocus />
        </template>
      </Inplace>

      <h3>图片</h3>
      <Inplace>
        <template #display>
          <span className="pi pi-search" style="vertical-align: middle"></span>
          <span style="margin-left: 0.5rem; vertical-align: middle">
            查看图片
          </span>
        </template>
        <template #content>
          <img :src="$publicUrl('resource/demo/images/nature/nature1.jpg')" />
        </template>
      </Inplace>

      <h3>数据懒加载</h3>
      <Inplace @open="loadData">
        <template #display> 查看数据 </template>
        <template #content>
          <DataTable :value="products">
            <Column field="code" header="代码"></Column>
            <Column field="name" header="名称"></Column>
            <Column field="category" header="类别"></Column>
            <Column field="quantity" header="数量"></Column>
          </DataTable>
        </template>
      </Inplace>
    </div>

    <h4>ScrollTop 滚动到顶部</h4>
    <div class="card">
      <h5>窗口</h5>
      <p>向下滚动页面以显示 ScrollTo 组件。</p>
      <ScrollTop />

      <h5>元素</h5>
      <ScrollPanel style="width: 250px; height: 200px">
        <p>
          话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
          官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
          簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
          开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
          官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
          簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
          开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
          话说大宋仁宗天子在位，嘉祐三年三月三日五更三点，天子驾坐紫宸殿，受百
          官朝贺。但见：祥云迷凤阁，瑞气罩龙楼。含烟御柳拂旌旗，带露宫花迎剑戟。天香影里，玉
          簪朱履聚丹墀；仙乐声中，绣袄锦衣扶御驾。珍珠帘卷，黄金殿上现金轝，凤羽扇
          开，白玉阶前停宝辇。隐隐净鞭三下响，层层文武两班齐。
        </p>
        <ScrollTop
          target="parent"
          :threshold="100"
          class="custom-scrolltop"
          icon="pi pi-arrow-up"
        />
      </ScrollPanel>
    </div>

    <h4>Skeleton 骨架屏</h4>
    <div class="card">
      <div class="grid formgrid">
        <div class="field col-12 md:col-6">
          <h5>矩形</h5>
          <Skeleton class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
          <Skeleton height="2rem" class="mb-2"></Skeleton>
          <Skeleton width="10rem" height="4rem"></Skeleton>
        </div>
        <div class="field col-12 md:col-6">
          <h5>倒角</h5>
          <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
          <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
        </div>
        <div class="field col-12 md:col-6">
          <h5 class="mt-3">方形</h5>
          <div class="flex align-items-end">
            <Skeleton size="2rem" class="mr-2"></Skeleton>
            <Skeleton size="3rem" class="mr-2"></Skeleton>
            <Skeleton size="4rem" class="mr-2"></Skeleton>
            <Skeleton size="5rem"></Skeleton>
          </div>
        </div>
        <div class="field col-12 md:col-6">
          <h5 class="mt-3">圆形</h5>
          <div class="flex align-items-end">
            <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
            <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <Skeleton shape="circle" size="5rem"></Skeleton>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="grid formgrid">
        <div class="field col-12 md:col-6 md:pr-6 pr-0">
          <h5>卡片</h5>
          <div class="custom-skeleton p-4">
            <div class="flex mb-3">
              <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div class="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
        </div>

        <div class="field col-12 md:col-6">
          <h5>列表</h5>
          <div class="custom-skeleton p-4">
            <ul class="m-0 p-0">
              <li class="mb-3">
                <div class="flex">
                  <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                  <div style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                  </div>
                </div>
              </li>
              <li class="mb-3">
                <div class="flex">
                  <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                  <div style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                  </div>
                </div>
              </li>
              <li class="mb-3">
                <div class="flex">
                  <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                  <div style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex">
                  <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                  <div style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h5>表格</h5>
      <DataTable :value="skeletonProducts">
        <Column field="code" header="代码">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="name" header="名称">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="category" header="类别">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="quantity" header="数量">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
      </DataTable>
    </div>

    <h4>ProgressBar 进度条</h4>
    <div class="card">
      <div class="grid">
        <div class="col">
          <ProgressBar :value="progressBarValue" />
        </div>
        <div class="col">
          <ProgressBar :value="50" :show-value="false" />
        </div>
      </div>
    </div>

    <h1>ProgressSpinner 旋转进度</h1>
    <div class="card">
      <h3>基础</h3>
      <ProgressSpinner />

      <h3>自定义</h3>
      <ProgressSpinner
        style="width: 50px; height: 50px"
        strokeWidth="8"
        fill="#EEEEEE"
        animationDuration=".5s"
      />
    </div>

    <h4>Ripple 波纹效果</h4>
    <div class="card-container flex">
      <div class="card primary-box p-ripple" v-ripple>默认</div>
      <div class="card styled-box-green p-ripple" v-ripple>绿色</div>
      <div class="card styled-box-orange p-ripple" v-ripple>橙色</div>
      <div class="card styled-box-purple p-ripple" v-ripple>紫色</div>
    </div>

    <h4>StyleClass 样式类</h4>
    <div class="card">
      <h5>切换Class</h5>
      <Button
        label="切换 p-disabled"
        v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }"
      />
      <InputText class="block mt-3" />

      <h5>动画</h5>
      <Button
        label="显示"
        class="mr-2"
        v-styleclass="{
          selector: '.box',
          enterClass: 'hidden',
          enterActiveClass: 'my-fadein',
        }"
      />
      <Button
        label="隐藏"
        v-styleclass="{
          selector: '.box',
          leaveActiveClass: 'my-fadeout',
          leaveToClass: 'hidden',
        }"
      />
      <div class="box hidden">内容</div>
    </div>

    <h4>Tag 标签</h4>
    <div class="card">
      <div class="badges">
        <Tag class="mr-2" value="常规"></Tag>
        <Tag class="mr-2" severity="success" value="成功"></Tag>
        <Tag class="mr-2" severity="info" value="信息"></Tag>
        <Tag class="mr-2" severity="warning" value="警告"></Tag>
        <Tag severity="danger" value="危险"></Tag>
      </div>

      <h5>药片</h5>
      <Tag class="mr-2" value="常规" rounded></Tag>
      <Tag class="mr-2" severity="success" value="成功" rounded></Tag>
      <Tag class="mr-2" severity="info" value="信息" rounded></Tag>
      <Tag class="mr-2" severity="warning" value="警告" rounded></Tag>
      <Tag severity="danger" value="危险" rounded></Tag>

      <h5>图标</h5>
      <Tag class="mr-2" icon="pi pi-user" value="常规"></Tag>
      <Tag
        class="mr-2"
        icon="pi pi-check"
        severity="success"
        value="成功"
      ></Tag>
      <Tag
        class="mr-2"
        icon="pi pi-info-circle"
        severity="info"
        value="信息"
      ></Tag>
      <Tag
        class="mr-2"
        icon="pi pi-exclamation-triangle"
        severity="warning"
        value="警告"
      ></Tag>
      <Tag icon="pi pi-times" severity="danger" value="危险"></Tag>
    </div>

    <h4>Terminal 终端</h4>
    <div class="card">
      <p>
        输入“date”以显示当前日期，输入“greet{0}”以显示消息，输入“random”以获取随机数。
      </p>
      <Terminal
        welcomeMessage="欢迎使用PrimeVue"
        prompt="primevue $"
        class="dark-demo-terminal"
      />
    </div>
  </div>
</template>

<script>
import ProductService from '@/api/ProductService'
import TerminalService from 'primevue2/terminalservice'

export default {
  data() {
    return {
      inplaceText: '',
      progressBarValue: 0,
      blockedPanel: false,
      blockedDocument: false,
      products: [],
      skeletonProducts: new Array(5),
    }
  },
  interval: null,
  productService: null,
  created() {
    this.productService = new ProductService()
  },
  mounted() {
    this.startProgress()
    TerminalService.on('command', this.commandHandler)
  },
  beforeDestroy() {
    this.endProgress()
    TerminalService.off('command', this.commandHandler)
  },
  methods: {
    blockDocument() {
      this.blockedDocument = true

      setTimeout(() => {
        this.blockedDocument = false
      }, 3000)
    },
    blockPanel() {
      this.blockedPanel = true
    },
    unblockPanel() {
      this.blockedPanel = false
    },
    loadData() {
      this.productService
        .getProductsSmall()
        .then((data) => (this.products = data))
    },
    startProgress() {
      this.interval = setInterval(() => {
        let newValue = this.progressBarValue + Math.floor(Math.random() * 10) + 1
        if (newValue >= 100) {
          newValue = 100
        }
        this.progressBarValue = newValue
      }, 2000)
    },
    endProgress() {
      clearInterval(this.interval)
      this.interval = null
    },
    commandHandler(text) {
      let response
      let argsIndex = text.indexOf(' ')
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text

      switch (command) {
      case 'date':
        response = '今天是 ' + new Date().toLocaleDateString()
        break

      case 'greet':
        response = '你好 ' + text.substring(argsIndex + 1)
        break

      case 'random':
        response = Math.floor(Math.random() * 100)
        break

      default:
        response = '未知指令: ' + command
      }

      TerminalService.emit('response', response)
    },
  },
}
</script>

<style lang="scss" scoped>
.p-button {
  margin-right: 0.5rem;
}

:deep(.custom-scrolltop) {
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  background-color: var(--primary-color);
  &:hover {
    background-color: var(--primary-color);
  }
  .p-scrolltop-icon {
    font-size: 1rem;
    color: var(--primary-color-text);
  }
}

.custom-skeleton {
  border: 1px solid var(--surface-border);
  border-radius: 4px;
  ul {
    list-style: none;
  }
}

:deep(.card-container) {
  .card {
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    user-select: none;
    padding: 0;

    &.primary-box {
      background-color: var(--primary-color);
      padding: 0;
      color: var(--primary-color-text);
    }

    &.styled-box-green {
      .p-ink {
        background: rgba(#4baf50, 0.3);
      }
    }

    &.styled-box-orange {
      .p-ink {
        background: rgba(#ffc106, 0.3);
      }
    }

    &.styled-box-purple {
      .p-ink {
        background: rgba(#9c27b0, 0.3);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.box {
  background-color: #22c55e;
  color: #ffffff;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

@keyframes my-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes my-fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.my-fadein {
  animation: my-fadein 150ms linear;
}

.my-fadeout {
  animation: my-fadeout 150ms linear;
}

p {
  margin-top: 0;
}

:deep(.dark-demo-terminal) {
  background-color: #212121;
  color: #ffffff;

  .p-terminal-command {
    color: #80cbc4;
  }

  .p-terminal-prompt {
    color: #ffd54f;
  }

  .p-terminal-response {
    color: #9fa8da;
  }
}
</style>
