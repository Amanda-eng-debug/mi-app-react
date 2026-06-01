// src/components/Clima.jsx
function Clima() {
  const temperatura = 10; 
  let sensacion = "";
  let recomendacion = "";

  if (temperatura < 15) {
    sensacion = "frío";
    recomendacion = "Lleva abrigo .";
  } else if (temperatura >= 15 && temperatura <= 25) {
    sensacion = "agradable";
    recomendacion = "Disfruta el día .";
  } else {
    sensacion = "caluroso";
    recomendacion = "Mantente hidratado .";
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h3>Clima actual</h3>
      <p><strong>Temperatura:</strong> {temperatura}°C</p>
      <p><strong>Sensación térmica:</strong> {sensacion}</p>
      <p><strong>Recomendación:</strong> {recomendacion}</p>
    </div>
  );
}

export default Clima;