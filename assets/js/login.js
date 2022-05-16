$(function() {
    $("#link_reg").on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    $("#link_login").on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //加载layui
    let form = layui.form
    let layout = layui.layer

    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 形参是repassword的值
        repwd: function(value) {
            // 获取密码框的值
            let pwd = $('.reg-box [name=password]').val()

            if (pwd != value) {
                return '两次密码不一致！'
            }
        }
    })


    //监听注册表单提交的事件
    $("#form-reg").on('submit', function(e) {
        //阻止默认提交行为
        e.preventDefault()
        let data = {
            username: $('.reg-box [name=username]').val(),
            password: $('.reg-box [name=password]').val()
        }
        $.post('http://www.liulongbin.top:3007/api/reguser', data, function(res) {
            if (res.status != 0)
                return layout.msg(res.message)

            layout.msg('注册成功！')
            $('#link_reg').click()

            // 自动输入用户名和密码
            $('.login-box [name=username]').val($('.reg-box [name=username]').val())
            $('.login-box [name=password]').val($('.reg-box [name=password]').val())
        })

    })

    //监听登录表单的提交事件
    $("#form_login").on('submit', function(e) {
        //阻止默认提交行为
        e.preventDefault()
        $.ajax({
            method: 'post',
            data: $(this).serialize(),
            success: function(res) {

            }

        })
    })
})