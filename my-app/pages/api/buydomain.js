import axios from 'axios';
export default async (req, res) => {
    const { site } = req.query;
    if (!site) {
        return res.status(400).json({ error: "Site is required" });
    }
    const data = JSON.parse(req.body)
    await axios({
        method: 'post',
        url: 'https://api.ote-godaddy.com/v1/domains/purchase',
        headers: { 'Authorization': 'sso-key 3mM44UbCEmVCxs_D7Dox3fhW8K1yAN8rqkW3m:5fJmDDSTwrFopJ81Xd7NJF' },
        data: {
            "consent": {
                "agreedAt": "2021-02-13T20:46:12Z",
                "agreedBy": "185.97.92.118",
                "agreementKeys": [
                    "DNRA"
                ]
            },
            "contactAdmin": {
                "addressMailing": {
                    "address1": data['contactAdmin-adress1'],
                    "address2": data['contactAdmin-adress2'],
                    "city": data['contactAdmin-city'],
                    "country": "US",
                    "postalCode": data['contactAdmin-postalcode'],
                    "state": data['contactAdmin-state']
                },
                "email": data['contactAdmin-email'],
                "fax": data['contactAdmin-fax'],
                "jobTitle": data['contactAdmin-jobTitle'],
                "nameFirst": data['contactAdmin-nameFirst'],
                "nameLast": data['contactAdmin-nameLast'],
                "nameMiddle": data['contactAdmin-nameMiddle'],
                "organization": data['contactAdmin-organization'],
                "phone": data['contactAdmin-phone'],
            },
            "contactBilling": {
                "addressMailing": {
                    "address1": data['contactBilling-adress1'],
                    "address2": data['contactBilling-adress2'],
                    "city": data['contactBilling-city'],
                    "country": "US",
                    "postalCode": data['contactBilling-postalcode'],
                    "state": data['contactBilling-state']
                },
                "email": data['contactBilling-email'],
                "fax": data['contactBilling-fax'],
                "jobTitle": data['contactBilling-jobTitle'],
                "nameFirst": data['contactBilling-nameFirst'],
                "nameLast": data['contactBilling-nameLast'],
                "nameMiddle": data['contactBilling-nameMiddle'],
                "organization": data['contactBilling-organization'],
                "phone": data['contactBilling-phone']
            },
            "contactRegistrant": {
                "addressMailing": {
                    "address1": data['contactRegistrant-address1'],
                    "address2": data['contactRegistrant-address2'],
                    "city": data['contactRegistrant-city'],
                    "country": "US",
                    "postalCode": data['contactRegistrant-postalcode'],
                    "state": data['contactRegistrant-state']
                },
                "email": data['contactRegistrant-email'],
                "fax": data['contactRegistrant-fax'],
                "jobTitle": data['contactRegistrant-jobTitle'],
                "nameFirst": data['contactRegistrant-nameFirst'],
                "nameLast": data['contactRegistrant-nameLast'],
                "nameMiddle": data['contactRegistrant-nameMiddle'],
                "organization": data['contactRegistrant-organization'],
                "phone": data['contactRegistrant-phone']
            },
            "contactTech": {
                "addressMailing": {
                    "address1": data['contactTech-adress1'],
                    "address2": data['contactTech-address2'],
                    "city": data['contactTech-city'],
                    "country": data['contactTech-country'],
                    "postalCode": data['contactTech-postalCode'],
                    "state": data['contactTech-state']
                },
                "email": data['contactTech-email'],
                "fax": data['contactTech-fax'],
                "jobTitle": data['contactTech-jobTitle'],
                "nameFirst": data['contactTech-nameFirst'],
                "nameLast": data['contactTech-nameLast'],
                "nameMiddle": data['contactTech-nameMiddle'],
                "organization": data['contactTech-organization'],
                "phone": data['contactTech-phone']
            },
            "domain": site,
            "nameServers": [
                "ns50" + site
            ],
            "period": 1,
            "privacy": false,
            "renewAuto": true
        }
    }).then(function (response) {
        res.status(200).json({
            domain: response.data,
            error: 'no'
        })
    })
        .catch(function (error) {
            console.log(error)
            res.status(400).json({ error: 'yes' })
        });


}