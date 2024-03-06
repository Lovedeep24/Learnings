export default function Movies(movies) {
  return (
    <div>
      {movies.map((movie)=>{
        <p key={movie.imdbID}>{movie.Title}</p>
      })}
    </div>
  )
}
