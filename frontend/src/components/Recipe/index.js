import React from 'react'

export default function index({id, thumb, title, category, area, instructions}) {
    return (
        <div key={id} data-testid="results"  className="m-auto px-4 py-8 max-w-xl">
          <div className="bg-white shadow-2xl" >
              <div>
                  <img alt="Recipe" src={thumb}/>
              </div>
              <div className="px-4 py-2 mt-2 bg-white">
                  <h2 className="font-bold text-2xl text-gray-800">{title}</h2>
                  <h3 className="font-bold text-l text-gray-600">{category}</h3>
                  <h3 className="font-bold text-l text-gray-600">{area}</h3>
                      <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                        {instructions}
                      </p>
              </div>
          </div>
        </div>
    )
}
