import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movie}>
          <h1 className={styles.movie__title}>🎞 {movie.title}</h1>
          <img src={movie.background_image} className={styles.movie__img} />
          <div className={styles.movie__info}>
            <div className={styles.info}>
              <h4 className={styles.movie__text}>Year</h4>
              <h4 className={styles.movie__year}>{movie.year}</h4>
              <h4 className={styles.movie__text}>Rating</h4>
              <h4 className={styles.movie__rating}>{movie.rating}</h4>
              <h4 className={styles.movie__text}>Runtime</h4>
              <h4 className={styles.movie__runtime}>{movie.runtime} minutes</h4>
              <h4 className={styles.movie__text}>Genres</h4>
              <h4 className={styles.movie__genres}>
                {movie.genres.join(", ")}
              </h4>
            </div>
            <div>
              {movie.description_full && (
                <h4 className={styles.movie__text}>Description</h4>
              )}
              {movie.description_full && (
                <p className={styles.movie__summary}>
                  {movie.description_full}
                </p>
              )}
            </div>
            <hr></hr>
            <div className={styles.movie__more_container}>
              <Link to="/" className={styles.movie__more}>
                ⬅️ Back
              </Link>
              <a className={styles.movie__more} href={movie.url}>
                ⬇️ More
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
