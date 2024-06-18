import {$} from '@wdio/globals'

class LoginPage {
    //locator
    get kolomUserName() {return $('~test-Username')}
    get kolomPassword() {return $('~test-Password')}
    get buttonLogin() {return $('~test-LOGIN')}
    get buttonStandardUser() {return $('//android.widget.TextView[@text="standard_user"]')}
    get buttonLOUser() {return $('//android.widget.TextView[@text="locked_out_user"]')}
    get buttonProbUser() {return $('//android.widget.TextView[@text="problem_user"]')}
    get notifGagal() {return $('//android.widget.TextView[@text="Username and password do not match any user in this service."]')}
    get halamanProduct() {return $('//android.widget.TextView[@text="PRODUCTS"]')}
    get notifGagal2() {return $('//android.widget.TextView[@text="Username is required"]')}
    get notifGagal3() {return $('//android.widget.TextView[@text="Password is required"]')}
    get notifGagal4() {return $('//android.widget.TextView[@text="Sorry, this user has been locked out."]')}

    //action
    async login1(username = "",password = ""){
        await this.kolomUserName.setValue(username)
        await this.kolomPassword.setValue(password)
        await this.buttonLogin.click()
    }
    async login2(buttonterpilih){
        await buttonterpilih.click()
        await this.buttonLogin.click()
    }

}
export default new LoginPage