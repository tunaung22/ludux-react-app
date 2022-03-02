import axios from 'axios';

// export function fetchProductList() {
//   return new Promise<{}>((resolve) => {
//     const response = fetch('http://127.0.0.1:8000/api/products/');
//     console.log('response>>>', response);
//     return response;
//   });
// }

export function fetchProductList() {
  const response = axios
    .get('http://127.0.0.1:8000/api/products/')
    .then((res) => {
      return res;
    });
  return response;
}
