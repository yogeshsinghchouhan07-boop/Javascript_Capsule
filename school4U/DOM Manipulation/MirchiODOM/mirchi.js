// window object is the global object in the browser environment. It represents the browser window and provides various properties and methods to interact with the browser and manipulate the DOM (Document Object Model).
//BOM (Browser Object Model) is a collection of objects provided by the browser that allows JavaScript to interact with the browser and manipulate the web page. It includes objects like window, document, navigator, screen, history, location, and more. These objects provide properties and methods to access and manipulate various aspects of the browser and the web page, such as handling events, manipulating the DOM, controlling navigation, and accessing browser information.
// methods and properties to traverse the document tree, modify elements, handle events, and create new elements on the DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree-like structure, where each element, attribute, and text node is represented as an object. The DOM allows JavaScript to access and manipulate the content, structure, and style of a web page dynamically. It providesfly.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

// when a webpage loads, the browser creates a window object that represents the browser window. The window object provides various properties and methods to interact with the browser and manipulate the DOM. For example, you can use the window object to access the document object, which represents the web page's content, and manipulate it using DOM methods. You can also use the window object to handle events, control navigation, and access browser information. Overall, the window object is a fundamental part of the BOM and plays a crucial role in enabling JavaScript to interact with the browser and manipulate web pages dynamically.
// console.log(document)
// console.dir(document)
//queryselectorall() is used to select all elements that match a specified CSS selector and returns a static NodeList of those elements. It allows you to select multiple elements based on their class, id, tag name, or any other valid CSS selector. For example, you can use document.querySelectorAll('.my-class') to select all elements with the class "my-class" and manipulate them using JavaScript. The returned NodeList can be iterated over using methods like forEach() or accessed using index notation to modify the selected elements as needed.  
//diierence between node list and html collection
//NodeList and HTMLCollection are both collections of DOM elements, but they have some differences. A NodeList is a collection of nodes that can include elements, text nodes, and other types of nodes. It is returned by methods like querySelectorAll() and can be static or live depending on how it was created. An HTMLCollection, on the other hand, is a collection of only element nodes and is always live, meaning it updates automatically when the DOM changes. It is returned by methods like getElementsByTagName() and getElementsByClassName(). In summary, NodeList can contain various types of nodes and can be static or live, while HTMLCollection only contains element nodes and is always live.
//html collection
let a=document.getElementsByTagName('div');
console.log(a)
//node list
let b=document.querySelectorAll('div');
console.log(b)
// here node list is static and html collection is live. if we add new div element in the html then html collection will update automatically but node list will not update automatically.
//getElementsByClassName()
let c=document.getElementsByTagName('div');
console.log(c)

let d=document.getElementById('country');
console.log(d)
//id cant be same formultiple elements but class can be same
let g=document.getElementsByClassName('country');
console.log(g)
//querySelector()
// it selects the first element that matches a specified CSS selector and returns it as an Element object. It allows you to select an element based on its class, id, tag name, or any other valid CSS selector. For example, you can use document.querySelector('.my-class') to select
let e=document.querySelector('.country');
console.log(e)
//querySelectorAll()
// it selects all elements that match a specified CSS selector and returns a static NodeList of those elements. It allows you to select multiple elements based on their class, id, tag name, or any other valid CSS selector. For example, you can use document.querySelectorAll('.my-class') to select
let f=document.querySelectorAll('.country');
console.log(f) 
//SELECTION OF ELEMENTS
//1. by tag name
//2. by class name
//3. by id
//4. by query selector
//  let h=document.querySelector('#country');
//  console.log(h)
 

 //Manipulation of HTML
 //1. innerHTML
 //2. textContent
 //3. innerText
 //innerText and textContent are similar but innerText takes into account the styling and layout of the elements, while textContent returns the raw text content of the element without any formatting. innerHTML allows you to get or set the HTML content of an element, while textContent and innerText only deal with the text content. When you set innerHTML, it can potentially execute any scripts included in the HTML, while textContent and innerText will treat it as plain text. Therefore, it's important to use innerHTML with caution to avoid security risks.
//  let i=document.querySelector('#country');
//  console.log(i.innerHTML);
//  console.log(i.textContent);
//  console.log(i.innerText);
//  i.innerText='India\n is a country in South Asia.';
//  console.log(i.innerHTML);
//  console.log(i.textContent);
//  console.log(i.innerText);
//  //element changing
//  let j=document.querySelector('#country');
//  j.innerHTML='<h1>India</h1>';
//     console.log(j.innerHTML);
    //inserting element
    
    
    //append() method is used to insert content at the end of an element. It allows you to add new elements, text, or HTML content to the end of the selected element. For example, you can use element.append('<p>New Paragraph</p>') to add a new paragraph at the end of the selected element. The append() method does not replace the existing content but rather adds to it, making it a useful tool for dynamically updating the content of a web page.
   
    
    