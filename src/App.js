import "./App.css";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import Department from "./components/Department";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Department deptName="itnu" />
      <Department deptName="ilnu" />
      <Blog  />
      <Blog />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
