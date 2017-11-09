import React, { Component } from 'react';

export default class Movies extends Component {
  render() {
    const { results, setSelectedId } =this.props;
    return(
      <div>
        {results.map((result, i) =>{
          return(
            <li key={i} style={{ marginBottom:5, listStyle:'none' }}>
              <a href={`https://www.imdb.com/title/${result.imdbID}/`}>
                <p className='Movie-title'>{result.Title}</p>
              </a>
              <img 
                alt={''}
                src={result.Poster}
                onClick= {() => setSelectedId(result.imdbID)}
              />
            </li>
          );
        })}
      </div>
    );
  }
}