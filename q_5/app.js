const allzone = document.getElementById('allzone'),
    currentTime = document.getElementById('currentTime')

currentTime.innerHTML = new Data().tolocaleString('en-us', { timeStyle: 'full' })
fetch('.package-lock.json')
    .then(res => res.json())
    .then(data => {
        data.map(e => {
            const option = document.createElement('option')
            option.innerHTML = e.timezone
            allzone.appendChild(option)
        })
    })
    .catch(err => {
        console.log(err);
    })

allzone.oninput = () => setInterval(() => time(), 1000)
    
function time() {
    const ctime = new Data().tolocaleString('en-us', {
        timezone:allzone.value,timeStyle:'full'
    })
    currentTime.innerHTML = ctime
}