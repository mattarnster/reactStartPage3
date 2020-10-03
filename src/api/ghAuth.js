export function ghAuth(code) {
    return new Promise((resolve, reject) => {
        fetch('/api/githubAuth?code=' + code,{
            method: 'POST'
        }).then(data => {
            return data.text()
        }).then(text => {
            resolve(text)
        })
    })
}
