
import Head from 'next/head'
import getConfig from 'next/config';
import Movie from '../src/components/Movie'
import Header from '../component/header';
import Footer from '../component/footer';
import { Button, Container, Row, Col} from 'react-bootstrap'

import { useEffect, useState } from 'react';

const { serverRuntimeConfig, publicRuntimeConfig} =getConfig()

export default function Home(initialData) {
  const [searchResults, setSearchResults] = useState ([])
  const[formInput, setFormInput] = useState({})
  const [searchTerm, setSearchTerm] = useState('')


  useEffect (() => {
    setSearchResults(initialData.genre.data)
  }, [initialData])

  const handleInputs = (event) => {
    let {title, genre} = event.target
    setFormInput({...formInput, [title]: genre});
    setSearchTerm(event.target.genre);

  }

  const search = async (event) => {
    event.preventDefault()
    let movies = await fetch ('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/genre?genre=comedyapi_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${formInputs.searchTerm}&page-1&include_adult=false')
    movies =await movies.json()
    setSearchResults(movies.results)
  }
  return (
    <>
  <div className='red-background'>
    <div className='container'>
      
      <Head>
        <title>PcariMovie</title>
        
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css"/>
      </Head>
      <Header/></div>
      <Row>
        
        <Col md={6} className="m-auto">
        <form className="search-form" onSubmit={search}>
          <input className="search" name="searchTerm" value={searchTerm} onChange={handleInputs} type="text" required/>
          <button className="btn-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </button>
        </form>
        </Col>
      </Row>
      
      <Container><div className="pageads">All Movies</div>
      <div className="movie-search-result-grid">
        {searchResults.map((each, genre) => {
          return (
            <Movie
              Genre={each.Movie_ID}
              Poster={each.Poster}
              Title={each.Title}
              Description={each.Description}
              Views={each.Views}
              Duration={each.Duration}
              Overall_rating={each.Overall_rating}
              />
          )
        })
        }
        
      </div>
      </Container>
      <Footer/>
    
    </div>
    </>
  )
}


export async function getServerSideProps(context) {
  let genre = await fetch('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/genre?genre=comedy{serverRuntimeConfig.apiKey}')
  genre = await genre.json()
  console.log(genre)
  return{
    props: {genre:genre},
  }
}
