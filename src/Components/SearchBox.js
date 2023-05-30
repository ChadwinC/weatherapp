import React from "react";


const SearchBox=({onInputChange,onSearch}) =>{
        
      const handleKeyPress= (event) =>{
        if(event.key ==="Enter"){
            onSearch();
        }
      };

    return(
        <div className="tc">
            <input // input box 
                    className="pa3 ba b--grey bg-lightest-blue"
                    type="text"
                    onChange={onInputChange}
                    onKeyPress={handleKeyPress}
            />
            <button className="pa2" type="text"  onClick={onSearch}>Enter</button>
            
        </div>
    )
        

}


export default SearchBox;