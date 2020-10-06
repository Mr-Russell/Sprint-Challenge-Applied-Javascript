// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    //console.log(response);

    const bootstrapArticles = response.data.articles.bootstrap;
    //console.log(bootstrapArticles);
    bootstrapArticles.forEach(item =>{
        cardsContainer.appendChild(articleCard(item))
    })

    const jsArticles = response.data.articles.javascript;
    //console.log(jsArticles);
    jsArticles.forEach(item =>{
        cardsContainer.appendChild(articleCard(item))
    })

    const jqueryArticles = response.data.articles.jquery;
    jqueryArticles.forEach(item =>{
        cardsContainer.appendChild(articleCard(item))
    })

    const nodeArticles = response.data.articles.node;
    nodeArticles.forEach(item =>{
        cardsContainer.appendChild(articleCard(item))
    })

    const techArticles = response.data.articles.technology;
    techArticles.forEach(item =>{
        cardsContainer.appendChild(articleCard(item))
    })

})
// .then(response =>{
//     const jsArticles = response.data.articles.javascript;
//     //console.log(jsArticles);
//     jsArticles.forEach(item =>{
//         cardsContainer.appendChild(articleCard(item))
//     })

// })
// .then(response =>{
    // const jqueryArticles = response.data.articles.jquery;
    // jqueryArticles.forEach(item =>{
    //     cardsContainer.appendChild(articleCard(item))
    // })

// })
// .then(response =>{
    // const nodeArticles = response.data.articles.node;
    // nodeArticles.forEach(item =>{
    //     cardsContainer.appendChild(articleCard(item))
    // })

// })
// .then(response =>{
    // const techArticles = response.data.articles.technology;
    // techArticles.forEach(item =>{
    //     cardsContainer.appendChild(articleCard(item))
    // })

// })
.catch(error =>{
    console.log(error)
})


function articleCard(article){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorInfo = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');
    
    card.classList.add('card');
    headline.classList.add('headline');
    authorInfo.classList.add('author');
    imgContainer.classList.add('img-container');

    authorImg.src = article.authorPhoto;
    
    headline.textContent = article.headline;
    authorName.textContent = `By ${article.authorName}`;

    card.appendChild(headline);
    card.appendChild(authorInfo);
    authorInfo.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    authorInfo.appendChild(authorName);

    return card;
}