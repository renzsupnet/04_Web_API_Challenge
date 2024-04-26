const submitInput = document.querySelector('#submitBtn');


const handleSubmit = function (e) {
    e.preventDefault();
    let post_item;
    if(localStorage.getItem('post_items')){
        post_item = JSON.parse(localStorage.getItem('post_items'));
    }
    else{
        post_item = [];
    }
    const username = document.querySelector('#inputUsername');
    const title = document.querySelector('#inputTitle');
    const content = document.querySelector('#inputContent');

    if (!username.value || !title.value || !content.value) {
    
    window.alert('Please check that all inputs are filled and not empty.')

    return;

    };

    post_item.push({
        username: username.value,
        title: title.value,
        content: content.value,
    })

  localStorage.setItem('post_items', JSON.stringify(post_item));

  window.location.href = '/blog.html';
}

submitBtn.addEventListener('click', handleSubmit);