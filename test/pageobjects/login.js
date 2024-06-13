import {$} from '@wdio/globals'

class loginPage {
    //locator
    get kolomUserName() {return $('~test-Username')}
    get kolomPassword() {return $('~test-Password')}
    get buttonLogin() {return $('~test-LOGIN')}
    get buttonStandardUser() {return $('//android.widget.TextView[@text="standard_user"]')}
    get buttonLOUser() {return $('//android.widget.TextView[@text="locked_out_user"]')}
    get buttonProbUser() {return $('//android.widget.TextView[@text="problem_user"]')}
    get notifGagal() {return $('//android.widget.TextView[@text="Username and password do not match any user in this service."]')}
    get halamanProduct() {return $('//android.widget.TextView[@text="PRODUCTS"]')}
    
    
    
    //action
    async login1(username,password){
        await this.kolomUserName.setValue(username)
        await this.kolomPassword.setValue(password)
        await this.buttonLogin.click()
    }
    async login2(buttonterpilih){
        await buttonterpilih.click()
        await this.buttonLogin.click()
    }

}
export default new loginPage