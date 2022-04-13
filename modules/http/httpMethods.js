const httpMethods = () => ({
  get(url, callback) {
    try {
      const xhr = new XMLHttpRequest();
      console.log('readyState: UNSENT');
    
      xhr.addEventListener('readystatechange', () => {
        switch (xhr.readyState) {
          case 1 : console.log('readyState: OPENED'); break;
          case 2 : console.log('readyState: HEADERS_RECIEVED'); break;
          case 3 : console.log('readyState: LOADING'); break;
          case 4 : console.log('readyState: DONE'); break;
          default: null;
        }
      });
    
      xhr.open('GET', url);
      xhr.send();  
    
      xhr.addEventListener('load', () => {
        if (Math.floor(xhr.status / 100) !== 2) { // если статус не в диапазоне 200...299, то произошла ошибка
          callback(`Error. ${xhr.status}: ${xhr.statusText}`, xhr)
          return;
        } 
        console.log(`Status: ${xhr.status}. Recieved ${xhr.response.length} bytes`);
        callback(null, JSON.parse(xhr.responseText))
      })
    
      xhr.addEventListener('error', () => {
        console.log(`Connection Error`);
      })
      
    } catch (error) {
      callback(error, null)
    }
  },
  post(url, body, headers, callback) {
    try {
      const xhr = new XMLHttpRequest();
      console.log('readyState: UNSENT');
    
      xhr.addEventListener('readystatechange', () => {
        switch (xhr.readyState) {
          case 1 : console.log('readyState: OPENED'); break;
          case 2 : console.log('readyState: HEADERS_RECIEVED'); break;
          case 3 : console.log('readyState: LOADING'); break;
          case 4 : console.log('readyState: DONE'); break;
          default: null;
        }
      });
    
      xhr.open('POST', url);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }
      
      xhr.send(JSON.stringify(body));  
    
      xhr.addEventListener('load', () => {
        if (Math.floor(xhr.status / 100) !== 2) { // если статус не в диапазоне 200...299, то произошла ошибка
          callback(`Error. ${xhr.status}: ${xhr.statusText}`, xhr)
          return;
        } 
        console.log(`Status: ${xhr.status}. Recieved ${xhr.response.length} bytes`);
        callback(null, JSON.parse(xhr.responseText))
      })
    
      xhr.addEventListener('error', () => {
        console.log(`Connection Error`);
      })
      
    } catch (error) {
      callback(error, null)
    }
  }  
})

export default httpMethods();
