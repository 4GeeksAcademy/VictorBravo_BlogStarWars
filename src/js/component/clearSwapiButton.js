import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext"; // Importa el contexto para acceder a las acciones

const ClearSwapiButton = () => {
    const { actions } = useContext(Context); // Obtener las acciones de flux
    const [messageVisible, setMessageVisible] = useState(false); // Controla la visibilidad del mensaje

    // Función que se ejecuta al hacer clic en el botón
    const handleClearStorage = () => {
        // Llama a la función clearSwapiLocalStorage desde flux
        actions.clearSwapiLocalStorage();
        
        // Muestra el mensaje de éxito
        setMessageVisible(true);
        
        // Oculta el mensaje después de 5 segundos
        setTimeout(() => {
            setMessageVisible(false);
        }, 5000);
    };

    return (
        <div>
            <button onClick={handleClearStorage} className="btn btn-danger mx-1">
                Limpiar Datos
            </button>
            
            {/* Mensaje visible solo si messageVisible es true */}
            {messageVisible && (
                <div className="alert alert-success mt-3" role="alert">
                    Los datos de SWAPI han sido eliminados del localStorage con éxito.
                </div>
            )}
        </div>
    );
};

export default ClearSwapiButton;