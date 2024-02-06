import _, { create } from 'lodash';
import './index.css';
import { makeYearMonthDay, unixDate } from './utils';


function component() {
    debugger
    const element = document.createElement('div');
    // heading
    const heading = document.createElement("h1");
    heading.innerHTML = "Timestamp Microservice";
    heading.classList.add("heading")

    //divider
    const divider = document.createElement("div");
    divider.classList.add("divider");
    divider.classList.add("mx-5");

    //h2
    const heading2 = document.createElement("h2")
    heading2.innerHTML = "Example Usage:"

    //unorder list
    const unOrderList = document.createElement("ul")
    const listItems = [
        { name: "dateLink", format: makeYearMonthDay },
        { name: "dateUnix", format: unixDate }
    ]

    listItems.forEach(item => {
        const li = document.createElement("li");
        const ancher = document.createElement("a");
        const format = item.format()
        ancher.setAttribute("id", item.name)
        ancher.textContent = "[project url]/api/" + format
        ancher.setAttribute("href", `http://localhost:8080/api/${format}`)

        li.appendChild(ancher)
        unOrderList.appendChild(li)
    }
    )

    // output heading
    const exampleOutputHeading = document.createElement("h2");
    exampleOutputHeading.innerText = "Example Output:";

    //current date json div
    const currentDateDiv = document.createElement("div");
    currentDateDiv.setAttribute("id", "current-date")

    // freecodecamp div
    const freeCodeCampDiv = document.createElement("div");
    freeCodeCampDiv.classList.add("freecode-camp")
    freeCodeCampDiv.innerText = "By"

    //inside ancher tag freecodecamp
    const freeCodeInsideAncher = document.createElement("a");
    freeCodeInsideAncher.setAttribute("href", "https://www.freecodecamp.org/");
    freeCodeInsideAncher.innerText = "freecodecamp.org"

    freeCodeCampDiv.appendChild(freeCodeInsideAncher)

    element.appendChild(heading)
    element.appendChild(divider)
    element.appendChild(heading2)
    element.appendChild(unOrderList)
    element.appendChild(currentDateDiv)
    element.appendChild(freeCodeCampDiv)


    return element;
}

document.body.appendChild(component());