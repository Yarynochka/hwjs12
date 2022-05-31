// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// let posts = document.getElementById('wrap');
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(postsDiv =>{
//         for (const post of postsDiv) {
//             let postDiv=document.createElement('div');
//             postDiv.classList.add('block');
//             postDiv.innerHTML=` id:${post.id} </br> title:${post.title}</br>  body:${post.body}`;
//             posts.append(postDiv);
//         }
//     });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let comments =document.getElementById('wrap');
fetch('https://jsonplaceholder.typicode.com/comments')
.then(value => value.json())
.then(commentsDiv=>{
    for (const comment of commentsDiv) {
        let commentDiv=document.createElement('div');
        commentDiv.classList.add('comment');
        comments.append(commentDiv);
        for (const elementItem in comment) {
          const divElement= document.createElement('div');
          divElement.innerText=`${elementItem} ${comment[elementItem]}`;
          comments.append(divElement);
        }
    }
});