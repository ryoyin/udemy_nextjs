import {useRouter} from 'next/router'
import { getMovies, getMovieById } from '../../actions'

const Movie = (props) => {

    const router = useRouter()
    const {id} = router.query

    const {movie} = props

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{ movie.name }</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <p>description</p>
        </div>
    )
}

/* Movie.getInitialProps = async ({query}) => {
    const movie = await getMovieById(query.id)

    return {movie}
} */

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const movie = await getMovieById(params.id)
    
    return { props: { movie } }
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const movies = await getMovies()
    // console.log(movies)
    debugger
  
    // Get the paths we want to pre-render based on posts
    const paths = movies.map((movie) => ({
      params: { id: movie.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export default Movie