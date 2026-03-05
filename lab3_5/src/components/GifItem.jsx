export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} className="gif-image" />
      <p> Nombre: {title} </p>
      <p> Id: {id} </p>
    </div>
  );
};
