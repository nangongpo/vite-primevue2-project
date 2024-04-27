<template>
  <div class="grid">
    <div class="col-12 md:col-6">
      <div class="card p-fluid">
        <h5>垂直布局</h5>
        <div class="field">
          <label for="name1">姓名</label>
          <InputText id="name1" type="text" />
        </div>
        <div class="field">
          <label for="email1">邮件</label>
          <InputText id="email1" type="text" />
        </div>
        <div class="field">
          <label for="age1">年龄</label>
          <InputText id="age1" type="text" />
        </div>
      </div>

      <div class="card p-fluid">
        <h5>垂直网格</h5>
        <div class="formgrid grid">
          <div class="field col">
            <label for="name2">姓名</label>
            <InputText id="name2" type="text" />
          </div>
          <div class="field col">
            <label for="email2">邮件</label>
            <InputText id="email2" type="text" />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card p-fluid">
        <h5>水平布局</h5>
        <div class="field grid">
          <label for="name3" class="col-12 mb-2 md:col-2"> 姓名 </label>
          <div class="col-12 md:col-10">
            <InputText id="name3" type="text" />
          </div>
        </div>
        <div class="field grid">
          <label for="email3" class="col-12 mb-2 md:col-2"> 邮件 </label>
          <div class="col-12 md:col-10">
            <InputText id="email3" type="text" />
          </div>
        </div>
      </div>

      <div class="card">
        <h5>内联布局</h5>
        <div class="formgroup-inline">
          <div class="field">
            <label for="firstname1" class="p-sr-only">姓</label>
            <InputText id="firstname1" type="text" placeholder="姓" />
          </div>
          <div class="field">
            <label for="lastname1" class="p-sr-only">名</label>
            <InputText id="lastname1" type="text" placeholder="名" />
          </div>
          <Button label="提交" />
        </div>
      </div>

      <div class="card">
        <h5>帮助文字</h5>
        <div class="field p-fluid">
          <label for="username">用户名</label>
          <InputText id="username" type="text" />
          <small>输入您的用户名以重置密码。</small>
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>高级布局</h5>
        <div class="p-fluid formgrid grid">
          <div class="field col-12 md:col-6">
            <label for="firstname2">姓名</label>
            <InputText id="firstname2" type="text" />
          </div>
          <div class="field col-12 md:col-6">
            <label for="tel">电话</label>
            <InputText id="tel" type="text" />
          </div>
          <div class="field col-12">
            <label for="address">地址</label>
            <Textarea id="address" rows="4" />
          </div>
          <div class="field col-12 md:col-6">
            <label for="city">市</label>
            <InputText id="city" type="text" />
          </div>
          <div class="field col-12 md:col-3">
            <label for="state">省</label>
            <Dropdown
              id="state"
              v-model="state"
              :options="provinces"
              option-label="name"
              placeholder="请选择" />
          </div>
          <div class="field col-12 md:col-3">
            <label for="zip">邮编</label>
            <InputText id="zip" type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      provinces: [
        { name: '江苏', code: 'Option 1' },
        { name: '安徽', code: 'Option 2' },
        { name: '福建', code: 'Option 3' }
      ],
      state: { name: '江苏', code: 'Option 1' }
    }
  }
}
</script>
