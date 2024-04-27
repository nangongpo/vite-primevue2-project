<template>
  <div class="grid nested-grid dashboard">
    <div class="col-12 md:col-6 lg:col-3">
      <div class="grid overview-box overview-box-1">
        <div class="overview-box-title">
          <i class="pi pi-inbox" />
          <span>未读邮件</span>
        </div>
        <div class="overview-box-count">150</div>
        <div class="overview-box-stats">相比昨天减少12</div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="grid overview-box overview-box-2">
        <div class="overview-box-title">
          <i class="pi pi-map-marker" />
          <span>办理登记手续</span>
        </div>
        <div class="overview-box-count">532</div>
        <div class="overview-box-stats">相比昨天增加46</div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="grid overview-box overview-box-3">
        <div class="overview-box-title">
          <i class="pi pi-folder" />
          <span>档案</span>
        </div>
        <div class="overview-box-count">450</div>
        <div class="overview-box-stats">相比昨天增加30</div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="grid overview-box overview-box-4">
        <div class="overview-box-title">
          <i class="pi pi-user" />
          <span>用户</span>
        </div>
        <div class="overview-box-count">532</div>
        <div class="overview-box-stats">相比昨天增加350</div>
      </div>
    </div>

    <div class="col-12 lg:col-6 global-sales">
      <div class="card h-full">
        <h5>全球销量</h5>
        <table>
          <thead>
            <tr>
              <th />
              <th />
              <th />
              <th>总销售</th>
              <th>趋势</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  alt="Brazil Flag"
                  :src="$publicUrl('resource/layout/images/dashboard/flag-brazil.png')"
                  width="45"
                />
              </td>
              <td>巴西</td>
              <td>4234</td>
              <td>+35%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img
                  alt="China Flag"
                  :src="$publicUrl('resource/layout/images/dashboard/flag-china.png')"
                  width="45"
                />
              </td>
              <td>中国</td>
              <td>3214</td>
              <td>-25%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img
                  alt="Belgium Flag"
                  :src="$publicUrl('resource/layout/images/dashboard/flag-belgium.png')"
                  width="45"
                />
              </td>
              <td>比利时</td>
              <td>2842</td>
              <td>+28%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <img
                  alt="France Flag"
                  :src="$publicUrl('resource/layout/images/dashboard/flag-france.png')"
                  width="45"
                />
              </td>
              <td>法国</td>
              <td>1942</td>
              <td>+15%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-12 lg:col-6 product-statistics">
      <div class="card h-full">
        <h5>产品统计</h5>
        <table>
          <tbody>
            <tr>
              <td class="col-overview col-wait">
                <div>W</div>
              </td>
              <td class="col-status">
                <span class="status-time">最近更新: 12小时前</span>
                <span class="status-text">等待中</span>
              </td>
              <td class="col-numbers">
                <div>253 <span>发货</span></div>
                <div>584 <span>订单</span></div>
              </td>
            </tr>
            <tr>
              <td class="col-overview col-success">
                <div>S</div>
              </td>
              <td class="col-status">
                <span class="status-time">最近更新: 12小时前</span>
                <span class="status-text">成功完成</span>
              </td>
              <td class="col-numbers">
                <div>312 <span>发货</span></div>
                <div>409 <span>订单</span></div>
              </td>
            </tr>
            <tr>
              <td class="col-overview col-delay">
                <div>D</div>
              </td>
              <td class="col-status">
                <span class="status-time">最近更新: 6小时前</span>
                <span class="status-text">延迟</span>
              </td>
              <td class="col-numbers">
                <div>122 <span>发货</span></div>
                <div>341 <span>订单</span></div>
              </td>
            </tr>
            <tr>
              <td class="col-overview col-preorder">
                <div>P</div>
              </td>
              <td class="col-status">
                <span class="status-time">最近更新: 15小时前</span>
                <span class="status-text">预定</span>
              </td>
              <td class="col-numbers">
                <div>221 <span>发货</span></div>
                <div>332 <span>订单</span></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-12 lg:col-4">
      <div class="graph">
        <div class="grid">
          <div class="col-4">
            <span class="graph-title">访客数</span>
            <span class="graph-value">52003</span>
            <span class="graph-change">+32</span>
          </div>
          <div class="col-8">
            <img
              alt="Chart 1"
              :src="$publicUrl('resource/layout/images/dashboard/graph-1.svg')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="graph">
        <div class="grid">
          <div class="col-4">
            <span class="graph-title">注册数</span>
            <span class="graph-value">532</span>
            <span class="graph-change">+24792</span>
          </div>
          <div class="col-8">
            <img
              alt="Chart 2"
              :src="$publicUrl('resource/layout/images/dashboard/graph-2.svg')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="graph">
        <div class="grid">
          <div class="col-4">
            <span class="graph-title">销售额</span>
            <span class="graph-value">￥5521</span>
            <span class="graph-change">+243</span>
          </div>
          <div class="col-8">
            <img
              alt="Chart 3"
              :src="$publicUrl('resource/layout/images/dashboard/graph-3.svg')"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 md:col-6 lg:col-4 task-list">
      <div class="card h-full">
        <h5>任务</h5>
        <ul>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="reports" />
            <span class="task-name">销售报告</span>
            <i class="pi pi-briefcase" />
          </li>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="pay" />
            <span class="task-name">支付发票</span>
            <i class="pi pi-file" />
          </li>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="dinner" />
            <span class="task-name">与客户吃饭</span>
            <i class="pi pi-comments" />
          </li>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="meeting" />
            <span class="task-name">开会</span>
            <i class="pi pi-users" />
          </li>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="theme" />
            <span class="task-name">新主题</span>
            <i class="pi pi-palette" />
          </li>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="ticket" />
            <span class="task-name">发机票</span>
            <i class="pi pi-ticket" />
          </li>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="charts" />
            <span class="task-name">生成图表</span>
            <i class="pi pi-chart-bar" />
          </li>
          <li>
            <Checkbox v-model="tasksCheckbox" name="task" value="client" />
            <span class="task-name">致电客户</span>
            <i class="pi pi-mobile" />
          </li>
        </ul>
      </div>
    </div>

    <div class="col-12 md:col-6 lg:col-4 p-fluid contact-form">
      <div class="card h-full">
        <h5>联系我们</h5>
        <div class="grid">
          <div class="col-12">
            <Dropdown
              v-model="dropdownCity"
              :options="dropdownCities"
              option-label="name"
              placeholder="选择一个城市"
            />
          </div>
          <div class="col-12">
            <InputText type="text" placeholder="姓名" />
          </div>
          <div class="col-12">
            <InputText type="text" placeholder="年龄" />
          </div>
          <div class="col-12">
            <InputText type="text" placeholder="电话" />
          </div>
          <div class="col-12">
            <Button type="button" label="Send" icon="pi pi-check" />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 lg:col-4 contacts">
      <div class="card h-full">
        <h5>团队</h5>
        <ul>
          <li class="clearfix">
            <img
              alt="User"
              :src="$publicUrl('resource/layout/images/avatar.png')"
              width="45"
            />
            <div class="contact-info">
              <span class="name">麦迪逊·休斯（我）</span>
              <span class="location">jane@pn-manhattan.com</span>
            </div>
            <div class="contact-actions">
              <span class="connection-status online">在线</span>
              <i class="pi pi-fw pi-comment" />
              <i class="pi pi-fw pi-reply" />
            </div>
          </li>
          <li class="clearfix">
            <img
              alt="Contact 1"
              :src="$publicUrl('resource/layout/images/avatar1.png')"
              width="45"
            />
            <div class="contact-info">
              <span class="name">约书亚·威廉姆斯</span>
              <span class="location">joshua@pn-manhattan.com</span>
            </div>
            <div class="contact-actions">
              <span class="connection-status online">在线</span>
              <i class="pi pi-fw pi-comment" />
              <i class="pi pi-fw pi-reply" />
            </div>
          </li>
          <li class="clearfix">
            <img
              alt="Contact 2"
              :src="$publicUrl('resource/layout/images/avatar2.png')"
              width="45"
            />
            <div class="contact-info">
              <span class="name">艾米丽·克拉克</span>
              <span class="location">emily@pn-manhattan.com</span>
            </div>
            <div class="contact-actions">
              <span class="connection-status offline">离线</span>
              <i class="pi pi-fw pi-comment" />
              <i class="pi pi-fw pi-reply" />
            </div>
          </li>
          <li class="clearfix">
            <img
              alt="Contact 3"
              :src="$publicUrl('resource/layout/images/avatar3.png')"
              width="45"
            />
            <div class="contact-info">
              <span class="name">蒂姆·约翰逊</span>
              <span class="location">tim@pn-manhattan.com</span>
            </div>
            <div class="contact-actions">
              <span class="connection-status online">在线</span>
              <i class="pi pi-fw pi-comment" />
              <i class="pi pi-fw pi-reply" />
            </div>
          </li>
          <li class="clearfix">
            <img
              alt="Contact 4"
              :src="$publicUrl('resource/layout/images/avatar4.png')"
              width="45"
            />
            <div class="contact-info">
              <span class="name">大卫·斯塔克</span>
              <span class="location">kelly@pn-manhattan.com</span>
            </div>
            <div class="contact-actions">
              <span class="connection-status offline">离线</span>
              <i class="pi pi-fw pi-comment" />
              <i class="pi pi-fw pi-reply" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 lg:col-8 chat">
      <div class="grid">
        <div class="col-12">
          <div class="card">
            <h5>聊天</h5>
            <ul>
              <li class="clearfix message-from">
                <img
                  alt="Contact 2"
                  :src="$publicUrl('resource/layout/images/avatar2.png')"
                />
                <span>晚上一起吃饭吗？</span>
              </li>
              <li class="clearfix message-own">
                <img
                  alt="User"
                  :src="$publicUrl('resource/layout/images/avatar.png')"
                />
                <span>可以，请问去哪里</span>
              </li>
              <li class="clearfix message-from">
                <img
                  alt="Contact 2"
                  :src="$publicUrl('resource/layout/images/avatar2.png')"
                />
                <span>公司旁边的酒吧，我六点下班，然后我去接你？</span>
              </li>
              <li class="clearfix message-own">
                <img
                  alt="User"
                  :src="$publicUrl('resource/layout/images/avatar.png')"
                />
                <span>我突然想起，我还有一些事情要处理，可以晚一点吗？</span>
              </li>
              <li class="clearfix message-own">
                <img
                  alt="User"
                  :src="$publicUrl('resource/layout/images/avatar.png')"
                />
                <span>那八点钟如何？</span>
              </li>
              <li class="clearfix message-from">
                <img
                  alt="Contact 2"
                  :src="$publicUrl('resource/layout/images/avatar2.png')"
                />
                <span>可以到时候见吧。</span>
              </li>
              <li class="clearfix message-own">
                <img
                  alt="User"
                  :src="$publicUrl('resource/layout/images/avatar.png')"
                />
                <span>好的，到时候见。</span>
              </li>
            </ul>
            <div class="new-message">
              <div class="message-attachment">
                <i class="pi pi-paperclip" />
              </div>
              <div class="message-input">
                <input type="text" placeholder="发消息" class="p-inputtext" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 pb-0">
          <div class="card">
            <h5>最近销售</h5>
            <DataTable
              :value="products"
              :rows="5"
              :paginator="true"
              breakpoint="640px"
            >
              <Column>
                <template #header> Logo </template>
                <template #body="slotProps">
                  <img
                    :src="$publicUrl('resource/demo/images/product/' + slotProps.data.image)"
                    :alt="slotProps.data.image"
                    width="50px"
                  />
                </template>
              </Column>
              <Column field="name" header="名称" sortable />
              <Column field="category" header="类别" sortable />
              <Column field="price" header="价格" sortable>
                <template #body="slotProps">
                  {{ formatCurrency(slotProps.data.price) }}
                </template>
              </Column>
              <Column>
                <template #header> 操作 </template>
                <template #body>
                  <div>
                    <Button
                      icon="pi pi-search"
                      type="button"
                      class="p-button-success mr-2 mb-1"
                    />
                    <Button
                      icon="pi pi-times"
                      type="button"
                      class="p-button-danger mb-1"
                    />
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 lg:col-4">
      <div class="card timeline h-full">
        <Timeline :value="timeLineEvents">
          <template #opposite="slotProps">
            <small class="p-text-secondary">{{ slotProps.item.date }}</small>
          </template>
          <template #marker="slotProps">
            <span :style="{ color: slotProps.item.color }">
              <i :class="slotProps.item.icon" />
            </span>
          </template>
          <template #content="slotProps">
            <span class="event-owner" :style="`color: ${slotProps.item.color}`">
              {{ slotProps.item.content.owner }}
            </span>
            <span class="event-text">{{ slotProps.item.content.text }}</span>
            <div v-if="slotProps.item.content.image" class="event-content">
              <img
                alt="Bridge"
                :src="slotProps.item.content.image"
                width="100"
              />
            </div>
          </template>
        </Timeline>
        <div class="p-fluid">
          <Button
            type="button"
            label="刷新"
            icon="pi pi-refresh"
            class="rounded-btn raised-btn"
          />
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>日历</h5>
        <FullCalendar :events="events" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

import ProductService from '@/api/ProductService'
import EventService from '@/api/EventService'
import { getPublicUrl } from '@/utils'

export default {
  data() {
    return {
      tasksCheckbox: [],
      dropdownCities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
      ],
      dropdownCity: null,
      products: null,
      selectedProducts: null,
      timeLineEvents: [
        {
          date: '现在',
          icon: 'pi pi-globe',
          color: '#3984b8',
          content: {
            owner: '凯瑟琳·梅',
            text: 'Lorem ipsun dolor amet',
            image: getPublicUrl('resource/layout/images/dashboard/bridge.png'),
          },
        },
        {
          date: '12小时前',
          icon: 'pi pi-star',
          color: '#f6ac2b',
          content: {
            owner: '布兰登·桑托斯',
            text: 'Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.',
          },
        },
        {
          date: '15小时前',
          icon: 'pi pi-comment',
          color: '#7e8dcd',
          content: {
            owner: '斯蒂芬·沃德',
            text: 'Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.',
            image: getPublicUrl('resource/demo/images/nature/nature1.jpg'),
          },
        },
        {
          date: '2天前',
          icon: 'pi pi-map-marker',
          color: '#e175a0',
          content: {
            owner: '杰森·史密斯',
            text: 'Laudantium, repudiandae, similique!',
            image: getPublicUrl('resource/layout/images/dashboard/map.png'),
          },
        },
        {
          date: '1周前',
          icon: 'pi pi-heart',
          color: '#39b8b6',
          content: {
            owner: '凯文·考克斯',
            text: 'Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.',
            image: getPublicUrl('resource/layout/images/dashboard/map.png'),
          },
        },
        {
          date: '2周前',
          icon: 'pi pi-compass',
          color: '#3eb839',
          content: {
            owner: '沃特·怀特',
            text: 'I am the one who knocks!',
          },
        },
      ],
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        headerToolbar: {
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,list',
        },
        initialDate: '2024-01-01',
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
      },
      events: null,
    }
  },
  productService: null,
  eventService: null,
  created() {
    this.productService = new ProductService()
    this.eventService = new EventService()
  },
  mounted() {
    this.productService.getProductsSmall().then(
      (data) =>
        (this.products = data.map((v) => {
          return { ...v, actions: [] }
        }))
    )
    this.eventService.getEvents().then((data) => (this.events = data))
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString('zh-CN', {
        style: 'currency',
        currency: 'USD',
      })
    },
  },
}
</script>
