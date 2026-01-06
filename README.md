# Sistema de Gestión de Personajes para Videojuegos

Plantilla para el manejo de personajes en un video juego con herencia y registros independientes.

## Instalación
```bash
git clone https://github.com/Miguel362-u/Sitema-de-Gesti-n-de-Personajes.git
cd CharacterManagment
```

## Uso
```
node register.js
```

## Características
- Programación Orientada a Objetos
- Herencia con `extends` y `super()`
- Métodos de clase
- Atributos con inicialización perezosa
- Registros independientes por subclases
- Generadores con yield
- Uso de Getters

## Estructura
```
CharacterManagment/
|-- register.js     # Clases y lógica principal
|-- requirements.md # Requisitos del ejercicio
|-- README.md       # Documentación
```

## Ejemplo
```javascript
const lucas = new PersonajeFantasía({
    id: "001",
    nombre: "Lucas",
    nivel: 15,
    vida: 40,
    ataque: "Fuego"
}, "Mago");
```

## Conceptos aprendidos
- Clases y herencia en JavaScript
- Métodos generadores (`function*`)
- Getters
- inicialización perezosa