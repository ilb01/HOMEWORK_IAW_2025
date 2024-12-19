import placeholder from "../placeholder.jpg";

export default function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
