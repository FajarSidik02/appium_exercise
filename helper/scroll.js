import {driver} from '@wdio/globals'

class urFunction{
    
}
async function scrollScreen(fromY, toY){
    await driver.pause(1000)
    await driver
    .action('pointer')
    .move({x:250, y: fromY})
    .down()
    .pause(100)
    .move({ duration:200, x: 250, y: toY})
    .up()
    .perform()
}
async function isAscending(data) {
    for (let i =0; i < data.length -1;i++){
        if (data[i] > data[i+1]){
            return false
        }
    }
    return true
}
async function isDescending(data) {
    for (let i =0; i < data.length -1;i++){
        if (data[i] < data[i+1]){
            return false
        }
    }
    return true
}

export default scrollScreen
