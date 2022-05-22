$(function() {
    let form = layui.form
    let layer = layui.layer

    form.verifl({
        nikcname: function(value) {
            if (value.lenght > 6)
                return '昵称长度必须要1-6个字符之间'
        }

    })

    iniyUserInfo()

    function iniyUserInfo() {

        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg("请求用户信息失败！")
                }


            }

        })

    }

})