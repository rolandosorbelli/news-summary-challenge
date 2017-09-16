var newsList = document.getElementById("newsList");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?api-key=e6062650-5251-460d-92d4-ef533773637f?show-fields=body');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderNews(ourData);
    console.log(ourData);
};
ourRequest.send();

function renderNews(data) {
    var htmlString = '';

    for (var i = 0; i < 10; i++) {
        htmlString += '<li><a href=' + data.response.results[i].webUrl + '>' + data.response.results[i].webTitle + '</li>';
    }

    newsList.insertAdjacentHTML('afterend', htmlString);
};