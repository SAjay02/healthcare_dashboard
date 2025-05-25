import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Dashboard from './components/DashboardMainContent/DashboardOverview/Dashboard';
function App() {
  return (
    <div className='app_container'>
      <Header/>
      {/* <div style={{display:"flex"}}> */}
      <div className='row'>
          <div className='sidebar_col'><Sidebar/></div>
          <div className='dashboard_col'><Dashboard/></div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
