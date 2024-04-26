
const post_item = JSON.parse(localStorage.getItem("post_items"));

const mainSection = document.querySelector("#blog-content");

for (let i = 0; i<post_item.length; i++) {
    let item = post_item[i];
    const section = document.createElement("section");
    const contentItem = document.createElement("p");
    const titleItem = document.createElement("h5");
    const authorItem = document.createElement("footer");

    authorItem.textContent = `Posted by: ${item.username}`;
    titleItem.textContent = item.title;
    contentItem.textContent = item.content;
    authorItem.setAttribute('class', 'blockquote-footer');
    titleItem.setAttribute('class', 'card-title');
    contentItem.setAttribute('class', 'card-text');
    
    section.appendChild(titleItem);
    section.appendChild(contentItem);
    section.appendChild(authorItem);
    mainSection.appendChild(section);
    section.setAttribute('class', 'card');

}