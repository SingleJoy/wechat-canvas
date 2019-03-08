// pages/show/show.js

let config=require("../../utils/config");

var height,width;

//获取系统信息
wx.getSystemInfo({
    success: function (res) {

        width=res.screenWidth;
        height=res.screenHeight;
    },
}),
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host:config.host,
    interfaceCode:'ZQ839f885fc844e7bfcaff3380f33b5c',
     contractNo:'3dd63762337e4254bbb32e69e1c6086f',
      mobile:"18201328018",
      imageList:[],
      imageHeight:width*1.414+'px',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.login();
      setTimeout(()=>{
          this.requestData();
      },1000)
  },
  requestData(){

      let api=this.data.host+"api/v1.4/tenant/"+this.data.interfaceCode+"/contract/"+this.data.contractNo+"/contractimgs";
      var that=this;
      wx.request({
          url:api , //仅为示例，并非真实的接口地址
          data: {

          },
          header:{
              'content-type': 'application/x-www-form-urlencoded',
              'cookie':wx.getStorageSync("sessionid")
          },
          success: function (res) {

              that.setData({
                  imageList:res.data.dataList
              })
              // console.log(that.data.imageList)
          }
      })
  },

  login:function () {
      let api=this.data.host+"api/v1.4/tenant/"+this.data.interfaceCode+"/homePage?mobile="+this.data.mobile;
      wx.request({
          url:api , //仅为示例，并非真实的接口地址
          data: {

          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res.header);
              wx.setStorageSync("sessionid", res.header["Set-Cookie"])
          }
      })

  }


})