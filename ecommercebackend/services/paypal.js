const axios = require('axios');
const cors = require('cors')
const express = require('express');
const app = express();
app.use(cors())

async function generateAccessToken() {
    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + "/v1/oauth2/token",
        method: 'POST',
        data: "grant_type=client_credentials",
        auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_SECRET

        }
    })

    return response.data.access_token

}

exports.createOrder = async() => {
    const accessToken = await generateAccessToken()

    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + "/v2/checkout/orders",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        data: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [{
                items: [{
                    name: "Nodejs.course",
                    description: "Nodejs course with mongodb",
                    quantity: 1,
                    unit_amount: {
                        currency_code: "USD",
                        value: "100.00"
                    }
                }],
                amount: {
                    currency_code: "USD",
                    value: "100.00",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "100.00",

                        }
                    }
                },
            }],
            application_context: {
                return_url: process.env.PAYPAL_URL + "/order-success",
                cancel_url: process.env.PAYPAL_URL + "/order-cancel"


            },
        })
    })
    return response.data.links.find(link => link.rel === 'approve').href
}

this.createOrder().then(result => console.log(result))