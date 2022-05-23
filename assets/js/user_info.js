$(function() {
    let form = layui.form
    let layer = layui.layer

    form.verify({
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
                //调用form val 对表单进行赋值
                form.val('formUserInfo', res.data)

            }

        })

    }

    $('#btnReset').on('click', function(e) {
        //阻止默认提交
        e.preventDefault()
        iniyUserInfo()

    })

    $('.layui-form').on('submit', function(e) {
        e.preventDefault()

        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('数据提交失败！')
                }
                layer.msg('数据提交成功！')
                    //从父窗口调用getUserInfo 重新渲染页面
                window.parent.getUserInfo()
            }
        })
    })
})