/* La funcion de la pila o stack es similar a la de una lista enlazada, 
pero con la diferencia de que solo podemos agregar o quitar elementos del final de la lista. 
Ultimo en entrar, primero en salir. 
*/

/* Ejemplo de casos de uso:  usualmente se usan para deshacer acciones en un programa, donde el ultimo cambio que se hizo se puede deshacer al eliminarla de la pila. 
O tambien para la implementacion de la recursividad en la programacion, donde cada llamada recursiva se agrega a la pila, 
como por ejemplo en el calculo de factoriales o en la busqueda de elementos en un arbol binario.
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  pick() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.pick();
stack.pop();
stack.pick(); //2

console.log(stack.pick()); //2
