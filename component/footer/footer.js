// component/footer/footer.js
Component({
  /**
   * 组件的属性列表
   */

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    childMethod() {
      console.log("点击父组件Button按钮，会触发这个绑定方法")
    },
    getParent(){
       this.triggerEvent("parent","子组件的数据");
    }
  }
})
