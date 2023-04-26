
const app = Vue.createApp({
    data(){
        return{
            message: 'Hollo Vue'
        }
    }
}).mount('#app')

/* de las siguientes maneras es como se hace pero para las versiones menores a 3 */
/* const app = new Vue({
    data(){
        return {
            message: 'Hello Vue'
        }
    }
}).mount('# app')



 */
/* const app = new Vue({
    /* aqui debe ir lo que vallamos a trabajar con Vue 
    el: '#app',
    data() {
        return {
            nombre:'Jhon hernandez'
        }
    },

    
})
app.mount('#app')

console.log(data()); */