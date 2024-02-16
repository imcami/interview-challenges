/* La funcion HashTable es una estructura de datos que utiliza una funcion hash para almacenar y recuperar valores de una forma eficiente. 
Una funcion hash es una funcion matematica que toma un valor y lo convierte en otro que lo podemos llamar clave o hash. 
Casos de uso:  criptografia, seguridad, busqueda de datos, etc. En una red social, se puede utilizar para recuperar y almacenar informacion de los propios usuarios
*/

class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }
  //calcular el indice de la tabla hash
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  // añadir un nuevo valor a la tabla que se de como parametro
  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  // recuperar el valor asociado a una clave dada en el metodo hash
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return undefined; // Si no hay elementos en el bucket, retornar undefined
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1]; // Retornar el valor asociado a la clave
      }
    }
    return undefined; // Retornar undefined si la clave no se encuentra en el bucket
  }
}
