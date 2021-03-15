const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = {
    email: {
        service: 'QQ', // 邮箱类别
        user: '1755058576@qq.com',
        pass: 'otyujutrdgsabfgd',
    }
}

sendSmtpTransport = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function(replyObj) {

    sendSmtpTransport.sendMail({
        from: config.email.user,
        to: replyObj.recipient,
        subject: `${replyObj.subject} 收到新邮件`,
        html: replyObj.html

    }, function(error, response) {
        if (error) {
            console.log(error);
        }
        console.log('发送成功')
    });
}

module.exports = sendMail;