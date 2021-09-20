const elmutils=require('../utils/elementsUtil')
const data=require('../resources/constants')
const configdata=require('../resources/config')
class LoginPage{
    get userName_edt() { return $("[name='userName']")}
    get password_edt() { return $("[name='password']")}
    get submit_btn() { return $("[name='submit']")}
    get signIn_lnk() { return $("//*[text()='SIGN-ON']")}
 
    //Page actions
    getTitle(){
        return elmutils.dogetpageTitle(data.LOGIN_PAGE_TITLE)
    }

    isSignInlinkExist(){
        return elmutils.doIsDisplayed(this.signIn_lnk)
    }

    doLogin(){
        elmutils.doSetValue(this.userName_edt,configdata.username)
        elmutils.doSetValue(this.password_edt,configdata.password)
        elmutils.doClick(this.submit_btn)
    }
 }
 module.exports=new LoginPage()