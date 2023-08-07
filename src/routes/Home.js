import React, { Component } from 'react'
import Movie from '../components/Movie'
import axios from 'axios'
import '../styles/Home.css'

export class Home extends Component {
  state = {
    isLoading: true,
    movies:[],
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get('http://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count') // get방식은 주소창에 이 주소가 다 나오는 것이다. 이걸로 데이터를 받음. // json파일에서 가져와서 ? 쿼리 질문을 하는 것이다. 장르는 애니메이션이고 좋아요 순으로 정렬되게 
    console.log('movies',movies);
    this.setState({isLoading:false,movies})//키(속성): 키(속성)값 이름이 동일하면 하나만 적어도 됨
}

componentDidMount(){
  this.getMovies();
  // setTimeout(() =>{
  //   this.setState({isLoading:false});
  // },6000);
}

  render() {
    const {isLoading,movies} = this.state; //구조 분해 할당

    return (
      <section className='container'>
      {isLoading ? 
      <div className='loader'>
        <span className='loader_text'>'Loading...'</span>
      </div>
       : 
       <div className='movies'>
        {movies.map((movie,index)=>(
          <Movie
            key = {index}
            movieimg = {movie.medium_cover_image}
            movietitle = {movie.title}
            movieyear = {movie.year}
            moviesummary = {movie.summary}
            genres={movie.genres}
          />

        ))}
      
      </div>
      }
      
    </section>
    )
  }
}

export default Home