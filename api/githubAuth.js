import fetch from 'node-fetch'

export default async (req, res) => {
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

        
    
        const response = await fetch(github_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            },
            body: data
        })

        response.json().then(data => {
            if (data.access_token) {
                res.status(200).send(data.access_token)
            } else {
                res.status(500).json("No access token")
            }
        })
    } else {
        res.status(400).json('Bad request')
    }
}