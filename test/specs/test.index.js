import { $, driver, expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.js'
import scrollScreen from '../../helper/scroll.js'
import indexPage from '../pageobjects/index.js'

describe('Fitur Beranda', function(){
    before('User sudah login dan berada pada halaman utama', async function(){
        await loginPage.login1('standard_user','secret_sauce')
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
    })
    it.only('User menambahkan produk ke keranjang', async function(){
        await indexPage.clickButtonProd1()
        await expect (indexPage.numInCart).toHaveText('1')
    })
    it.only('User membuka halaman cart', async function(){
        await indexPage.clickButtonCart()
        await expect (indexPage.prodNameInCart).toHaveText('Sauce Labs Backpack')
        //expect nama produk sesuai
    })
    it.only('User menghapus product di cart', async function(){
        await indexPage.clickRemoveButtonInCart()
        await expect(JSON.stringify(indexPage.cardProdInCart)).toEqual('{}')
        //expect nama produk di hapus
    })
    it.only('User melanjutkan belanja', async function(){
        await indexPage.clickButtonContShopping()
        await expect (loginPage.halamanProduct).toHaveText('PRODUCTS')
        //expect pindah halaman
    })
    it.only('User mengganti tampilan menjadi tampilan list', async function(){
        await indexPage.clickButtonLayout()
        await expect (indexPage.prodJacket).toHaveText('Sauce Labs Fleece Jacket')
        //expect produk fleece jacket tampil
    })
    it.only('User mengganti tampilan menjadi tampilan card', async function(){
        await indexPage.clickButtonLayout()
        await expect (JSON.stringify(indexPage.prodJacket)).toEqual('{}')
        //expect produk fleece jacket tidak tampil
    })
})