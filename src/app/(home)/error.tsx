/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div
      style={{
        margin: "0",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "50%",
          border: "4px solid #d9534f",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "red" }}>
          :(
          <br />
          <br />
          Ha ocurrido un error
          <br />
        </h1>
        <p>
          ¡Posiblemente la página fallo o está realizando una demanda excesiva
          en el sitio!
        </p>

        <button
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#d9534f",
            border: "1px solid #d9534f",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          {" "}
          Recargar pagina{" "}
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
