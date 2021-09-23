const axios = require("axios")
const URL = `https://api.sellbrite.com/v1`

// const authToken = Buffer.from(process.env.REACT_APP_ACCOUNT_TOKEN + ':' + process.env.REACT_APP_SECRET_KEY).toString('base64')
// console.log(authToken, "authtoken")

async function getProducts() {
    try {
        let response = await axios.get(URL + '/products', {
            headers: {
                "Authorization": `Basic NTgxODEyYTctZWQ5OS00YmExLTk1ZWItOGM0MzYyZGFlN2E3OmE4MmNjZjA0ZGVmMTVmM2IzYmY5Nzg3N2VmZDE2M2Zk`
            },
        })
        let data = response.data
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            return { status: true, message: data.message }
        }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

async function getInventory() {
    try {
        let response = await axios.get(URL + '/inventory', {
            headers: {
                "Authorization": `Basic NTgxODEyYTctZWQ5OS00YmExLTk1ZWItOGM0MzYyZGFlN2E3OmE4MmNjZjA0ZGVmMTVmM2IzYmY5Nzg3N2VmZDE2M2Zk`
            },
        })
        let data = response.data
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            return { status: true, message: data.message }
        }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = {
    getInventory,
    getProducts
}