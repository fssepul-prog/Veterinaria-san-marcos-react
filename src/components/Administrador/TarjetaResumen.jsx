// Contiene 2 props: "titulo" y "valor", que llegan desde la página
function TarjetaResumen({ titulo, valor }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h6">{titulo}</h2>
        <p className="fs-3 mb-0">{valor}</p>
      </div>
    </article>
  );
}

export default TarjetaResumen;
