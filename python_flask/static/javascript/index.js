new Vue({
    el: "#app",
    data:{
        valores: "",
    },
    methods:{
        peticiones_registro(){
            axios.post("/registro")
            .then((response)=>{
                console.log("");
            })
            .catch((error)=>{
                
            });
        },
        inicializa_valores(){
            console.log("Saludos desde el frontend");
        },
    },
    mounted(){
        this.inicializa_valores();
    },
    computed(){
    }
});