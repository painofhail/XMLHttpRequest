import { http } from './modules/http/index.js';

// GET
http.get('https://jsonplaceholder.typicode.com/posts/1', (err, res) => {
  if (err) {
    console.log(res);
    return;
  }

  console.log(res);
});


// POST
const testPost = {
  title: 'Test post',
  body: 'Lorem ipsum dolor sit amet consectetur.'
}

http.post('https://jsonplaceholder.typicode.com/posts', testPost, null, (err, res) => {
  if (err) {
    console.log(res);
    return;
  }

  console.log(res);  
})