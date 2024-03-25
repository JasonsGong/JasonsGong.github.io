function welcome(){
	let title = '网站域名更换通知!'
    let welcome_text = '访客你好!本网站域名已更换,网站新域名:\njasonsgong.github.io'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        //welcome_text="欢迎你,来自"+referrer.toUpperCase()+"的用户来访!";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: title,
        text: welcome_text,
        imageUrl: "/img/avatar.jpg",
		//弹窗时间1000代表一秒
        timer: 10000,
        showConfirmButton: true
    });
}
$(document).ready(()=>{
    welcome()
})
