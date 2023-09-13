import './App.css';
import Search from "./components/Search"
import Members from "./components/Members"
function App() {
  return (
    <div className="membersSection">
      <div className="container">
        <h2>Add members to Front-End development team</h2>
        <div className="content">
          <Search placeholder ="Find Member"/>
          <Members/>
        </div>
      </div>
    </div>
  );
}

export default App;
