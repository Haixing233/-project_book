$(function() {
        getUserInfo()
    })
    //获取用户的基本信息
function getUserInfo() {
    $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            //请求头配置
            headers: {
                Authorization: localStorage.getItem('token')
            },
            success: function(res) {
                renderAvatar(res.data)

            }
        }

    )

    function renderAvatar(user) {
        let name = user.nicknam || user.username

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