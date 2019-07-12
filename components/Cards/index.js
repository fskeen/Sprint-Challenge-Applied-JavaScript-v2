// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleFetch = axios.get("https://lambda-times-backend.herokuapp.com/articles")
const cardsContainer = document.querySelector(".cards-container")

articleFetch
.then(obj => {
    // console.log(obj.data.articles)
    let articleArrays = Object.entries(obj.data.articles)
    // console.log(topics)

    // turning the object into sets of usable arrays
    articleArrays.map(array => {
        let articles = array[1]

        // adding the topic to each article so I can sort them later
        articles.map(articleObj => {
            console.log("test 1", articleObj)
            articleObj.topic = array[0]
            cardsContainer.appendChild(createCards(articleObj))
            console.log("test 2", articleObj)
            return articleObj
        });        
    })
})
.catch(error => {
    console.log(`Something's fishy. Check out this error: ${error}`)
})

function createCards (obj) {
    // creating elements

    function createElement(name, className = null, content = '', setAttribute = null, attributeValue  = null) {
        if(!name) return;
        let element = document.createElement(name);
        if(className) element.classList.add(className);
        element.textContent = content;
        if(setAttribute) element.setAttribute(`${setAttribute}`, `${attributeValue}`);
        return element;
      }

      let card = createElement("div", "card", undefined, "data-tab", obj.topic)
      let cardHeadline = createElement("div", "headline", obj.headline)
      let cardAuthorDiv = createElement("div", "author")
      let cardAuthorImgCont = createElement("div", "img-container")
      let cardAuthorImg = createElement("img", undefined, undefined, "src", obj.authorPhoto)
      let cardAuthorName = createElement("span", undefined, obj.authorName)
    
    
      // sewing them together into a layout
    
      HTMLElement.prototype.appendChildren = function () {
        for (let i = 0; i < arguments.length ; i++) {
          this.appendChild(arguments[i])
        }
      };

      card.appendChildren(cardHeadline, cardAuthorDiv);
      cardAuthorDiv.appendChildren(cardAuthorImgCont, cardAuthorName);
      cardAuthorImgCont.appendChild(cardAuthorImg);

      return card
}