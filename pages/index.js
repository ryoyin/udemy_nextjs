import React, { useState, useEffect } from 'react'

import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'
import {getCategories, getMovies} from '../actions/index'

class Home extends React.Component {

  static async getInitialProps() {
    const movies = await getMovies()
    const categories = await getCategories()
    const images = movies.map(movie => ({
      id: `image-${movie.id}`,
      image: movie.image
    }))

    return {
      categories,
      movies,
      images
    }
  }
 
  render() {

    const {categories, movies, images} = this.props

    return (
      <div>
        <div className="home-page">
          <div className="container">

            <div className="row">

              <div className="col-lg-3">
                <SideMenu 
                  appName={"Movie DB"}
                  categories={categories}
                  />
              </div>

              <div className="col-lg-9">
                
                <Carousel images= {images} />

                <div className="row">
                  <MovieList movies={movies || []} />
                </div>

              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .home-page {
            /* padding-top: 80px; */
          }
        `}
        </style>

      </div>
    )
  }
}

export default Home