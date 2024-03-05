var posts=["2024/03/02/2024-3-2日记/","2024/03/02/祝两会顺利召开！/","2024/03/02/第一个文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };