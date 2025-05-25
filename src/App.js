import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Dashboard from './components/DashboardMainContent/DashboardOverview/Dashboard';
import Calendar from './components/DashboardMainContent/CalendarView/Calendar';
function App() {
  return (
    <div className='app_container'>
      <Header/>
      {/* <div style={{display:"flex"}}> */}
      <div className='row'>
          <div className='sidebar_col'><Sidebar/></div>
          <div className='dashboard_col'><Dashboard/></div>
          <div className='calendar_col'><Calendar/></div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
