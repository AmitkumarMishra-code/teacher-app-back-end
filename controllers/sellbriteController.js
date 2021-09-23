const axios = require("axios")

// const authToken = Buffer.from(process.env.REACT_APP_ACCOUNT_TOKEN + ':' + process.env.REACT_APP_SECRET_KEY).toString('base64')
// console.log(authToken, "authtoken")

async function getProducts() {
    var config = {
        method: 'get',
        url: 'https://api.sellbrite.com/v1/products',
        headers: {
            'Authorization': 'Basic NTgxODEyYTctZWQ5OS00YmExLTk1ZWItOGM0MzYyZGFlN2E3OmE4MmNjZjA0ZGVmMTVmM2IzYmY5Nzg3N2VmZDE2M2Zk'
        }
    };
    try {
        let response = await axios(config)
        return { status: true, message: response.data }
    } catch (error) {
        return { status: false, message: error.message }
    });

}

async function getInventory() {

    const receivedData = []

    var config = {
        method: 'get',
        url: 'https://api.sellbrite.com/v1/inventory',
        headers: {
            'Authorization': 'Basic NTgxODEyYTctZWQ5OS00YmExLTk1ZWItOGM0MzYyZGFlN2E3OmE4MmNjZjA0ZGVmMTVmM2IzYmY5Nzg3N2VmZDE2M2Zk'
        }
    };

    try {
        let response = await axios(config)
        return { status: true, message: response.data }
    } catch (error) {
        return { status: false, message: error.message }
    });
}

module.exports = {
    getInventory,
    getProducts
}