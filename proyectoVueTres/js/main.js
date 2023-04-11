const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
            nessage: "Hello Vue!"
        };
    },
    methods: {
        async doSearch() {
            const response = await fetch(API + 'bautistaamarillo')
            const data = await response.json()
            console.log(data)
        }
    }
});












// async function doSearch() {
//     const response = await fetch(API + 'bautistaamarillo')
//     const data = await response.json()
//     console.log(data)
// }


// const app = Vue.createApp ({
//     data() {
//         return {
//           message: 'Hello Vue!'
//         };
// },
// });

// // app.mount("#app")