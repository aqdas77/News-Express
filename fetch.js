
fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=c1992dc08117431f8053ef0ddbc648a5').then(function(response)
{
    return response.text();
}).then(function(data)
{  let json=JSON.parse(data);
    console.log(json);
})