window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// let token = document.head.querySelector('meta[name="csrf-token"]')

// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
// } else {
//     console.error('CSRF token not found')
// }

// let api_token = document.head.querySelector('meta[name="api-token"]')
// window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content
