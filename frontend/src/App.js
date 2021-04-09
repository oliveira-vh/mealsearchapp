import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Hero from './components/Hero'
import SearchInput from './components/SearchInput'
import ErrorMessage from './components/ErrorMessage'


function App() {
  const [error, setError] = useState(false);
  const [meals, setMeals] = useState('');
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  async function getMeals() {
    try{
      const response = await axios.get(`https://mealsearchapi.herokuapp.com/search/${query}`);
      setMeals(response.data);
    }catch {
      setError(true);
    }
  }

  const offset = currentPage * 1;
  const pageCount = Math.ceil(meals.length);

  return (
    <div className="App">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto mb-5">
        <div>
            <Hero/>
            <SearchInput 
              onClick={getMeals} 
              onChange={handleQueryChange}
            />
        </div>
        {error && <ErrorMessage/>}
        {meals && meals.slice(offset, offset + 1).map(meal => (<div key={meal.idMeal} className="m-auto px-4 py-8 max-w-xl">
          <div className="bg-white shadow-2xl" >
              <div>
                  <img alt="Recipe" src={meal.strMealThumb}/>
              </div>
              <div className="px-4 py-2 mt-2 bg-white">
                  <h2 className="font-bold text-2xl text-gray-800">{meal.strMeal}</h2>
                  <h3 className="font-bold text-l text-gray-600">{meal.strCategory}</h3>
                  <h3 className="font-bold text-l text-gray-600">{meal.strArea}</h3>
                      <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                        {meal.strInstructions}
                      </p>
              </div>
          </div>
        </div>))
        }
        {meals &&
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"flex flex-row flex-nowrap justify-center items-center"}
            pageClassName={"hidden sm:flex md:flex lg:flex xl:flex 2xl:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"}
            previousLinkClassName={"flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"}
            nextLinkClassName={"flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"}
            activeLinkClassName={"hidden sm:flex md:flex lg:flex xl:flex 2xl:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none"}
          />
        }
      </div>
</div>
  );
}

export default App;
