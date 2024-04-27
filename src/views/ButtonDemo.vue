<template>
  <div class="card">
    <h5>基础</h5>
    <Button label="提交" />
    <Button label="禁用" disabled="禁用" />
    <Button label="链接" class="p-button-link" />

    <h5>图标</h5>
    <Button icon="pi pi-check" />
    <Button label="提交" icon="pi pi-check" />
    <Button label="提交" icon="pi pi-check" iconPos="right" />

    <h5>严重程度</h5>
    <Button label="Primary" />
    <Button label="Secondary" class="p-button-secondary" />
    <Button label="Success" class="p-button-success" />
    <Button label="Info" class="p-button-info" />
    <Button label="Warning" class="p-button-warning" />
    <Button label="Help" class="p-button-help" />
    <Button label="Danger" class="p-button-danger" />

    <h5>凸起按钮</h5>
    <Button label="Primary" class="p-button-raised" />
    <Button label="Secondary" class="p-button-raised p-button-secondary" />
    <Button label="Success" class="p-button-raised p-button-success" />
    <Button label="Info" class="p-button-raised p-button-info" />
    <Button label="Warning" class="p-button-raised p-button-warning" />
    <Button label="Help" class="p-button-raised p-button-help" />
    <Button label="Danger" class="p-button-raised p-button-danger" />

    <h5>圆角按钮</h5>
    <Button label="Primary" class="p-button-rounded" />
    <Button label="Secondary" class="p-button-rounded p-button-secondary" />
    <Button label="Success" class="p-button-rounded p-button-success" />
    <Button label="Info" class="p-button-rounded p-button-info" />
    <Button label="Warning" class="p-button-rounded p-button-warning" />
    <Button label="Help" class="p-button-rounded p-button-help" />
    <Button label="Danger" class="p-button-rounded p-button-danger" />

    <h5>文本按钮</h5>
    <Button label="Primary" class="p-button-text" />
    <Button label="Secondary" class="p-button-secondary p-button-text" />
    <Button label="Success" class="p-button-success p-button-text" />
    <Button label="Info" class="p-button-info p-button-text" />
    <Button label="Warning" class="p-button-warning p-button-text" />
    <Button label="Help" class="p-button-help p-button-text" />
    <Button label="Danger" class="p-button-danger p-button-text" />
    <Button label="Plain" class="p-button-text p-button-plain" />

    <h5>凸起的文本按钮</h5>
    <Button label="Primary" class="p-button-raised p-button-text" />
    <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" />
    <Button label="Success" class="p-button-raised p-button-success p-button-text" />
    <Button label="Info" class="p-button-raised p-button-info p-button-text" />
    <Button label="Warning" class="p-button-raised p-button-warning p-button-text" />
    <Button label="Help" class="p-button-raised p-button-help p-button-text" />
    <Button label="Danger" class="p-button-raised p-button-danger p-button-text" />
    <Button label="Plain" class="p-button-raised p-button-text p-button-plain" />

    <h5>带边框按钮</h5>
    <Button label="Primary" class="p-button-outlined" />
    <Button label="Secondary" class="p-button-outlined p-button-secondary" />
    <Button label="Success" class="p-button-outlined p-button-success" />
    <Button label="Info" class="p-button-outlined p-button-info" />
    <Button label="Warning" class="p-button-outlined p-button-warning" />
    <Button label="Help" class="p-button-outlined p-button-help" />
    <Button label="Danger" class="p-button-outlined p-button-danger" />

    <h5>圆形图标按钮</h5>
    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" />
    <Button icon="pi pi-search" class="p-button-rounded p-button-success" />
    <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning" />
    <Button icon="pi pi-heart" class="p-button-rounded p-button-help" />
    <Button icon="pi pi-times" class="p-button-rounded p-button-danger" />
    <Button icon="pi pi-check" class="p-button-rounded" />

    <h5>圆形文本图标按钮</h5>
    <Button icon="pi pi-check" class="p-button-rounded p-button-text" />
    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" />
    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" />
    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" />
    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" />
    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" />
    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" />
    <Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" />

    <h5>圆形带边框图标按钮</h5>
    <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" />
    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" />
    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" />
    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" />
    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" />
    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" />
    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" />

    <h5>徽章</h5>
    <Button type="button" label="Emails" badge="8" />
    <Button
      type="button"
      label="Messages"
      icon="pi pi-users"
      class="p-button-warning"
      badge="8"
      badgeClass="p-badge-danger" />

    <h5>加载中</h5>
    <Button label="Save" icon="pi pi-check" :loading="isLoading" />

    <h5>按钮组</h5>
    <span class="p-buttonset">
      <Button label="Save" icon="pi pi-check" />
      <Button label="Delete" icon="pi pi-trash" />
      <Button label="Cancel" icon="pi pi-times" />
    </span>

    <h5>尺寸</h5>
    <div class="sizes">
      <Button label="Small" icon="pi pi-check" class="p-button-sm" />
      <Button label="Normal" icon="pi pi-check" class="p-button" />
      <Button label="Large" icon="pi pi-check" class="p-button-lg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        },
        {
          separator: true
        },
        {
          label: 'Home',
          icon: 'pi pi-home'
        }
      ]
    }
  }
}
</script>

<style scoped>
button {
	margin-right: .5rem;
}
</style>
