const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {

            let body = document.body;

            let hr = document.createElement('hr');
            body.appendChild(hr);

            for (let user of data) {
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');

                pId.innerText = `user ID: ${user.id}`;
                pName.innerText = `user Name: ${user.name}`;
                pWebsite.innerHTML = `user URL: ${user.pwebsite} <br />----------`;


                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);
            }
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
}

const scrollTOEndOfPage = () => {

    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;

    let scrollTop = d.scrollTop;

    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    if (sumScrollTopClientHeight >= scrollHeight) {
        getData();

    }
}


window.addEventListener('scroll', scrollTOEndOfPage);