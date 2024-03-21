import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, year, genres }) {
  const displayedGenres = genres.slice(0, 3);
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`} className={styles.link}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <h2 className={styles.movie__title}>{title}</h2>
        <h3 className={styles.movie__year}>({year})</h3>
        {summary.length < 200 ? (
          <p className={styles.movie__summary}>{summary}</p>
        ) : (
          <p className={styles.movie__summary}>
            {summary.split(" ").slice(0, 30).join(" ")}...{" "}
          </p>
        )}
        <ul className={styles.movie__genres}>
          {displayedGenres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  summary: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
