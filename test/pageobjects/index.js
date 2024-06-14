import {$} from '@wdio/globals'

class indexPage {
    //locator
    get product1() {return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]')}
    get numInCart() {return $('(//android.widget.TextView[@text="1"])[1]')}
    get buttonCart() {return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')}
    get prodNameInCart() {return $('//android.widget.TextView[@text="Sauce Labs Backpack"]')}
    get removeButtonInCart() {return $('//android.view.ViewGroup[@content-desc="test-REMOVE"]')}
    get cardProdInCart() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]')}
    get buttonContShopping(){return $('~test-CONTINUE SHOPPING')}
    get buttonLayout() {return $('//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView')}
    get prodJacket() {return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Fleece Jacket"]')}
    //action
    async clickButtonProd1(){
        await this.product1.click()
    }
    async clickButtonCart(){
        await this.buttonCart.click()
    }
    async clickRemoveButtonInCart(){
        await this.removeButtonInCart.click()
    }
    async clickButtonContShopping(){
        await this.buttonContShopping.click()
    }
    async clickButtonLayout(){
        await this.buttonLayout.click()
    }

}
export default new indexPage