import axios from 'axios';
export default async (req, res) => {
    const { site } = req.query;
    if (!site) {
        return res.status(400).json({ error: "Site is required" });
    }
    await axios({
        method: 'get',
        url: 'https://api.ote-godaddy.com/v1/domains/available?domain=' + site + '&checkType=FAST&forTransfer=false',
        headers: { 'Authorization': 'sso-key 3mM44UbCEmVCxs_D7Dox3fhW8K1yAN8rqkW3m:5fJmDDSTwrFopJ81Xd7NJF' }
    }).then(function (response) {
        res.status(200).json({
            domain: response.data,
            error: 'no'
        })
    })
        .catch(function (error) {
            res.status(400).json({ error: 'yes' })
        });
}