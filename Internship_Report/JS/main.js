let blogData = [];

function postBlog(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title.length === 0 || content.length === 0) {
        alert('Please enter a title and content.');
    } else {
        const blogPost = {
            title: title,
            content: content
        };

        blogData.push(blogPost);
        displayBlogs();
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        savedata();
    }
}

document.getElementById("btn").addEventListener('click', postBlog);

function handleTextarea(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault();
        const textarea = event.target;
        textarea.value = textarea.value + '\n';
    }
}

function displayBlogs() {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';

    for (let i = 0; i < blogData.length; i++) {
        const title = blogData[i].title;
        const content = blogData[i].content;

        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');

        const blogTitle = document.createElement('h2');
        blogTitle.textContent = title;

        const blogContent = document.createElement('p');
        blogContent.classList.add('blog-content');
        blogContent.textContent = content;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('data-index', i);
        editBtn.addEventListener('click', editBlog);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('data-index', i);
        deleteBtn.addEventListener('click', deleteBlog);

        blogPost.appendChild(blogTitle);
        blogPost.appendChild(blogContent);
        blogPost.appendChild(editBtn);
        blogPost.appendChild(deleteBtn);
        blogContainer.appendChild(blogPost);
    }
    savedata();
}

function editBlog(event) {
    const index = event.target.getAttribute('data-index');
    const blogPost = blogData[index];
    const title = blogPost.title;
    const content = blogPost.content;

    document.getElementById('title').value = title;
    document.getElementById('content').value = content;

    blogData.splice(index, 1);
    displayBlogs();
}

function deleteBlog(event) {
    const index = event.target.getAttribute('data-index');
    blogData.splice(index, 1);
    displayBlogs();
}

// function savedata()
// {
//     localStorage.setItem("data",blogContainer.innerHTML);
// }
// function showtask()
// {
//     // blogContainer.innerHTML = localStorage.getItem("data");
//     localStorage.getItem("data") = blogContainer.innerHTML;
// }
// showtask();









// let blogData = [];

// function displayBlogs() {
//     const blogList = document.getElementById('blog-list');
//     blogList.innerHTML = '';
//     blogData.forEach((blog, index) => {
//         const blogPost = document.createElement('div');
//         blogPost.classList.add('blog-post');

//         const title = document.createElement('h2');
//         title.textContent = blog.title;
//         blogPost.appendChild(title);

//         const content = document.createElement('p');
//         content.textContent = blog.content;
//         blogPost.appendChild(content);

//         blogList.appendChild(blogPost);

//         const editBtn = document.createElement('button');
//         editBtn.textContent = 'Edit';
//         editBtn.setAttribute('data-index', index);
//         editBtn.addEventListener('click', editBlog);
//         blogPost.appendChild(editBtn);

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.setAttribute('data-index', index);
//         deleteBtn.addEventListener('click', deleteBlog);
//         blogPost.appendChild(deleteBtn);
//     });
// }

// function postBlog(event) {
//     event.preventDefault();
//     const title = document.getElementById('title').value;
//     const content = document.getElementById('content').value;

//     if (title.length === 0 || content.length === 0) {
//         alert('Please enter a title and content.');
//     } else {
//         const blogPost = {
//             title: title,
//             content: content
//         };

//         blogData.push(blogPost);
//         displayBlogs();
//         document.getElementById('title').value = '';
//         document.getElementById('content').value = '';
//     }
// }

// function editBlog(event) {
//     const index = event.target.getAttribute('data-index');
//     const blogPost = blogData[index];
//     const newTitle = prompt('Enter new title:', blogPost.title);
//     const newContent = prompt('Enter new content:', blogPost.content);

//     if (newTitle !== null && newContent !== null) {
//         blogPost.title = newTitle;
//         blogPost.content = newContent;
//         displayBlogs();
//     }
// }

// function deleteBlog(event) {
//     const index = event.target.getAttribute('data-index');
//     blogData.splice(index, 1);
//     displayBlogs();
// }

// const form = document.getElementById('blog-form');
// form.addEventListener('submit', postBlog);
