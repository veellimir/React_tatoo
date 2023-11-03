import React from 'react'

import { SearchContext } from '../../App';

import './Search.css'



const Search = () => {
    const { searchValue, setSearchValue } = React.useContext(SearchContext)
    return (
        <div className='wrapper-root'>
            <input placeholder='Поиск ...' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
            <svg className='icon_search' xmlns="http://www.w3.org/2000/svg" 
                enable-background="new 0 0 80 80" 
                height="80px" 
                id="Icons" 
                version="1.1" 
                viewBox="0 0 80 80" 
                width="80px">
                <path d="M59.446,55.911L49.337,45.802c1.922-2.64,3.069-5.88,3.069-9.396c0-8.837-7.163-16-16-16s-16,7.163-16,16s7.163,16,16,16  
                c3.516,0,6.756-1.147,9.396-3.069l10.109,10.109L59.446,55.911z M36.406,47.406c-6.065,0-11-4.935-11-11s4.935-11,11-11  
                s11,4.935,11,11S42.471,47.406,36.406,47.406z" />
            </svg>
            {searchValue && (
                <svg onClick={() => setSearchValue('')} className='icon_close' 
                    fill="none" height="24" 
                    viewBox="0 0 24 24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 
                    4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 
                    4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 
                    19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 
                    6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 
                    10.5858L6.2253 4.81108Z" fill="currentColor"/>
                </svg>
            )}
        </div>
    )
}
export default Search;