<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>高级</h5>
        <FileUpload
          name="demo[]"
          choose-label="选择文件"
          upload-label="开始上传"
          cancel-label="取消上传"
          url="./upload.php"
          :multiple="true"
          accept="image/*"
          :max-file-size="1000000"
          @upload="onUpload"
        />

        <h5>基本</h5>
        <FileUpload
          mode="basic"
          choose-label="选择文件"
          name="demo[]"
          url="./upload.php"
          accept="image/*"
          :max-file-size="1000000"
          @upload="onUpload"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onUpload() {
      this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
    }
  }
}
</script>

<style scoped>

</style>
