# Ejercicio: Sistema de Gestión de Videojuegos

Imagina que estás creando un sistema para gestionar personajes de diferentes franquicias de videojuegos. Cada franquicia debe tener su propio registro de personajes creados, pero todos comparten características básicas.

## Requisitos:

1. **Clase base `Personaje`** con:
   - Atributos: `id`, `nombre`, `nivel`, `vida`, `ataque`
   - Método estático `registro` con inicialización perezosa
   - Método `registrarPersonaje()` para añadirse al registro
   - Método `mostrarInfo()` que muestre los datos del personaje

2. **Subclases** para diferentes franquicias:
   - `PersonajeFantasia` (para juegos de fantasía)
   - `PersonajeCienciaFiccion` (para juegos de sci-fi)
   - Cada una debe tener su **propio registro independiente**

3. **Características específicas** por franquicia:
   - `PersonajeFantasia`: atributo `clase` (mago, guerrero, arquero)
   - `PersonajeCienciaFiccion`: atributo `tecnologia` (armadura, nave, implantes)

4. **Funcionalidades adicionales**:
   - Método para listar todos los personajes de una franquicia
   - Método para obtener estadísticas del registro

## Tu tarea:

1. Implementa el sistema completo basándote en los conceptos aprendidos
2. Crea al menos 3 personajes por cada franquicia
3. Demuestra que cada franquicia tiene su registro independiente
4. Implementa un método que muestre "logros desbloqueados" basado en el número de personajes creados

## Pistas:

- Usa herencia con `extends` y `super()`
- Implementa el getter `static get registro()` con inicialización perezosa
- Asegúrate de que cada subclase llame a `super()` y luego registre el personaje
- Recuerda: `this.constructor.registro` accede al registro de la clase actual

## Desafío extra (opcional):
- Añade un sistema de IDs automáticos que se generen secuencialmente por franquicia
- Crea un método `combate()` que simule un combate entre dos personajes de la MISMA franquicia
- Implementa un registro GLOBAL que trackee TODOS los personajes creados (de cualquier franquicia)

## Esqueleto inicial para ayudarte:

```javascript
class Personaje {
    static get registro() {
        // Implementa la inicialización perezosa aquí
    }
    
    constructor({ id, nombre, nivel, vida, ataque }) {
        // Inicializa atributos básicos
    }
    
    registrarPersonaje() {
        // Añade este personaje al registro de su clase
    }
    
    mostrarInfo() {
        // Muestra información del personaje
    }
}

class PersonajeFantasia extends Personaje {
    constructor({ id, nombre, nivel, vida, ataque, clase }) {
        super({ id, nombre, nivel, vida, ataque });
        this.clase = clase;
        // Registra el personaje automáticamente
    }
    
    // Métodos específicos de fantasía
}

class PersonajeCienciaFiccion extends Personaje {
    constructor({ id, nombre, nivel, vida, ataque, tecnologia }) {
        // Similar a PersonajeFantasia
    }
    
    // Métodos específicos de sci-fi
}

// Crea tus personajes aquí y demuestra el funcionamiento
```

¡Buena suerte! Este ejercicio te ayudará a solidificar todos los conceptos: métodos estáticos, getters, herencia, registros independientes por clase y polimorfismo.