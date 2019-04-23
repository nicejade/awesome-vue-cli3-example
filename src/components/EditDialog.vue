<!-- @format -->

<template>
  <el-dialog title="编辑列表" :visible.sync="isVisible" @close="onClose" class="edit-dialog">
    <el-form :model="fillForm" :rules="rules" ref="fillForm">
      <div class="form-group col-sm-12">
        <el-form-item label="作品名称" prop="name">
          <el-input v-model="fillForm.name"></el-input>
        </el-form-item>
      </div>

      <div class="form-group col-sm-12">
        <el-form-item label="在线地址" prop="address">
          <el-input v-model="fillForm.address"></el-input>
        </el-form-item>
      </div>

      <div class="form-group col-sm-12">
        <el-form-item label="作品描述" prop="description">
          <el-input v-model="fillForm.description"></el-input>
        </el-form-item>
      </div>

      <div class="form-group col-sm-12">
        <el-form-item label="上线日期" prop="date">
          <el-input v-model="fillForm.date"></el-input>
        </el-form-item>
      </div>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="isVisible = false"> 取 消</el-button>
      <el-button type="primary" @click="onSureClick">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'EditDialog',

  data() {
    return {
      isVisible: false,
      fillForm: {
        name: '',
        description: '',
        address: '',
        date: ''
      },
      rules: {}
    }
  },

  computed: {},

  created() {},

  mounted() {},

  props: {
    value: {
      type: Boolean,
      required: true
    },
    pdata: {
      type: Object,
      default: () => {}
    }
  },

  watch: {
    value(newVal) {
      this.isVisible = newVal
      this.fillForm = JSON.parse(JSON.stringify(this.pdata))
    }
  },

  methods: {
    onClose() {
      this.isVisible = false
      this.$emit('input', this.isVisible)
    },
    /* ----------------------------On Click Event---------------------------- */
    onSureClick() {
      this.$refs.fillForm.validate(valid => {
        if (!valid) return
        this.$emit('dispatch-data', JSON.parse(JSON.stringify(this.fillForm)))
        this.isVisible = false
      })
    }
  }
}
</script>

<style type="text/css" lang="scss">
.edit-dialog {
  .el-form-item__label,
  .el-form-item__content {
    display: inline-block;
  }
  .el-form-item__label {
    width: 20%;
  }
  .el-input {
    width: 100%;
    min-width: 300px;
  }
  .el-dialog--tiny {
    min-width: 300px;
  }
}

@media (max-width: 768px) {
  .edit-dialog {
    width: 100%;
    .el-dialog {
      width: 90%;
      margin-top: 2 * $size-factor !important;
      .el-form-item__label,
      .el-form-item__content {
        display: block;
        text-align: left;
      }
      .el-form-item__label {
        width: 100%;
      }
      .el-input {
        width: 100%;
        min-width: 100px;
      }
    }
  }
}
</style>
