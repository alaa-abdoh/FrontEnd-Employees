import './App.css';
import Search from "./components/Search"
function App() {
  return (
    <div className="membersSection">
      <div className="container">
        <h2>Add members to Front-End development team</h2>
        <Search placeholder ="Find Member"/>
      </div>
    </div>
  );
}

export default App;
