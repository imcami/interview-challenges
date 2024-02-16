class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null; // Verificar si el bucket está vacío
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }
    return null; // Devolver null si la clave no se encuentra en el bucket
  }
}

// Crear una instancia de HashTable
const myHashTable = new HashTable(10);

// Agregar usuarios a la tabla hash con el método insert
myHashTable.insert("joaquinn", {
  name: "Joaquin",
  age: 25,
  email: "joaquin@gmail.com",
});

myHashTable.insert("pam", {
  name: "Pam",
  age: 28,
  email: "pam123@gmail.com",
});

myHashTable.insert("ramilin", {
  name: "Rami",
  age: 30,
  email: "kamram@gmail.com",
});

// Obtener información de un usuario con el método get
console.log(myHashTable.get("pam")); //{ name: 'Pam', age: 28, email: 'pam123@gmail.com' }
