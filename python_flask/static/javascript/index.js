new Vue({
    el: "#app",
    data:{
        valores: "",
        nombre: "",
        correo: "",
        paswor: "", 
    },
    methods:{
        peticiones_registro(){
            datos_formulario = {
                nombre_peticion = this.nombre,
                correo_peticion = this.correo,
                paswor_peticion = this.paswor
            };
            axios.post("/registro",datos_formulario)
            .then((response)=>{
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
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