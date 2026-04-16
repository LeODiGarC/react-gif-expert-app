import { useState } from "react";

function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(inputValue.trim().length > 2){
        setCategories([inputValue])
        setInputValue('')
    }

  }

  return (
    <form onSubmit={handleSubmit} className="submit">
      <input 
      type="text" 
      value={inputValue} 
      onChange={handleInputChange} 
      />
      <button>Search</button>
    </form>
  );
}


export default AddCategory;
