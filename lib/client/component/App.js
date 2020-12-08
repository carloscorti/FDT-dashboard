import React from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

import OverviewHeader from './OverviewHeader/OverviewHeader';
import Barchart from './Barchart/Barchart';
import Donutchart from './Donutchart/Donutchart';

import '../styles/index.css';
// import '../styles/components/navbar.css';
// import '../styles/components/sidebar.css';
// import '../styles/components/progressbar.css';
// import '../styles/components/overviewHeader.css';
// import '../styles/components/barchart.css';
// import '../styles/components/donutchart.css';
import '../styles/components/chartsCard.css';
import '../styles/components/termsCard.css';
import '../styles/components/table.css';
import '../styles/components/overviewPagination.css';
import '../styles/pages/overview.css';

/**
 * App comoponent: App'structure, sets up router strategy and contains toasr container
 */

// mock data
const userImage = 'https://picsum.photos/id/16/40/40';
const overviewHeaderInsertions = 643;
const overviewHeaderProgress = 80;
const followersLeftChart = 9401;
const colorLeftChart = 'ligthBlue';
const barsLeftChart = {
  a: 30,
  b: 40,
  c: 30,
  d: 50,
  e: 20,
  f: 50,
  g: 100,
  h: 30,
  i: 40,
  j: 30,
  k: 50,
  l: 20,
  m: 50,
  n: 100,
};
const donutPercentageLeftChart = 60;

const App = () => {
  return (
    <>
      {/* <!-- header display none--> */}
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
            {/* <!-- overview header --> */}
            <OverviewHeader
              insertions={overviewHeaderInsertions}
              progress={overviewHeaderProgress}
            />
            {/* <!-- overview carts --> */}
            <div className="grid-wrapper overview-layout">
              {/* <!-- left chart --> */}
              <div className="box chart-one">
                <h3>General Results</h3>

                {/* chart card */}
                <div className="chartsarea">
                  {/* bar chart */}
                  <Barchart
                    followers={followersLeftChart}
                    color={colorLeftChart}
                    barsData={barsLeftChart}
                  />

                  {/* donut chart */}
                  <div className="circlechart">
                    <Donutchart
                      color={colorLeftChart}
                      percentage={donutPercentageLeftChart}
                    />
                  </div>
                </div>
                {/* chart card end */}
                {/*  */}
              </div>
              {/* left chart end */}
              {/*  */}
              {/* <!-- rigth chart --> */}
              <div className="box chart-two">
                <h3>Ratings by category</h3>

                <div className="chartsarea">
                  <div className="barchart">
                    <p className="barchart-header">
                      <b className="higlated-number">3.900</b> Followers
                    </p>
                    <div className="barchart-wrapper">
                      <div className="column-flex">
                        <div className="chart-column low barcharchart-two-color"></div>
                        <span>a</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column mid barcharchart-two-color"></div>
                        <span>b</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column low barcharchart-two-color"></div>
                        <span>c</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall barcharchart-two-color"></div>
                        <span>d</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tiny barcharchart-two-color"></div>
                        <span>e</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall barcharchart-two-color"></div>
                        <span>f</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column big barcharchart-two-color"></div>
                        <span>g</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column low barcharchart-two-color"></div>
                        <span>a</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column mid barcharchart-two-color"></div>
                        <span>b</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column low barcharchart-two-color"></div>
                        <span>c</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall barcharchart-two-color"></div>
                        <span>d</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tiny barcharchart-two-color"></div>
                        <span>e</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall barcharchart-two-color"></div>
                        <span>f</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column big barcharchart-two-color"></div>
                        <span>g</span>
                      </div>
                    </div>
                  </div>

                  <div className="circlechart">
                    <svg>
                      <circle
                        className="chart-two-color"
                        cx="0"
                        cy="0"
                        r="3rem"
                      ></circle>
                      <circle
                        className="chart-two-color"
                        cx="0"
                        cy="0"
                        r="3rem"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
              {/* rigth chart end */}
              {/*  */}

              {/* <!-- terms --> */}
              <div className="box terms">
                <div className="term-wrapper">
                  <span className="term-header">Term 1</span>
                  <span className="term-value">85.08</span>
                </div>
                <div className="term-wrapper">
                  <span className="term-header">Term 2</span>
                  <span className="term-value">1.76</span>
                </div>
                <div className="term-wrapper">
                  <span className="term-header">Term 3</span>
                  <span className="term-value">33.42</span>
                </div>
                <div className="term-wrapper">
                  <span className="term-header">Term 4</span>
                  <span className="term-value">75.11</span>
                </div>
              </div>
              {/* terms end */}
              {/*  */}

              {/* <!-- table --> */}
              <div className="box chart-table">
                <h3 className="highlighted-header">Support Requests</h3>

                <table role="table">
                  <thead role="rowgroup">
                    <tr role="row">
                      <th role="columnheader">Name</th>
                      <th role="columnheader">Email</th>
                      <th role="columnheader">Time</th>
                      <th role="columnheader">Phone Number</th>
                      <th role="columnheader">City</th>
                      <th role="columnheader">Status</th>
                    </tr>
                  </thead>
                  <tbody role="rowgroup">
                    <tr role="row">
                      <td role="cell">Cecilia Welch</td>
                      <td role="cell">heather_keeling@gottlieb.ca</td>
                      <td role="cell">01:06AM</td>
                      <td role="cell">215-593-5846</td>
                      <td role="cell">South Mariane</td>
                      <td role="cell">
                        <button>Sent</button>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell">Sara Glover</td>
                      <td role="cell">floyd_brakus@lindgren.com</td>
                      <td role="cell">00:22AM</td>
                      <td role="cell">057-812-3947</td>
                      <td role="cell">East Maryam</td>
                      <td role="cell">
                        <button>Sent</button>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell">Harriett Morgan</td>
                      <td role="cell">jabari.kilback@nelson.tv</td>
                      <td role="cell">12:22PM</td>
                      <td role="cell">866-668-0327</td>
                      <td role="cell">Monserratmouth</td>
                      <td role="cell">
                        <button>Sent</button>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell">Susie Curry</td>
                      <td role="cell">theo_gleichner@kaia.org</td>
                      <td role="cell">07:56PM</td>
                      <td role="cell">647-851-5280</td>
                      <td role="cell">Lonnyburgh</td>
                      <td role="cell">
                        <button>Sent</button>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell">Edgar Greer</td>
                      <td role="cell">ankunding_ralph@gmail.com</td>
                      <td role="cell">08:35AM</td>
                      <td role="cell">985-747-0063</td>
                      <td role="cell">Schmittfurt</td>
                      <td role="cell">
                        <button className="open">Open</button>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell">Minerva Massey</td>
                      <td role="cell">lia_purdy@yahoo.com</td>
                      <td role="cell">03:24AM</td>
                      <td role="cell">488-514-5012</td>
                      <td role="cell">South Lori</td>
                      <td role="cell">
                        <button className="open">Open</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end table */}
              {/*  */}
              {/* <!-- higligth --> */}
              <div className="pagination">
                <div className="overview-pagination-flex">
                  <p>
                    Showing <b>1</b> to <b>20</b> of <b>25 elements</b>
                  </p>
                  <p>
                    Page <button>1</button> ... <button>2</button>
                  </p>
                </div>
              </div>
              {/* higligth end */}
              {/*  */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
