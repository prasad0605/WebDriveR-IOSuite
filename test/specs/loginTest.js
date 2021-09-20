const { assert } = require('chai')
const loginpage=require('../pages/loginPage')
const data=require('../resources/constants')
/*before(()=>{
    browser.url(data.URL)
})*/

/*beforeEach(()=>{
    browser.url(data.URL)
})*/

describe("Mercury LoginTest",function(){
    it("verify title",function(){
        browser.url(data.URL)
        const actTitle=loginpage.getTitle()
        assert.equal(actTitle,"Welcome: Mercury Tours123","title is not displayed as expected")
    })

    it("verify Sign-In",function(){
        const flg=loginpage.isSignInlinkExist()
        assert.equal(flg,true,"SignIn button is not displayed")
    })

    it("verify login",function(){
        loginpage.doLogin()
    })



})