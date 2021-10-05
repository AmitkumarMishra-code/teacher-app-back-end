const axios = require("axios")

async function getList() {
    var config = {
        method: 'get',
        url: 'https://api.rezdy-staging.com/v1/products/marketplace?apiKey=69f708868ddc45eaa1f9b9fad1ddeba5&search=API specification demo supplier',
    };
    try {
        let response = await axios(config)
        return { status: true, message: response.data }
    } catch (error) {
        return { status: false, message: error.message }
    };

}

async function getRezdyProduct(productId) {

    const receivedData = []

    var config = {
        method: 'get',
        url: `https://api.rezdy-staging.com/v1/products/${productId}?apiKey=69f708868ddc45eaa1f9b9fad1ddeba5`,
        headers: {
            'Authorization': 'Basic NTgxODEyYTctZWQ5OS00YmExLTk1ZWItOGM0MzYyZGFlN2E3OmE4MmNjZjA0ZGVmMTVmM2IzYmY5Nzg3N2VmZDE2M2Zk'
        }
    };

    try {
        let response = await axios(config)
        return { status: true, message: response.data }
    } catch (error) {
        return { status: false, message: error.message }
    };
}

module.exports = {
    getList,
    getRezdyProduct
}