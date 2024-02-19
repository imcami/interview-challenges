const SPACEX_API = "https://api.spacexdata.com/v3/launches";

algoritmoBeta("FalconSAT-2", SPACEX_API); // true
algoritmoBeta("FalconSAT-3", SPACEX_API); // false

async function algoritmoAlfa(payloadId, payloadAPI) {
  /* algoritmo con complejidad temporal de O(n^2) porque hay un ciclo for adentro de otro */
  let respuesta = await fetch(payloadAPI);
  let data = await respuesta.json();
  for (let i = 0; i < data.length; i++) {
    let payloads = data[i].rocket.second_stage["payloads"];
    for (let j = 0; j < payloads.length; j++) {
      if (payloadId == payloads[j].payload_id) {
        return true;
      }
    }
  }
  return false;
}

async function algoritmoBeta(payloadId, payloadAPI) {
  /* algoritmo con complejidad temporal de O(n^3) */
  let arreglosCoinciden = (arreglo1, arreglo2) => {
    if (arreglo1.length != arreglo2.length) {
      return false;
    }
    for (let i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] != arreglo2[i]) {
        return false;
      }
    }
    return true;
  };
  let respuesta = await fetch(payloadAPI);
  let data = await respuesta.json();
  let payloadIdArray = payloadId.split("");
  for (let i = 0; i < data.length; i++) {
    let payloads = data[i].rocket.second_stage.payloads;
    for (let j = 0; j < payloads.length; j++) {
      if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(""))) {
        return true;
      }
    }
  }
  return false;
}

async function algoritmoDelta(payloadId, payloadAPI) {
  /* algoritmo con complejidad temporal de O(n), por lo tanto es el mas eficiente temporalmente ya que los ciclos for no estaan anidados */
  let respuesta = await fetch(payloadAPI);
  let data = await respuesta.json();
  let listaDePayloads = [];
  let longitudData = data.length;

  for (let i = 0; i < longitudData; i++) {
    let payloads = data[i].rocket;
    listaDePayloads.push(...payloads.second_stage["payloads"]);
  }

  for (let i = 0; i < listaDePayloads.length; i++) {
    let localPayloadId = listaDePayloads[i].payload_id;
    if (localPayloadId == payloadId) {
      return true;
    } else {
      return false;
    }
  }
}
