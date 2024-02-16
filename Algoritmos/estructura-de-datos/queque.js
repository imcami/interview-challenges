/* La queque o cola es una estructura de datos similar a la pila, 
pero cuyo patron se llama FIFO (First In, First Out), es decir, el primer elemento en entrar es el primero en salir. 
*/
/* Ejemplo de casos de uso:  usualmente se usan para la implementacion de colas de impresion 
o en la implementacion de algoritmos de busqueda en anchura en grafos. Asi como tambien en inteligencia artificial para la busqueda de soluciones.
Otro ejemplo puede ser cuando una persona esta esperando para comprar tickets online y la app le dice que hay 10 personas en la cola, esto es porque 
el usuario entro a la app mediante el metodo queque, a medida que las personas van comprando los tickets, estas van saliendo de la cola mediante 
el metodo dequeue hasta que le toque el turno a dicho usuario. El primero que ha entrado en la lista de espera es el primero en ser atendido.
 */

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
}

// pequeña prueba de la cola creando una instancia de la clase Queue
const queue = new Queue();

queue.enqueue(1);

queue.enqueue(2);

queue.enqueue(3);

queue.peek(); //1
queue.dequeue();

queue.peek(); //2
