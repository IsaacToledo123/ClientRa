import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const MessageReceiver = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("https://server-z88w.onrender.com");

    socket.on("nuevoVehiculo", (vehiculo) => { 
      setMessages((prevMessages) => [...prevMessages, vehiculo]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Vehículos recibidos:</h2>
      <ul>
        {messages.map((vehiculo, index) => ( // Iterar sobre los vehículos recibidos
          <li key={index}>
            {`Marca: ${vehiculo.marca}, id: ${vehiculo.id},`} {/* Mostrar detalles del vehículo */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageReceiver;
