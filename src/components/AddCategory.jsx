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
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={inputValue} 
      onChange={handleInputChange} 
      />
    </form>
  );
}


export default AddCategory;
