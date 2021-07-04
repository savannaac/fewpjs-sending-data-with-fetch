// Add your code here
function submitData(name, email) {
    // const baseUrl = "http://localhost:3000/users"
    let dataParams = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name, email })
    };
    return fetch("http://localhost:3000/users", dataParams)
        .then(res => res.json())
        .then(function(object) {
            let contentData = document.createElement("h1");
            contentData.innerHTML = object.id;
            document.body.appendChild(contentData);
        })
        .catch(function(error) {
            let errorMessage = document.createElement("p");
            errorMessage.innerHTML = error.message
            document.body.appendChild(errorMessage);
        });
    // fetch(baseUrl, dataParams)
    //     .then(function(res) {
    //         return res.json();
    //     })
    //     .then(function(data) {
    //         console.log(data);
    //     });
}



