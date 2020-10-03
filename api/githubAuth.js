import fetch from 'node-fetch'

export default (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', "https://ngstartpage.uk")
    var query = req.query

    if (query.code && req.method == "POST"){
        var github_url = 'https://github.com/login/oauth/access_token'

        var data = {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: query.code
        }
    
        data = JSON.stringify(data)
    
        let response = fetch(github_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            },
            body: data
        }).then(data => {
            return data.json()
        }).then(data => {
            res.status(200).send(data)
        })
    } else {
        res.status(400).send('Bad request')
    }
}