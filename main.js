// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let posts = document.getElementById('wrap');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(postsDiv =>{
        for (const post of postsDiv) {
            let postDiv=document.createElement('div');
            postDiv.innerText=`${post.id} ${post.title} ${post.body}`;
            posts.append(postsDiv);
        }
    });


















//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments