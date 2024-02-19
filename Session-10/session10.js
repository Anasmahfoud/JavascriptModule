
/// Child Nodes
console.log(document.body.childNodes); /// Out: nodeslist , elements & text 
console.log(document.body.childNodes[0]);
console.log(document.querySelector("body nav > ul").childNodes);
console.log(document.querySelector("body nav > ul").childNodes[2]);

// Children
console.log(document.querySelector("section").children) ;// out : HTMLCollection just elements


/// Parent Node
console.log(document.querySelector("body nav > ul").parentNode); // Out: element


/// firstChild firstElementChild
console.log(document.querySelector("section").firstChild); // out: First child text & element
console.log(document.querySelector("section").firstElementChild); // out: first child element only

/// lastChild last

///nextSiblings nextElementSibling
console.log(document.querySelector("section p:nth-of-type(2)").nextElementSibling);


///previousSiblings previous
console.log(document.querySelector("section p:nth-of-type(2)").previousElementSibling);

/// ELEMENT_NODE
console.log(document.ELEMENT_NODE);


