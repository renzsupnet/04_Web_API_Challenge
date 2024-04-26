
/* Get elements from html */
const submitInput = document.querySelector('#submitBtn');

/* The handler function when the submit button is clicked, checks to see if localStorage is empty then post_item is initialized as an array
    and if not, the post_item is initialized as the current localStorage data.
*/
const handleSubmit = function (e) {
    e.preventDefault();
    let post_item;
    if(localStorage.getItem('post_items')){
        post_item = JSON.parse(localStorage.getItem('post_items'));
    }
    else{
        post_item = [];
    }

    /* Input validation for the fields to make sure none are empty */
    const username = document.querySelector('#inputUsername');
    const title = document.querySelector('#inputTitle');
    const content = document.querySelector('#inputContent');

    if (!username.value || !title.value || !content.value) {
    
    window.alert('Please check that all inputs are filled and not empty.')

    return;

    };
    /* Adding the input values as an object to post_item */
    post_item.push({
        username: username.value,
        title: title.value,
        content: content.value,
    })

    /* Saving the created object to localStorage which is translated first using JSON.stringify */
  localStorage.setItem('post_items', JSON.stringify(post_item));

  /* Redirects to blog after clicking submit */
  window.location.href = '/blog.html';
}

/* Calling the handler function using an Event Listener */
submitBtn.addEventListener('click', handleSubmit);