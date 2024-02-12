import { Router } from "express";

const apiRouter = Router();

apiRouter.post("/data", (req, res) => {
  const numbers = req.body;

  // Verificar si la solicitud es un JSON válido y contiene una lista
  if (
    !Array.isArray(numbers) ||
    numbers.length !== 500 ||
    !numbers.every(isNumber)
  ) {
    return res.status(400).json({
      error: "La solicitud debe contener una lista de exactamente 500 números.",
    });
  }

  // La solicitud es válida
  res.status(200).json({ message: "Datos recibidos correctamente." });
});

// Función auxiliar para verificar si un valor es un número
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

export default apiRouter;
