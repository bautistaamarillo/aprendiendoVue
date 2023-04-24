const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
            search: null,
            result: null,
            error: null,
            favorites: new Map()
        };
    },

    created() {
        const savedFavorites = JSON.parse(window.localStorage.getItem("favorites"))
        // if (savedFavorites!= null){
            if (savedFavorites?.length){
                const favorites = new Map(savedFavorites.map(favorite => [favorite.login, favorite]))
                this.favorites = favorites
            }
        // }
    
    },

    computed: {
        isFavorite(){
            return this.favorites.has(this.result.login)
        },
        allFavorites(){
            return Array.from(this.favorites.values())
        }
    },


    methods: {
        async doSearch() {
            this.result = this.error = null

            const foundFavorites = this.favorites.get(this.search)

            if(!!foundFavorites)
            return this.result = foundFavorites




            try {
                const response = await fetch(API + this.search)
                if (response.status = 403)
                    throw new Error("Server is not available.")
                if (!response.ok)
                    throw new Error("User not found")
                const data = await response.json()
                console.log(data)
                this.result = data
            }
            catch (error) {
                this.error = error
            }
            finally {
                this.search = null
            }
        },

        addFavorite(){
            this.favorites.set(this.result.login, this.result)
            this.updateStorage()

        },
        removeFavorite(){
            this.favorites.delete(this.result.login)
            this.updateStorage()
        },
        updateStorage(){
            window.localStorage.setItem('favorites',JSON.stringify(this.allFavorites))
        },

        showFavorite(favorite){
            this.result = favorite
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