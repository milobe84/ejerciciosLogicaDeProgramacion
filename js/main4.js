
// Arrais
/* 
let numeros = [1, 4, 3, 2];
console.log(numeros);

// Elimina el ultimo elemento
numeros.pop();
console.log(numeros);

// elimina el primer elemento
numeros.shift()
console.log(numeros);

// añadir al principio
numeros.unshift(1)
console.log(numeros);

// añadir al final
numeros.push(2)
console.log(numeros);

// Modificar
numeros[2] = 7
console.log(numeros);

// Ordenar ascendente y descendente
numeros.sort()
console.log(numeros);

numeros.reverse()
console.log(numeros)




let frutas = ['manzana', 'pera', 'uva']
console.log(frutas) */


/* 
    const agenda = {};

    const validarTelefono = (telefono) => /^[0-9]{1,11}$/.test(telefono);

    const mostrarMenu = () => {
      const opcion = prompt(
        "--- Menú de Opciones ---\n" +
        "1. Insertar contacto\n" +
        "2. Buscar contacto\n" +
        "3. Actualizar contacto\n" +
        "4. Eliminar contacto\n" +
        "5. Mostrar todos los contactos\n" +
        "6. Salir\n" +
        "Elige una opción:"
      );

      switch (opcion) {
        case '1': insertarContacto(); break;
        case '2': buscarContacto(); break;
        case '3': actualizarContacto(); break;
        case '4': eliminarContacto(); break;
        case '5': mostrarContactos(); break;
        case '6': alert("Programa terminado."); break;
        default: alert("Opción no válida. Inténtalo de nuevo."); mostrarMenu();
      }
    };

    const insertarContacto = () => {
      const nombre = prompt("Introduce el nombre del contacto:");
      const telefono = prompt("Introduce el número de teléfono (máx 11 dígitos):");

      if (!validarTelefono(telefono)) {
        alert("Número de teléfono inválido. Debe contener solo dígitos y tener un máximo de 11 dígitos.");
        insertarContacto();
        return;
      }

      agenda[nombre] = telefono;
      alert(`Contacto ${nombre} añadido con el número ${telefono}.`);
      mostrarMenu();
    };

    const buscarContacto = () => {
      const nombre = prompt("Introduce el nombre del contacto a buscar:");
      if (agenda[nombre]) {
        alert(`Contacto encontrado: ${nombre} - ${agenda[nombre]}`);
      } else {
        alert("Contacto no encontrado.");
      }
      mostrarMenu();
    };

    const actualizarContacto = () => {
      const nombre = prompt("Introduce el nombre del contacto a actualizar:");
      if (agenda[nombre]) {
        const telefono = prompt("Introduce el nuevo número de teléfono (máx 11 dígitos):");
        if (!validarTelefono(telefono)) {
          alert("Número de teléfono inválido. Debe contener solo dígitos y tener un máximo de 11 dígitos.");
          actualizarContacto();
          return;
        }
        agenda[nombre] = telefono;
        alert(`Contacto ${nombre} actualizado con el número ${telefono}.`);
      } else {
        alert("Contacto no encontrado.");
      }
      mostrarMenu();
    };

    const eliminarContacto = () => {
      const nombre = prompt("Introduce el nombre del contacto a eliminar:");
      if (agenda[nombre]) {
        delete agenda[nombre];
        alert(`Contacto ${nombre} eliminado.`);
      } else {
        alert("Contacto no encontrado.");
      }
      mostrarMenu();
    };

    const mostrarContactos = () => {
      let mensaje = "Contactos en la agenda:\n";
      for (const [nombre, telefono] of Object.entries(agenda)) {
        mensaje += `${nombre} - ${telefono}\n`;
      }
      if (mensaje === "Contactos en la agenda:\n") {
        mensaje = "No hay contactos en la agenda.";
      }
      alert(mensaje);
      mostrarMenu();
    };

    // Mostrar el menú inicial
    window.onload = mostrarMenu; */
 

    const persona = {
        nombre: ["Bob", "Smith"],
        edad: 32,
        genero: "masculino",
        intereses: ["música", "esquí"],
        bio: function () {
          alert(
            `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y ${this.intereses[1]}.`,
          );
        },
        saludo: function () {
          alert("Hola, Soy " + this.nombre[0] + ". ");
        },
      };


      console.log(persona.nombre);
      console.log(persona.nombre[0]) 
      console.log(persona.edad);
      console.log(persona.intereses[1]);
      console.log(persona.bio());
      console.log(persona.saludo());

      persona["ojos"] = "avellana";
      persona.despedida = function () {
        alert("¡Adiós a todos!");
      };

      console.log(persona);

let division = 45 / 8;
console.log(division);
console.log(division.toFixed(2));


const player = {
  name: "Manz",       // Nombre del jugador
  life: 4,            // Cantidad de vida actual
  totalLife: 6,       // Máximo de vida posible
  toString: function() {
    return `${this.name} (${this.life}/${this.totalLife})`;
  }
};

console.log("Mi jugador es " + player);       // "Mi jugador es Manz (4/6)"