import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--grey bg-grey'
        type='search'
        placeholder='search Kits'
        
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;