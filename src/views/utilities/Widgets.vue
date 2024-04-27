<template>
  <div class="grid">
    <h4 style="margin-left: 0.5em">适用于您的应用程序的可重用CSS小部件。</h4>
    <div class="col-12">
      <div class="card">
        <h4>概述框</h4>
        <div class="grid">
          <div class="col-12 md:col-6 xl:col-3">
            <div class="card no-gutter widget-overview-box widget-overview-box-1">
              <span class="overview-icon">
                <i class="pi pi-shopping-cart" />
              </span>
              <span class="overview-title">订单</span>
              <div class="grid overview-detail">
                <div class="col-6">
                  <div class="overview-number">640</div>
                  <div class="overview-subtext">进行中</div>
                </div>
                <div class="col-6">
                  <div class="overview-number">1420</div>
                  <div class="overview-subtext">已完成</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 xl:col-3">
            <div class="card no-gutter widget-overview-box widget-overview-box-2">
              <span class="overview-icon">
                <i class="pi pi-dollar" />
              </span>
              <span class="overview-title">收入</span>
              <div class="grid overview-detail">
                <div class="col-6">
                  <div class="overview-number">$2,100</div>
                  <div class="overview-subtext">花费</div>
                </div>
                <div class="col-6">
                  <div class="overview-number">$9,640</div>
                  <div class="overview-subtext">收入</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 xl:col-3">
            <div class="card no-gutter widget-overview-box widget-overview-box-3">
              <span class="overview-icon">
                <i class="pi pi-users" />
              </span>
              <span class="overview-title">客户</span>
              <div class="grid overview-detail">
                <div class="col-6">
                  <div class="overview-number">8272</div>
                  <div class="overview-subtext">活跃</div>
                </div>
                <div class="col-6">
                  <div class="overview-number">25402</div>
                  <div class="overview-subtext">注册</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 xl:col-3">
            <div class="card no-gutter widget-overview-box widget-overview-box-4">
              <span class="overview-icon">
                <i class="pi pi-comment" />
              </span>
              <span class="overview-title">评论</span>
              <div class="grid overview-detail">
                <div class="col-6">
                  <div class="overview-number">12</div>
                  <div class="overview-subtext">新评论</div>
                </div>
                <div class="col-6">
                  <div class="overview-number">85</div>
                  <div class="overview-subtext">已回复</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="card widget-tasks">
        <h4>任务状态</h4>
        <div>
          <div class="task task-1">
            <div class="task-name"><span>12个订单</span> 履行</div>
            <div class="task-progress">
              <div />
            </div>
          </div>
          <div class="task task-2">
            <div class="task-name"><span>40+ 提款</span> 待定</div>
            <div class="task-progress">
              <div />
            </div>
          </div>
          <div class="task task-3">
            <div class="task-name"><span>4 报告</span>修订</div>
            <div class="task-progress">
              <div />
            </div>
          </div>
          <div class="task task-4">
            <div class="task-name"><span>6 问题</span> 待回复</div>
            <div class="task-progress">
              <div />
            </div>
          </div>
          <div class="task task-5">
            <div class="task-name"><span>2 退款</span> 审核</div>
            <div class="task-progress">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="card">
        <h4>图片列表</h4>

        <ul class="widget-image-list">
          <li>
            <span>产品</span>
            <span>营业额</span>
          </li>
          <li>
            <span>
              <img :src="$publicUrl('resource/demo/images/product/bamboo-watch.jpg')" alt="竹手表" />
              <span>竹手表</span>
            </span>
            <span class="listitem-value">82</span>
          </li>
          <li>
            <span>
              <img :src="$publicUrl('resource/demo/images/product/blue-band.jpg')" alt="蓝带" />
              <span>蓝带</span>
            </span>
            <span class="listitem-value">75</span>
          </li>
          <li>
            <span>
              <img :src="$publicUrl('resource/demo/images/product/game-controller.jpg')" alt="游戏控制器" />
              <span>游戏控制器</span>
            </span>
            <span class="listitem-value">64</span>
          </li>
          <li>
            <span>
              <img :src="$publicUrl('resource/demo/images/product/lime-band.jpg')" alt="石灰带" />
              <span>石灰带</span>
            </span>
            <span class="listitem-value">62</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="widget-pricing-card">
        <h4>价格</h4>
        <span>从...开始</span>
        <h3>$19</h3>
        <ul>
          <li>响应式布局</li>
          <li>无限推送信息</li>
          <li>550张支持票</li>
          <li>免费送货</li>
          <li>10GB储存空间</li>
        </ul>
        <a href="#">现在购买</a>
      </div>
    </div>
    <div class="col-12 lg:col-3">
      <div class="card">
        <h4>时间线</h4>
        <div class="widget-timeline">
          <div class="timeline-event">
            <span class="timeline-event-icon" style="background-color: #64b5f6">
              <i class="pi pi-dollar" />
            </span>
            <div class="timeline-event-title">新品促销</div>
            <div class="timeline-event-detail">理查德·琼斯以<strong>79</strong> 美元的价格购买了一件蓝色T恤。</div>
          </div>
          <div class="timeline-event">
            <span class="timeline-event-icon" style="background-color: #7986cb">
              <i class="timeline-icon pi pi-download" />
            </span>
            <div class="timeline-event-title">提款开始</div>
            <div class="timeline-event-detail">您的提款要求为<strong>$2500</strong> 已开始。</div>
          </div>
          <div class="timeline-event">
            <span class="timeline-event-icon" style="background-color: #4db6ac">
              <i class="timeline-icon pi pi-question" />
            </span>
            <div class="timeline-event-title">收到问题</div>
            <div class="timeline-event-detail">Jane Davis发布了有关您产品的新问题。</div>
          </div>
          <div class="timeline-event">
            <span class="timeline-event-icon" style="background-color: #4dd0e1">
              <i class="timeline-icon pi pi-comment" />
            </span>
            <div class="timeline-event-title">收到评论</div>
            <div class="timeline-event-detail">克莱尔史密斯对您的商店进行了评论。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-9">
      <div class="card">
        <h4>聊天</h4>
        <div class="widget-chat">
          <ul>
            <li class="message-from">
              <img :src="$publicUrl('resource/demo/images/avatar/ionibowcher.png')" alt="ionibowcher" />
              <div>晚上一起吃饭？</div>
            </li>
            <li class="message-own">
              <img :src="$publicUrl('resource/demo/images/avatar/onyamalimba.png')" alt="onyamalimba" />
              <div>好的，请问几点，在哪里？</div>
            </li>
            <li class="message-from">
              <img :src="$publicUrl('resource/demo/images/avatar/ionibowcher.png')" alt="ionibowcher" />
              <div>七点，门口咖啡厅。</div>
            </li>
            <li class="message-own">
              <img :src="$publicUrl('resource/demo/images/avatar/onyamalimba.png')" alt="onyamalimba" />
              <div>好的，到时候见。</div>
            </li>
          </ul>
          <div class="new-message">
            <div class="message-attachment">
              <i class="pi pi-paperclip" />
            </div>
            <div class="message-input">
              <input type="text" placeholder="发信息" class="p-inputtext" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="card">
        <h4>人员清单</h4>
        <ul class="widget-person-list">
          <li>
            <div class="person-item">
              <img :src="$publicUrl('resource/demo/images/avatar/amyelsner.png')" alt="amyelsner" />
              <div class="person-info">
                <div class="person-name">艾米·埃尔斯纳</div>
                <div class="person-subtext">会计</div>
              </div>
            </div>
            <div class="person-actions">
              <Button type="button" class="p-button-rounded p-button-success" icon="pi pi-envelope" />
              <Button type="button" class="p-button-rounded p-button-warning" icon="pi pi-cog" />
            </div>
          </li>
          <li>
            <div class="person-item">
              <img :src="$publicUrl('resource/demo/images/avatar/annafali.png')" alt="annafali" />
              <div class="person-info">
                <div class="person-name">安娜·法利</div>
                <div class="person-subtext">采购流程</div>
              </div>
            </div>
            <div class="person-actions">
              <Button type="button" class="p-button-rounded p-button-success" icon="pi pi-envelope" />
              <Button type="button" class="p-button-rounded p-button-warning" icon="pi pi-cog" />
            </div>
          </li>
          <li>
            <div class="person-item">
              <img :src="$publicUrl('resource/demo/images/avatar/bernardodominic.png')" alt="bernardodominic" />
              <div class="person-info">
                <div class="person-name">伯纳多·多米尼克</div>
                <div class="person-subtext">金融</div>
              </div>
            </div>
            <div class="person-actions">
              <Button type="button" class="p-button-rounded p-button-success" icon="pi pi-envelope" />
              <Button type="button" class="p-button-rounded p-button-warning" icon="pi pi-cog" />
            </div>
          </li>
          <li>
            <div class="person-item">
              <img :src="$publicUrl('resource/demo/images/avatar/ivanmagalhaes.png')" alt="ivanmagalhaes" />
              <div class="person-info">
                <div class="person-name">伊万·玛格海斯</div>
                <div class="person-subtext">营业额</div>
              </div>
            </div>
            <div class="person-actions">
              <Button type="button" class="p-button-rounded p-button-success" icon="pi pi-envelope" />
              <Button type="button" class="p-button-rounded p-button-warning" icon="pi pi-cog" />
            </div>
          </li>
          <li>
            <div class="person-item">
              <img :src="$publicUrl('resource/demo/images/avatar/xuxuefeng.png')" alt="xuxuefeng" />
              <div class="person-info">
                <div class="person-name">冯雪雪</div>
                <div class="person-subtext">管理</div>
              </div>
            </div>
            <div class="person-actions">
              <Button type="button" class="p-button-rounded p-button-success" icon="pi pi-envelope" />
              <Button type="button" class="p-button-rounded p-button-warning" icon="pi pi-cog" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="card widget-user-card">
        <div class="user-card-header">
          <img :src="$publicUrl('resource/demo/images/avatar/profile.jpg')" class="user-card-avatar" alt="profile" />
        </div>
        <div class="user-card-body">
          <div class="user-card-title">艾米</div>
          <div class="user-card-subtext">销售团队</div>

          <div class="grid user-card-stats">
            <div class="col-4">
              <i class="pi pi-users" />
              <div>14 客户</div>
            </div>
            <div class="col-4">
              <i class="pi pi-bookmark" />
              <div>2 领导</div>
            </div>
            <div class="col-4">
              <i class="pi pi-check-square" />
              <div>6 任务</div>
            </div>
          </div>

          <Button type="button" label="Assign" style="width: 100%" />
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="card p-fluid">
        <h4>联系表</h4>
        <div class="field">
          <label for="firstname">姓</label>
          <InputText id="firstname" />
        </div>
        <div class="field">
          <label for="lastname">名</label>
          <InputText id="lastname" />
        </div>
        <div class="field">
          <label for="email">邮件</label>
          <InputText id="email" />
        </div>
        <div class="field">
          <label for="message">信息</label>
          <Textarea id="message" />
        </div>
        <Button type="button" label="Send" />
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <h4>特征</h4>
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <div class="card widget-feature-box">
              <img :src="$publicUrl('resource/layout/images/pages/icon-devices.svg')" alt="devices" />
              <h2>响应式</h2>
              <span>欢迎你使用primevue组件。</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="card widget-feature-box">
              <img :src="$publicUrl('resource/layout/images/pages/icon-design.svg')" alt="design" />
              <h2>现代设计</h2>
              <span>欢迎你使用primevue组件。</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="card widget-feature-box">
              <img :src="$publicUrl('resource/layout/images/pages/icon-document.svg')" alt="document" />
              <h2>文档齐全</h2>
              <span>欢迎你使用primevue组件。</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="card widget-feature-box">
              <img :src="$publicUrl('resource/layout/images/pages/icon-diamond.svg')" alt="diamond" />
              <h2>高级支持</h2>
              <span>欢迎你使用primevue组件。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widgets'
}
</script>

<style scoped></style>
