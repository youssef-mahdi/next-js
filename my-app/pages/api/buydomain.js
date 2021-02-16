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
                "agreedAt": "2021-02-16T20:46:12Z",
                "agreedBy": "185.97.92.118",
                "agreementKeys": [
                    "DNRA"
                ]
            },
            "contactAdmin": {
                "addressMailing": {
                    "address1": data['contactAdminadress1'],
                    "address2": data['contactAdmin-adress2'],
                    "city": data['contactAdmincity'],
                    "country": data['contactAdmincountry'],
                    "postalCode": data['contactAdminpostalcode'],
                    "state": data['contactAdminstate']
                },
                "email": data['contactAdminemail'],
                "fax": data['contactAdmin-fax'],
                "jobTitle": data['contactAdmin-jobTitle'],
                "nameFirst": data['contactAdminnameFirst'],
                "nameLast": data['contactAdminnameLast'],
                "nameMiddle": data['contactAdmin-nameMiddle'],
                "organization": data['contactAdmin-organization'],
                "phone": data['contactAdminphone'],
            },
            "contactBilling": {
                "addressMailing": {
                    "address1": data['contactBillingadress1'],
                    "address2": data['contactBilling-adress2'],
                    "city": data['contactBillingcity'],
                    "country": data['contactBillingcountry'],
                    "postalCode": data['contactBillingpostalcode'],
                    "state": data['contactBillingstate']
                },
                "email": data['contactBillingemail'],
                "fax": data['contactBilling-fax'],
                "jobTitle": data['contactBilling-jobTitle'],
                "nameFirst": data['contactBillingnameFirst'],
                "nameLast": data['contactBillingnameLast'],
                "nameMiddle": data['contactBilling-nameMiddle'],
                "organization": data['contactBilling-organization'],
                "phone": data['contactBillingphone']
            },
            "contactRegistrant": {
                "addressMailing": {
                    "address1": data['contactRegistrantaddress1'],
                    "address2": data['contactRegistrant-address2'],
                    "city": data['contactRegistrantcity'],
                    "country": data['contactRegistrantcountry'],
                    "postalCode": data['contactRegistrantpostalcode'],
                    "state": data['contactRegistrantstate']
                },
                "email": data['contactRegistrantemail'],
                "fax": data['contactRegistrantfax'],
                "jobTitle": data['contactRegistrant-jobTitle'],
                "nameFirst": data['contactRegistrantnameFirst'],
                "nameLast": data['contactRegistrantnameLast'],
                "nameMiddle": data['contactRegistrant-nameMiddle'],
                "organization": data['contactRegistrant-organization'],
                "phone": data['contactRegistrantphone']
            },
            "contactTech": {
                "addressMailing": {
                    "address1": data['contactTechadress1'],
                    "address2": data['contactTech-address2'],
                    "city": data['contactTechcity'],
                    "country": data['contactTechcountry'],
                    "postalCode": data['contactTechpostalCode'],
                    "state": data['contactTechstate']
                },
                "email": data['contactTechemail'],
                "fax": data['contactTech-fax'],
                "jobTitle": data['contactTech-jobTitle'],
                "nameFirst": data['contactTechnameFirst'],
                "nameLast": data['contactTechnameLast'],
                "nameMiddle": data['contactTech-nameMiddle'],
                "organization": data['contactTech-organization'],
                "phone": data['contactTechphone']
            },
            "domain": site,
            "nameServers": [
                "ns50." + site
            ],
            "period": 1,
            "privacy": false,
            "renewAuto": true
        }
    }).then(function (response) {
        res.status(200).json({
            domain: response.data,
            error: process.env.fail
        })
        console.log(response)
    })
        .catch(function (error) {
            console.log(error)
            res.status(400).json({ error: process.env.success})
        });


}