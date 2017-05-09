export function ghAuth(code) {
    return new Promise((resolve, reject) => {
        fetch('https://react.ngstartpage.uk/gh-auth.php?code=' + code,{
            method: 'POST'
        }).then(data => {
            return data.text()
        }).then(text => {
            console.info('resolving')
            resolve(text)
        })
    })
}