import { $, driver, expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.js'
import scrollScreen from '../../helper/scroll.js'
import isDescending from '../../helper/desc.js'
import IndexPage from '../pageobjects/index.js'

describe('Fitur Beranda', function(){
    before('User sudah login dan berada pada halaman utama', async function(){
        await loginPage.login1('standard_user','secret_sauce')
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
    })
    it('User menambahkan produk ke keranjang pada tampilan card', async function(){
        await IndexPage.clickButtonProd1()
        await expect (IndexPage.numInCart).toHaveText('1')
    })
    it('User membuka halaman cart', async function(){
        await IndexPage.clickButtonCart()
        await expect (IndexPage.prodNameInCart).toHaveText('Sauce Labs Backpack')
        //expect nama produk sesuai
    })
    it('User menghapus product di cart', async function(){
        await IndexPage.clickRemoveButtonInCart()
        await expect(JSON.stringify(IndexPage.cardProdInCart)).toEqual('{}')
        //expect nama produk di hapus
    })
    it('User melanjutkan belanja', async function(){
        await IndexPage.clickButtonContShopping()
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
        //expect pindah halaman
    })
    it('User mengganti tampilan menjadi tampilan list', async function(){
        await IndexPage.clickButtonLayout()
        await expect (IndexPage.prodJacket).toHaveText('Sauce Labs Fleece Jacket')
        //expect produk fleece jacket tampil
    })
    it('User menambahkan produk ke keranjang pada tampilan list', async function(){ //7 not yet
        await IndexPage.clickButtonProd1List()
        await IndexPage.clickButtonProd2List()
        await driver.pause(1000)
        await expect (IndexPage.numInCart2).toHaveText('2')

        //expect nambah angka di keranjang
    })
    it('User menghapus produk dari keranjang pada tampilan list', async function(){ //8 not yet
        await IndexPage.clickButtonDelProdList()
        await expect (IndexPage.numInCart2).toHaveText('1')
        //expect angkanya berkurang
    })
    it('User menekan button checkout pada menu keranjang', async function(){ //10 not yet
        await IndexPage.clickButtonCart()
        await scrollScreen(600,500)
        await IndexPage.clickButtonCheckOut()
        await expect (IndexPage.coInfo).toHaveText('CHECKOUT: INFORMATION')
        await IndexPage.clickButtonCancelCO()
        //expect ke halaman checkout
    })
    it('User mengganti tampilan menjadi tampilan card', async function(){ //////6 passed
        await IndexPage.clickButtonLayout()
        await expect (JSON.stringify(IndexPage.prodJacket)).toEqual('{}')
        //expect produk fleece jacket tidak tampil
    })
    it('User melakukan logout', async function(){ //9 not yet
        await IndexPage.clickButtonListMenu()
        await IndexPage.clickButtonLogOut()
        await browser.pause(1000)
        let buttonLog = await loginPage.buttonLogin.isDisplayed()
        await expect (buttonLog).toBe(true)
        //expect driver punya button login
    })
    it.only('User menggunakan sort by name desc', async function(){ 
        await IndexPage.clickButtonFilter()
        await IndexPage.clickFilterType1()
        const allProdName = []
        const z = await IndexPage.allProdNameLocator
        for (const prodName of z){
            let prodNameText = await prodName.getText()
            allProdName.push(prodNameText)
        }
        console.log(allProdName)
        const sortedDesc = isDescending(allProdName)
        await driver.pause(1000)
        await expect (sortedDesc).toBe(true)
        //expect produk fleece jacket tidak tampil
    })

})