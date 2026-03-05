import React, { memo } from "react";
import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

/**
 * Displays a responsive grid of gifs for a given category.
 * While the data is being fetched we render skeleton cards to
 * keep the layout from jumping around.
 */
const GifGridComponent = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // number of placeholders to show while loading
  const skeletonCount = 6;

  return (
    <section aria-label={`Resultado de búsqueda para ${category}`}>
      <h3 className="animate__animated animate__fadeIn" tabIndex={0}>
        {category}
      </h3>

      <div className="card-grid">
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <div key={i} className="card-skeleton" />
            ))
          : images.map((image) => <GifItem key={image.id} {...image} />)}
      </div>

      {!isLoading && images.length === 0 && (
        <p className="loading">No se encontraron gifs en esta categoría.</p>
      )}
    </section>
  );
};

GifGridComponent.propTypes = {
  category: PropTypes.string.isRequired,
};

export const GifGrid = memo(GifGridComponent);
