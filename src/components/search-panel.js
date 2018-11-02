import React from 'react';

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '20px',
        padding: '0 0 0 15px'
    }
    return <input 
    style = {searchStyle}
    placeholder="search..." />
};

export default SearchPanel;