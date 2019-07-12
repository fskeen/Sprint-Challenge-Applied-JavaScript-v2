// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(a) {
    // create elements
    function createElement(name, className = null, content = '', setAttribute = null, attributeValue  = null) {
    if(!name) return;
    let element = document.createElement(name);
    if(className) element.classList.add(className);
    element.textContent = content;
    if(setAttribute) element.setAttribute(`${setAttribute}`, `${attributeValue}`);
    return element;
  }

    const headerDiv = createElement("div", "header");
    const headerDate = createElement("span", "date", "SMARCH 28, 2019");
    const headerTitle = createElement("h1", undefined, "Lambda Times");
    const headerTemp = createElement("span", "temp", "98°");

    // append children

    HTMLElement.prototype.appendChildren = function () {
        for (let i = 0; i < arguments.length ; i++) {
        this.appendChild(arguments[i])
        }
    };

    headerDiv.appendChildren(headerDate, headerTitle, headerTemp);
    a.appendChild(headerDiv)
    return a;
}

const headerContainer = document.querySelector('.header-container');
Header(headerContainer);