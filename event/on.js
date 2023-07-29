function on(elements, event, callback) {
    if (callback) {
        if (!Array.isArray(elements)) {
            elements = [elements];
        }
        elements.forEach(element => {
            element.addEventListener(event, function (e) {
                callback.call(this, e);
            });
        });
    }
}
// TODO: on([el1, el2, el3], "click", callback)
// TODO: on(el1, ["click", "mousenter", "mouseleave"], callback)
// TODO: on([el1, el2, el3], ["click", "mousenter", "mouseleave"], callback)

function ondomload(callback) {
    on(window, "DOMContentLoaded", callback);
}

function onwindowload(callback) {
    on(window, "load", callback);
}