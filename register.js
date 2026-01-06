class Personaje{

    static get registro(){
        if(!this._registro){
            this._registro = []
        }

        return this._registro
    }

    static *listarPersonajes(){
        const reg = this.registro
        for(let i of reg){
            yield i
        }
    }

    constructor(props = {
        id,
        nombre,
        nivel,
        vida,
        ataque,
    }){
        this.id = props.id
        this.nombre = props.nombre
        this.nivel = props.nivel
        this.vida = props.vida
        this.ataque = props.ataque
        this._info = props
    }

    get registrarPersonaje(){
        const reg = this.constructor.registro
        reg.push(this)
    }

    get mostrarInfo(){
        console.log(`Información de ${this.nombre}\n`, this._info)
    }
}

class PersonajeFantasía extends Personaje{
    constructor(props, clase = "Mago"){
        if(["mago", "guerrero", "arquero"].includes(clase.toLowerCase())){
            props.clase = clase
        } else {console.log("Las clases de PersonajeFantasía son: mago, guerrero y arquero")}
        super(props)
        this.registrarPersonaje
    }
}
class PersonajeCienciaFiccion extends Personaje{
    constructor(props, tecnología = "armadura"){
        if(["armadura", "nave", "implantes"].includes(tecnología.toLowerCase())){
            props.tecnología = tecnología
        } else {console.log("Las tecnología de PersonajeCienciaFiccion son: armadura, nave, implantes")}
        super(props)
        this.registrarPersonaje
    }
}

const Lucas = new PersonajeFantasía({
    id : "001",
    nombre : "Lucas",
    nivel : 15,
    vida : 40,
    ataque : "Fuego"
}, "Mago")
const Sales = new PersonajeFantasía({
    id : "002",
    nombre : "Sales",
    nivel : 17,
    vida : 70,
    ataque : "Lluvia"
}, "arquero")
const Aldo = new PersonajeCienciaFiccion({
    id : "003",
    nombre : "Aldo",
    nivel : 7,
    vida : 90,
    ataque : "Porrazo"
})

const personajesFantasia = Array.from(PersonajeFantasía.listarPersonajes())
console.log(JSON.stringify(personajesFantasia, null, 2))