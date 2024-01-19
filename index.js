// https://newsapi.org/v2/top-headlines?country=in&apiKey=c1992dc08117431f8053ef0ddbc648a5
console.log("welcome");

let newsaccordion = document.getElementById('newsaccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1992dc08117431f8053ef0ddbc648a5`, true);

xhr.onload = ()=> {
    if (this.status === 200) {
        let newsobj = JSON.parse(this.responseText);
        console.log(newsobj);
        let article = newsobj.articles;
        let html = '';
        article.forEach(function (element, index) {
            let heading = article[index].title;
            let newsbody = article[index].content;
            let news_url=article[index].url;
            let newsaccordion=document.getElementById('newsaccordion');
            html += `  <div class="card my-2">
            <div class="card-header" id="heading${index}">
              <h5 class="mb-0" display="flex>
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                  ${heading}
                </button>
              </h5>
            </div>
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
              <div class="card-body">
              ${newsbody} <a href="${news_url}" target="_blank">Read more...</a>
                </div>
            </div>
          </div>`
        });
        newsaccordion.innerHTML=html;
    }
    else
    {
      console.log("Error status :",this.status);
      document.write('An Error Occured');
    }


}
xhr.send();
