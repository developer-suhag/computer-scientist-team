import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Lab from "./components/Lab/Lab";

function App() {
  return (
    <div className="App">
      {/* header components */}
      <Header></Header>
      {/* Lab componenets */}
      <Lab></Lab>
      {/* footer components  */}
      <Footer></Footer>
    </div>
  );
}

export default App;
