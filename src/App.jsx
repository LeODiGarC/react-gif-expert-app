import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState(["Hello"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default App;
