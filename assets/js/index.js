$(function() {
    getUserInfo()

    let layer = layui.layer
    $('#btn-exit').on('click', function() {

        layer.confirm('是否退出?', { icon: 3, title: '提示' }, function(index) {
            //do something
            localStorage.removeItem('token')
            location.href = '/login.html'

            //执行结束关闭弹窗
            layer.close(index);
        });

    })

})





//获取用户的基本信息
function getUserInfo() {
    $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            async: false,
            //请求头配置
            // headers: {
            //     Authorization: localStorage.getItem('token')
            // },
            success: function(res) {
                    if (res.status === 0)
                        renderAvatar(res.data)

                }
                // complete: function(res) {
                //     if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！") {
                //         localStorage.removeItem('token')
                //         location.href = '/login.html'
                //     }

            // }
        }

    )

    function renderAvatar(user) {

        let name = user.nickname || user.username

        $('#welcome').html('欢迎&nbsp; &nbsp;' + name)
        $('#pushname').html(name)

        if (user.user_pic !== null) {
            $(".layui-nav-img").arrt('src', user.user_pic).show()
            $('.text-avatar').hide()
        } else {
            $(".layui-nav-img").hide()

            let frist = name[0].toUpperCase() //将第一个字母转换成大写

            $('.text-avatar').html(frist).show() //这里show是为了在后面换头像的时候防止两个头像都消失

        }
    }
}