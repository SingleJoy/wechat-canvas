// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'tab(父组件)传值给header(子组件)'
  },

  parentMethod() {
    console.log(this)
    let footer=this.selectComponent("#footer");
    console.log(footer)
    footer.childMethod()
  },
  parentEvent(){
   console.log("这里本来是父组件的方法，子组件可以通过this.triggerEvent使用")
  }


})