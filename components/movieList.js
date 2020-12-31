import React from 'react'
import Link from 'next/link'

class MovieList extends React.Component {

    shortDescription = (text) => {
        return (
            text.substr(0, 100) + '...'
        )
    }

    renderMovies(movies) {

        return movies.map(movie => 
            (
                <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
                    <div className="card h-100">
                        <Link href={`/movies/${movie.id}`}>
                            <a><img className="card-img-top" src={movie.image} alt="" /></a>
                        </Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <h5>${movie.price}</h5>
                            <p className="card-text">{this.shortDescription(movie.description)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                    </div>
                </div>
            )
        )
    }

    render() {
        
        const {movies} = this.props

        return (
            <React.Fragment>

                { this.renderMovies(movies) }
            
            </React.Fragment>
        )

    }
}

export default MovieList