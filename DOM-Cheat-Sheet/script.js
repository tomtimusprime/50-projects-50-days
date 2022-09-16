//Dom Manipulation Notes
//There are 5 ways to select items in the DOM

//1. getElementById();
//2. getElementByClassName();
//3. getElementsByTagName(); Returns an HTMLElement List
//4. querySelector();
//5. querySelectorAll(); Returns a nodelist

//First DOM technique to master DOM manipulation - web dev simplified https://www.youtube.com/watch?v=y17RuWkWdn8 (Learn DOM Manipulation in 18 minutes)

//1. Adding elements to a page:
const body = document.body;
//The append() method can add a plain o'l string to the page
body.append('Hello World'); 
//The appendChild() method requires a node or an element like divs, or spans or anchor tags to add to the page.
const div = document.createElement("div");
const p = document.createElement("p");
p.innerText = "This is a paragprah tag."
div.appendChild(p);
body.appendChild(div);
//The append() method is much more versatile because you can add multiple things to the page with one method call.

//2. Creating elements to add to a page;
const newElement = document.createElement('span'); //This only creates the element, it doesn't actually add it to the page yet.
body.appendChild(newElement);

//3. Manipulating the text of an element
//innerText vs textContent - textContent shows the spacing and formatting of the text within an element. innerText ignores everything
//except for the string value
console.log(p.textContent);
console.log(p.innerText);

//4. Removing an element
p.remove();
console.log(`p tag removed.`);

