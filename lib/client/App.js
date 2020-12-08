import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import Navbar from './component/Navbar/Navbar';

import Sidebar from './component/Sidebar/Sidebar';

import WelcomePage from './pages/Welcome/Welcome.page';
import OverviewPage from './pages/Overview/Overview.page';
import CampaingsPage from './pages/Campaings/Campaings.page';
import AnaliycsPage from './pages/Analitycs/Analitycs.page';
import NotFoundPage from './pages/NotFound/NotFound.page';

/**
 * App comoponent: App'structure, sets up router strategy and contains toasr container
 */

// mock data
const userImage = 'https://picsum.photos/id/16/40/40';
// const overviewHeaderInsertions = 643;
// const overviewHeaderProgress = 80;
// const titleLeftChart = 'General Results';
// const followersLeftChart = 9401;
// const colorLeftChart = 'ligthBlue';
// const barsLeftChart = {
//   a: 30,
//   b: 40,
//   c: 30,
//   d: 50,
//   e: 20,
//   f: 50,
//   g: 100,
//   h: 30,
//   i: 40,
//   j: 30,
//   k: 50,
//   l: 20,
//   m: 50,
//   n: 100,
// };
// const donutPercentageLeftChart = 60;

// const titleRigthChart = 'Ratings by category';
// const followersRigthChart = 3900;
// const colorRigthChart = 'pink';
// const barsRigthChart = {
//   a: 20,
//   b: 50,
//   c: 40,
//   d: 60,
//   e: 100,
//   f: 70,
//   g: 10,
//   h: 100,
//   i: 60,
//   j: 10,
//   k: 40,
//   l: 30,
//   m: 50,
//   n: 100,
// };
// const donutPercentageRigthChart = 80;

// const termsChartData = [85.08, 1.76, 33.42, 75.11];

// const tableTitle = 'Support Requests';
// const tableHeaders = [
//   { key: 'name', label: 'name' },
//   { key: 'email', label: 'email' },
//   { key: 'time', label: 'time' },
//   { key: 'phone_number', label: 'phone number' },
//   { key: 'city', label: 'city' },
// ];
// const tableData = [
//   {
//     name: 'Cecilia Welch',
//     email: 'heather_keeling@gottlieb.ca',
//     time: '01:06AM',
//     phone_number: '215-593-5846',
//     city: 'South Mariane',
//   },
//   {
//     name: 'Sara Glover',
//     email: 'floyd_brakus@lindgren.com',
//     time: '00:22AM',
//     phone_number: '057-812-3947',
//     city: 'East Maryam',
//   },
//   {
//     name: 'Harriett Morgan',
//     email: 'jabari.kilback@nelson.tv',
//     time: '12:22PM',
//     phone_number: '866-668-0327',
//     city: 'Monserratmouth',
//   },
//   {
//     name: 'Susie Curry',
//     email: 'theo_gleichner@kaia.org',
//     time: '07:56PM',
//     phone_number: '647-851-5280',
//     city: 'Lonnyburgh',
//   },
//   {
//     name: 'Edgar Greer',
//     email: 'ankunding_ralph@gmail.com',
//     time: '08:35AM',
//     phone_number: '985-747-0063',
//     city: 'Schmittfurt',
//   },
//   {
//     name: 'Minerva Massey',
//     email: 'lia_purdy@yahoo.com',
//     time: '03:24AM',
//     phone_number: '488-514-5012',
//     city: 'South Lori',
//   },
// ];

// const paginationElementsPerPage = 20;
// const paginationTotalDataElements = 25;

const App = () => {
  return (
    <BrowserRouter>
      {/* <!-- not on screen but not display: none;, for accessibility --> */}
      <header>
        <h1>FDT Dashboard</h1>
      </header>

      <div className="grid-wrapper page-layout">
        {/* <!-- navbar --> */}
        <Navbar userImg={userImage} />

        {/* <!-- sidebar --> */}
        <Sidebar />

        {/* content */}
        <main className="box content">
          <section>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/overview" component={OverviewPage} />
              <Route exact path="/campaings" component={CampaingsPage} />
              <Route exact path="/analytics" component={AnaliycsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
