// Utilice la misma linked list para crear una double linked list

// Linked list es una estructura de datos donde cada elemento de la lista contiene un enlace al siguiente elemento.
/* ejemplos de casos de uso: listas de reproducción, listas de amigos, 
listas de tareas en las cuales una tarea esta enlazada a la tarea siguiente, blockchain donde cada nodo de la red esta enlazado a un hash al siguiente nodo. 
Tambien el boton "atras" en el navegador, que nos lleva al enlace anterior, es un ejemplo de linked list ya que cada enlace esta enlazado al enlace anterior.
*/
// Ejemplo de linked list

// Cada nodo contiene un valor y un enlace al siguiente nodo
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev; // Agregamos un enlace al nodo anterior
  }
}

// La lista enlazada contiene un nodo raíz que apunta al primer nodo de la lista
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // Creamos un nuevo nodo y como parametro le pasamos el valor que queremos agregar
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;

      return this;
    }
    this.tail.next = newNode;
    newNode.tail = this.tail; // Agregamos el enlace al nodo anterior

    return this;
  }
  travese(callback) {
    let currentNode = this.head;
    while (currentNode !== null) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }
}
const printNode = (node) =>
  console.log(`Valor: ${node.value} | next: ${node.next.value}`);
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.travese(printNode);
