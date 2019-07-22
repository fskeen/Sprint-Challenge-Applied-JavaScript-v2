// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = axios.get("https://lambda-times-backend.herokuapp.com/topics")
const topicsContainer = document.querySelector(".topics")

tabs
    .then(a => {
        // create elements
        function createElement(name, className = null, content = '', setAttribute = null, attributeValue  = null) {
            if(!name) return;
            let element = document.createElement(name);
            if(className) element.classList.add(className);
            element.textContent = content;
            if(setAttribute) element.setAttribute(`${setAttribute}`, `${attributeValue}`);
            return element;
          }

        a.data.topics.map(topic => {
            let topicBar = createElement("div", "tab", topic)
            return topicsContainer.appendChild(topicBar)
        });
    })
    .catch(error => {
        console.log(`There's an error here. Check it out: ${error}`)
    })


