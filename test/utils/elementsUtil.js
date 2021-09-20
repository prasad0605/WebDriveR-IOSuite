class Elements{

    doClick(element){
        element.waitForDisplayed()
        element.click()
    }
    doSetValue(element,value){
        element.waitForDisplayed()
        element.setValue(value)
    }
    dogetElementText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    dogetpageTitle(pageTitle){
        browser.waitUntil(function(){
          return (browser.getTitle() === pageTitle)
        },3000,"title is not displayed")
        
        return browser.getTitle()
    }

    doIsDisplayed(element){
       return element.isDisplayed()
    }
}
module.exports=new Elements()