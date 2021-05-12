var nodemailer=require('nodemailer');

var sender=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"madhumitha.p2017eceb@sece.ac.in",
        pass:"madhu1999"
    }
});

var compose={
    from:'madhumitha.p2017eceb@sece.ac.in',
    to:'madhumithaselvam51@gmail.com',
    subject:'Send mail using nodemailer',
    text:"Hi,I completed my task sending email using nodemailer" 
};

sender.sendMail(compose,function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("Mail sent successfully");
    }
});

