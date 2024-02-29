import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [id, setId] = useState("");
  const [marca, setMarca] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const postData = { id, marca };
      const res = await axios.post("https://hexagonal-223245.onrender.com/vehiculo", postData); 
      setResponse(res.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div>
      <h2>Enviar Datos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {response && (
        <div>
          <h2>Respuesta del Servidor:</h2>
          <p>ID: {response.id}</p>
          <p>Marca: {response.marca}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
