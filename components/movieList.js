import React from 'react'

class MovieList extends React.Component {

    renderMovies(movies) {

        return movies.map(movie => 
            (
                <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <h5>${movie.price}</h5>
                            <p className="card-text">{movie.description}</p>
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

                <div>
                    <h1>Count: {this.props.count}</h1>
                </div>

                { this.renderMovies(movies) }
            
            </React.Fragment>
        )

    }
}

export default MovieList