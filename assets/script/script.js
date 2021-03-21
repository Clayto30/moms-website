fetch(`https://api.giphy.com/v1/gifs/search?q=unicorn&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN`)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        let num2 = Math.floor(Math.random() * 50);
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[num2].images.fixed_height.url);
        $("#unicorn").append(gifImg);
    });

$("button").on("click", function() {
    $("#unicorn").empty();
    fetch(`https://api.giphy.com/v1/gifs/search?q=unicorn&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN`)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        let num2 = Math.floor(Math.random() * 50);
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[num2].images.fixed_height.url);
        $("#unicorn").append(gifImg);
    });
});