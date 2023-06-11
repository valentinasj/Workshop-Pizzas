import React from 'react'
import logo from '../../imgs/logo.png'
import './Search.scss'
import SearchBar from '../../components/searchBar/SearchBar'
import FoodCard from '../../components/foodCard/FoodCard'
export const Search = () => {
  return (
    <>
    <section className='mainSearchBar'>
      <SearchBar/>
      <main className='mainSearchBar__container'>
      <div className='mainSearchBar__cards'>
        {/* <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/> */}
      </div>
      </main>
      </section>
    <div className='mainSearch'>
      <figure className='mainSearch__image'>
        <img src={logo} alt="" srcset="" />
      </figure>
      <span className='mainSearch__words'>Busca la Pizza que mas te gusta</span>
    </div>
    </>
  )
}
