const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1996,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        content: 'The new location will be located at the corner lot (behind Delmon Young & Westfield London Centre Shopping Center) opposite the Starbucks on West 3rd St. Buses pick up from Crown Road Rail Station.A little more than two years ago, I joined in on an exciting project to remodel our restaurant – the New York State Fair Plaza dining experience – as the centerpiece of my second career.',
        rating: 4.938,
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
        price: 12.3
    },
    {
        id: '2',
        name: 'The Dark Knight',
        releaseYear: 2008,
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        content: 'We are an urban bar with minimal facilities and most of it is hidden from view, so our site is very hidden and the people are very friendly and easy to spot. We have a great range of drinks and we have a few signature drinks on the menu. We have a great mix of cocktails, wines and beer. The bar is located on the 14th floor of the Crematorium and our location is just outside of the main central Glasgow building.',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
        price: 23.2
    },
    {
        id: '3',
        name: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        content: 'We’re a small, boutique bar. We pride ourselves in providing amazing service and delivering an outstanding night out. We’re a fun, stylish bar with a laid back, friendly atmosphere. The bar can accommodate a variety of types of people. Our customers range from 30 to 50, and there is always someone who will join us on our dance floor. We have a number of diverse events throughout the year and we take requests from all guest.',
        rating: 4.9,
        genre: 'adventure, drama, fantasy',
        image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
        price: 213
    }
]

const CATEGORY_DATA = [
    {id: '1', name: 'drama'},
    {id: '2', name: 'action'},
    {id: '3', name: 'adventure'},
    {id: '4', name: 'histoical'}
]

export const getCategories = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(CATEGORY_DATA)
            // reject('cannot fetch data!')
        }, 0)
    }) 
}


export const getMovies = () => {

    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(MOVIE_DATA)
            // reject('cannot fetch data!')
        }, 0)
    })    
}

export const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        const movieIndex = MOVIE_DATA.findIndex((movie) => {
            return movie.id === id
        })

        const movie = MOVIE_DATA[movieIndex];

        setTimeout(() => {            
            resolve(movie)
        }, 0)
    })
}