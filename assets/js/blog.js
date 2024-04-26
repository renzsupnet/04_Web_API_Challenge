/* Get localStorage items and elements from html */
const post_item = JSON.parse(localStorage.getItem("post_items"));

const mainSection = document.querySelector("#blog-content");

/* The loop goes through all the post_items in order to render all of them */
for (let i = 0; i<post_item.length; i++) {
    let item = post_item[i];
    const section = document.createElement("section");
    const contentItem = document.createElement("p");
    const titleItem = document.createElement("h5");
    const authorItem = document.createElement("footer");

    authorItem.textContent = `Posted by: ${item.username}`;
    titleItem.textContent = item.title;
    contentItem.textContent = item.content;
    /* Bootstrap has been utilized so classes are updated as such in order to reflect a card */
    authorItem.setAttribute('class', 'blockquote-footer');
    titleItem.setAttribute('class', 'card-title');
    contentItem.setAttribute('class', 'card-text');
    /* Attaching the created elements */
    section.appendChild(titleItem);
    section.appendChild(contentItem);
    section.appendChild(authorItem);
    mainSection.appendChild(section);
    section.setAttribute('class', 'card');

}