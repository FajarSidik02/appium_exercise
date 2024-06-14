import { $, driver, expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.js'
import scrollScreen from '../../helper/scroll.js'
describe('Fitur Login', function(){
    it('Login menggunakan username standard dan password yang valid', async function(){
        await loginPage.login1('standard_user','secret_sauce')
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
        await driver.pause(2000)
        await driver.back()
    })
    it('Login menggunakan username standard yang valid dan password yang tidak valid', async function(){
        await loginPage.login1('standard_user','wrongpass')
        await expect (loginPage.notifGagal).toHaveText('Username and password do not match any user in this service.')
    })
    it('Login menggunakan username standard yang tidak valid dan password yang valid', async function(){
        await loginPage.login1('wrong_user','secret_sauce')
        await expect (loginPage.notifGagal).toHaveText('Username and password do not match any user in this service.')
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LOCKED OUT USER BELOW
    it('Login menggunakan username locked_out_user dan password yang valid', async function(){
        await loginPage.login1('locked_out_user','secret_sauce')
        await expect (loginPage.notifGagal4).toHaveText('Sorry, this user has been locked out.')
        await driver.pause(2000)
    })
    it('Login menggunakan username locked_out_user yang valid dan password yang tidak valid', async function(){
        await loginPage.login1('locked_out_user','wrongpass')
        await expect (loginPage.notifGagal).toHaveText('Username and password do not match any user in this service.')
    })
    it('Login menggunakan username locked_out_user yang tidak valid dan password yang valid', async function(){
        await loginPage.login1('wrong_user_locked_out','secret_sauce')
        await expect (loginPage.notifGagal).toHaveText('Username and password do not match any user in this service.')
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PROBLEM USER BELOW
    it('Login menggunakan username problem_user dan password yang valid', async function(){
        await loginPage.login1('problem_user','secret_sauce')
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
        await driver.pause(2000)
        await driver.back()
    })
    it('Login menggunakan username problem_user yang valid dan password yang tidak valid', async function(){
        await loginPage.login1('problem_user','wrongpass')
        await expect (loginPage.notifGagal).toHaveText('Username and password do not match any user in this service.')
    })
    it('Login menggunakan username problem_user yang tidak valid dan password yang valid', async function(){
        await loginPage.login1('wrong_problem_user','secret_sauce')
        await expect (loginPage.notifGagal).toHaveText('Username and password do not match any user in this service.')
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// BLANK FIELD BELOW
    it('Login menggunakan username kosong dan password kosong', async function(){
        await loginPage.login1('','') // coba tanya mas abid, parameter dikosongin sama kek gini sama ga
        await expect (loginPage.notifGagal2).toHaveText('Username is required')
    })
    it('Login menggunakan username yang valid dan password kosong', async function(){
        await loginPage.login1('standard_user','') // coba tanya mas abid, parameter dikosongin sama kek gini sama ga
        await expect (loginPage.notifGagal3).toHaveText('Password is required')
    })
    it('Login menggunakan username kosong dan password valid', async function(){
        await loginPage.login1('','secret_sauce') // coba tanya mas abid, parameter dikosongin sama kek gini sama ga
        await expect (loginPage.notifGagal2).toHaveText('Username is required')
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LOGIN WITH BUTTON
    it('Login menggunakan button standard_user', async function(){
        await scrollScreen(600,100)
        await loginPage.login2(loginPage.buttonStandardUser)
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
        await driver.pause(1000)
        await driver.back()
    })
    it('Login menggunakan button locked_out_user', async function(){
        await scrollScreen(600,100)
        await loginPage.login2(loginPage.buttonLOUser)
        await scrollScreen(100,600)
        await expect (loginPage.notifGagal4).toHaveText('Sorry, this user has been locked out.')
        await driver.pause(1000)
    })
    it('Login menggunakan button problem_user', async function(){
        await scrollScreen(600,100)
        await loginPage.login2(loginPage.buttonProbUser)
        await scrollScreen(100,600)
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
        await driver.pause(1000)
    })
})

