export function ghContributors() {
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/repos/mattarnster/reactStartPage3/contributors',{
            method: 'GET'
        }).then(data => {
            return data.text();
        }).then(text => {
            resolve(text)
        })
    })
}
