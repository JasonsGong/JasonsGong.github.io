function welcome(){
	let title = 'WELCOME'
    let welcome_text = '嗨,好久不见,欢迎再次回来,希望您能喜欢这里的新变化!'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="嗨,好久不见,欢迎你,来自"+referrer.toUpperCase()+"的用户!";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: title,
        text: welcome_text,
        imageUrl: "/img/logo.png",
		//弹窗时间1000代表一秒
        timer: 2000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})
