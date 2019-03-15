// pages/scroll/scroll.js

let height;
Page({

    data: {
        list:[],
        height:"",
        scrollTop:'20px',
        page:1,
        flag:true
    },
    onLoad(){
        let that=this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    height:res.windowHeight
                })
            }
        });
        that.requestData();
    },
    requestData(){
        let api="http://www.phonegap100.com/appapi.php";
        let that=this;
        that.setData({
            flag:false
        });
        wx.request({
            url: api, //仅为示例，并非真实的接口地址
            data: {
                a: 'getPortalList',
                catid: '20',
                page: that.data.page
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {

                that.setData({
                        list:that.data.list.concat(res.data.result),
                        flag:true
                    })

            }
        })
    },

    upper(e){
        console.log("upper");
    },
    lower(e) {
        if(this.data.flag){
            this.setData({
                page:this.data.page+1
            });
            this.requestData();
        }

    },

    scroll(e) {

    }

});