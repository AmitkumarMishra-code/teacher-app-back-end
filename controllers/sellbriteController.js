const URL = `https://api.sellbrite.com/v1`

const authToken = Buffer.from(process.env.REACT_APP_ACCOUNT_TOKEN + ':' + process.env.REACT_APP_SECRET_KEY).toString('base64')
console.log(authToken, "authtoken")

async function getProducts() {
    try {
        let response = await fetch(URL + '/products', {
            headers: {
                "Authorization": `Basic ${authToken}`
            },
        })
        let data = await response.json()
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            return { status: true, message: data.message }
        }
    } catch (error) {
        return { status: false, message: error }
    }
}

async function getInventory() {
    try {
        let response = await fetch(URL + '/inventory', {
            headers: {
                "Authorization": `Basic ${authToken}`
            },
        })
        let data = await response.json()
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            return { status: true, message: data.message }
        }
    } catch (error) {
        return { status: false, message: error }
    }
}

module.exports = {
    getInventory(),
    getProducts()
}