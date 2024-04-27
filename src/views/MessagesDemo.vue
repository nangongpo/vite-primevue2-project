<template>
  <div class="grid messages-demo">
    <div class="col-12 lg:col-6">
      <div class="card">
        <h5>Toast 信息</h5>

        <Toast />
        <Button
          label="成功"
          class="p-button-success mr-2"
          @click="showSuccess()"
        />
        <Button
          label="信息"
          class="p-button-info mr-2"
          @click="showInfo()"
        />
        <Button
          label="警告"
          class="p-button-warning mr-2"
          @click="showWarn()"
        />
        <Button
          label="错误"
          class="p-button-danger mr-2"
          @click="showError()"
        />
      </div>
    </div>

    <div class="col-12 lg:col-6">
      <div class="card">
        <h5>Messages 提示</h5>

        <Button
          label="成功"
          class="p-button-success mr-2"
          @click="addSuccessMessage()"
        />
        <Button
          label="信息"
          class="p-button-info mr-2"
          @click="addInfoMessage()"
        />
        <Button
          label="警告"
          class="p-button-warning mr-2"
          @click="addWarnMessage()"
        />
        <Button
          label="错误"
          class="p-button-danger mr-2"
          @click="addErrorMessage()"
        />

        <transition-group
          name="p-messages"
          tag="div"
        >
          <Message
            v-for="msg of message"
            :key="msg.content"
            :severity="msg.severity"
          >
            {{ msg.content }}
          </Message>
        </transition-group>
      </div>
    </div>

    <div class="col-12 lg:col-8">
      <div class="card">
        <h5>Inline 内联</h5>
        <div class="field grid p-align-start">
          <label
            for="username1"
            class="col-fixed"
          >用户名</label>
          <div class="col">
            <InputText
              id="username1"
              v-model="username"
              :required="true"
              class="p-invalid"
            />
            <InlineMessage>用户名必填。</InlineMessage>
          </div>
        </div>
        <div class="field grid">
          <label
            for="email"
            class="col-fixed"
          >邮件</label>
          <div class="col">
            <InputText
              id="email"
              v-model="email"
              :required="true"
              class="p-invalid"
            />
            <InlineMessage>邮件必填。</InlineMessage>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 lg:col-4">
      <div class="card">
        <h5>帮助文字</h5>
        <div class="field p-fluid">
          <label for="username2">用户名</label>
          <InputText
            id="username2"
            type="username"
            class="p-error"
            aria-describedby="username-help"
          />
          <small
            id="username-help"
            class="p-error"
          >输入您的用户名以重置密码。</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [],
      username: null,
      email: null
    }
  },
  methods: {
    addSuccessMessage() {
      this.message = [{ severity: 'success', content: '信息内容' }]
    },
    addInfoMessage() {
      this.message = [{ severity: 'info', content: '信息内容' }]
    },
    addWarnMessage() {
      this.message = [{ severity: 'warn', content: '信息内容' }]
    },
    addErrorMessage() {
      this.message = [{ severity: 'error', content: '信息内容' }]
    },
    showSuccess() {
      this.$toast.add({ severity: 'success', summary: '成功信息', detail: '信息内容', life: 3000 })
    },
    showInfo() {
      this.$toast.add({ severity: 'info', summary: '通知信息', detail: '信息内容', life: 3000 })
    },
    showWarn() {
      this.$toast.add({ severity: 'warn', summary: '警告信息', detail: '信息内容', life: 3000 })
    },
    showError() {
      this.$toast.add({ severity: 'error', summary: '错误信息', detail: '信息内容', life: 3000 })
    }
  }
}
</script>

<style lang="scss" scoped>
	.field > label {
		width: 125px;
	}

	.p-inputtext {
		margin-right: .5rem;
	}
</style>
