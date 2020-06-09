/**
 * Returns the first element that matches/contains the specified text.
 */
function queryText(elem, text, type = "equals") {
    
    if ( !(elem instanceof HTMLElement) || !text || !["equals", "contains"].includes(type)) {
        return null;
    }
    
    var nodes = Array.from(elem.childNodes);
    
    var textNodes = nodes.filter(node => node.nodeName == "#text");
    var elemNodes = nodes.filter(node => !["#comment", "#text", "SCRIPT", "IFRAME"].includes(node.nodeName));
    
    for (let i = 0; i < textNodes.length; i++) {
        let node = textNodes[i];
        if (type == "equals") {
            if (node.textContent && node.textContent.trim() == text) {
                return node.parentElement;
            }
        }
        else if (type == "contains") {
            if (node.textContent && node.textContent.includes(text)) {
                return node.parentElement;
            }
        }
        
    }
    
    for (let i = 0; i < elemNodes.length; i++) {
        var match = queryText(elemNodes[i], text, type);
        if (match) {
            return match;
        }
    }
    
    return null;
}



/**
 * Returns an array of elements that match/contain the specified text.
 */
function queryTextAll(elem, text, type = "equals") {
    
    if ( !(elem instanceof HTMLElement) || !text || !["equals", "contains"].includes(type)) {
        return null;
    }
    
    var nodes = Array.from(elem.childNodes);
    
    var textNodes = nodes.filter(node => node.nodeName == "#text");
    var elemNodes = nodes.filter(node => !["#comment", "#text", "SCRIPT", "IFRAME"].includes(node.nodeName));
    
    var matches = [];
    
    textNodes.forEach(node => {
        if (type == "equals") {
            if (node.textContent && node.textContent.trim() == text) {
                matches.push(node.parentElement);
            }
        }
        else if (type == "contains") {
            if (nodes.textContent && nodes.textContent.includes(text)) {
                matches.push(node.parentElement);
            }
        }
    });
    
    elemNodes.forEach(node => {
        var match = queryText(node, text, type);
        if (match) {
            matches = matches.concat(match);
        }
    });
    
    return matches;
}
