const { CaptchaGenerator } = require("./");
const fs = require('fs');

const captcha = new CaptchaGenerator()
new Promise(async (resolve, reject) => {
    fs.writeFileSync(`./assets/captcha/default.png`, await captcha.generate())
})
//fs.writeFileSync('./assets/captcha/default.gif', captcha.createGif())
