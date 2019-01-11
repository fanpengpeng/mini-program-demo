// components/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      this.setData({
        showModal: false
      })
    },

    show() {
      this.setData({
        showModal: true
      })
    },
    
    _onCancel() {
      this.triggerEvent("cancelEvent")
    },

    _onConfirm() {
      const detail = {
        msg: '这是子组件的数据'
      }
      this.triggerEvent("confirmEvent", detail)
    }
  }
})
