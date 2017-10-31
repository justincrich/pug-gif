// import Vue from 'vue';
// new Vue({
//     el: '#app',
//     data: {
//       message: "Hello There"
//     }
// });

require('./css/main.css');
import Vue from 'vue';
import moment from 'moment';


var app = new Vue({
    el:'#app',
    data:{
        title:'TopGif',
        key:'5hZltirKjMHj6tsqK2pLhacCBFdcHhVx',
        url:`https://api.giphy.com/v1/gifs/search?api_key=5hZltirKjMHj6tsqK2pLhacCBFdcHhVx&q=pug&limit=10&offset=0&rating=G&lang=en`,
        images:[]
    },
    created(){
        this.getImages();
        
        
    },
    methods:{
        getImages(){
            let vue = this;
            fetch(this.url)
            .then(res=>res.json())
            .then(json=>{
                vue.images = json.data;
                console.log(vue.images)
            }).catch(
                error=>console.log(error)
            );
        }
    },
    filters:{
        formatDate:(value)=>{
            if(!value) return '';
            return moment(String(value)).fromNow();
        }
    }
    });

