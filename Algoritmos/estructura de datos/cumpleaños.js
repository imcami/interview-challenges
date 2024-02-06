// ejemplo de cumpleaños con estructura de datos

/*
 Ejemplo: Imagina que estas organizando una fiesta con mesas numeradas y asignando asientos a tus amigos. 
Queres registrar a tus amigos y sus mesas asignadas para que encuentren sus asientos rápidamente. 
Para esto podrias utilizar una estructura de datos como un objeto para asignar a tus amigos a sus mesas.

*/

let listaDeInvitados = {
  Anny: { mesa: 1, asiento: 3 },
  Pam: { mesa: 2, asiento: 1 },
  Rami: { mesa: 3, asiento: 2 },
  //otros invitados
};

/* Cada invitado esta asociado con un par de coordenadas (mesa, asiento) que le indican donde sentarse. 
Entonces, si quisieras encontrar a Pam, podrias buscar en la estructura de datos por su nombre y encontrar su mesa y asiento. Las coordenadas de pam serian: (2,1) 
*/

console.log(listaDeInvitados["Pam"]); // { mesa: 2, asiento: 1 }

// [Running] node "/interview-challenges/Algoritmos/estructura de datos/cumpleaños.js"
// { mesa: 2, asiento: 1 }

// [Done] exited with code=0 in 0.05 seconds
