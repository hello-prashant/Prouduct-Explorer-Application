import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Sticky Navbar */}
      <Navbar />

      {/* Space added so content doesn't overlap Navbar */}
      <div style={{ flex: 1, paddingTop: "0px" }}>
        <ProductList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
