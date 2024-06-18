async function isDescending(data) {
    for (let i =0; i < data.length -1;i++){
        if (data[i] < data[i+1]){
            return false
        }
    }
    return true
}
export default isDescending