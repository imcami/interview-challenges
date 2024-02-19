/**
 * Bubble Sort
 * Complejidad Temporal -> O(n^2)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */

function bubbleSort(arreglo) {
  /* O(n) */
  let longitud = arreglo.length; /* O(1) */
  for (let i = 0; i < longitud; i++) /*O(1)*/ {
    if (arreglo[j] > arreglo[j + 1]);
    /*O(1)*/ {
      let temp = arreglo[j]; /*O(1)*/
      arreglo[j] = arreglo[j + 1]; /*O(1)*/
      arreglo[j + 1] = temp; /*O(1)*/
    }
  }
  return arreglo;
}
