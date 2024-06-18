import {$} from '@wdio/globals'

class IndexPage {
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
    get product1list() {return $('(//android.widget.TextView[@text="+"])[1]')}
    get product2list() {return $('(//android.widget.TextView[@text="+"])[2]')}
    get delProdList() {return $('(//android.widget.TextView[@text="-"])[1]')}
    get numInCart2() {return $('//android.widget.TextView[@text="2"]')}
    get listMenu() {return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView')}
    get buttonLogOut() {return $('~test-LOGOUT')}
    get buttonCheckOut() {return $('~test-CHECKOUT')}
    get coInfo() {return $('//android.widget.TextView[@text="CHECKOUT: INFORMATION"]')}
    get cancelCO() {return $('~test-CANCEL')}
    get buttonFilter() {return $('//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView')}
    get filterType1() {return $('//android.widget.TextView[@text="Name (A to Z)"]')}
    get allProdNameLocator() {return $$('//android.widget.TextView[@content-desc="test-Item title"]')}
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
    async clickButtonProd1List(){
        await this.product1list.click()
    }
    async clickButtonProd2List(){
        await this.product2list.click()
    }
    async clickButtonDelProdList(){
        await this.delProdList.click()
    }
    async clickButtonListMenu(){
        await this.listMenu.click()
    }
    async clickButtonLogOut(){
        await this.buttonLogOut.click()
    }
    async clickButtonCheckOut(){
        await this.buttonCheckOut.click()
    }
    async clickButtonCancelCO(){
        await this.cancelCO.click()
    }
    async clickButtonFilter(){
        await this.buttonFilter.click()
    }
    async clickFilterType1(){
        await this.filterType1.click()
    }
}
export default new IndexPage