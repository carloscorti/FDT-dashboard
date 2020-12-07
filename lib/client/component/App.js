import React from 'react';

import '../styles/index.css';
import '../styles/components/navbar.css';
import '../styles/components/sidebar.css';
import '../styles/components/progressbar.css';
import '../styles/components/overviewHeader.css';
import '../styles/components/barchart.css';
import '../styles/components/donutchart.css';
import '../styles/components/chartsCard.css';
import '../styles/components/termsCard.css';
import '../styles/components/table.css';
import '../styles/components/overviewPagination.css';
import '../styles/pages/overview.css';

/**
 * App comoponent: App'structure, sets up router strategy and contains toasr container
 */

const App = () => {
  return (
    <>
      {/* <!-- header display none--> */}
      <header>
        <h1>FDT Dashboard</h1>
      </header>

      <div className="grid-wrapper page-layout">
        {/* <!-- navbar --> */}
        <div className="box user-img">
          <img src="https://picsum.photos/id/16/40/40" alt="user image" />
        </div>

        <nav className="box navbar">
          <ul>
            <li>
              <a className="navbar-active" href="#">
                Overview
              </a>
            </li>
            <li>
              <a href="#">Campaings</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
          <button>Premium</button>
        </nav>
        {/* navbar end */}
        {/*  */}
        {/* <!-- sidebar --> */}
        <aside className="box sidebar">
          <ul>
            <li>
              <a className="sidebar-active" href="#">
                <svg
                  className="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M512 64c282.77 0 512 229.23 512 512 0 192.792-106.576 360.666-264.008 448h-495.984c-157.432-87.334-264.008-255.208-264.008-448 0-282.77 229.23-512 512-512zM801.914 865.914c77.438-77.44 120.086-180.398 120.086-289.914h-90v-64h85.038c-7.014-44.998-21.39-88.146-42.564-128h-106.474v-64h64.284c-9.438-11.762-19.552-23.096-30.37-33.914-46.222-46.22-101.54-80.038-161.914-99.798v69.712h-64v-85.040c-20.982-3.268-42.36-4.96-64-4.96s-43.018 1.69-64 4.96v85.040h-64v-69.712c-60.372 19.76-115.692 53.576-161.914 99.798-10.818 10.818-20.932 22.152-30.37 33.914h64.284v64h-106.476c-21.174 39.854-35.552 83.002-42.564 128h85.040v64h-90c0 109.516 42.648 212.474 120.086 289.914 10.71 10.71 21.924 20.728 33.56 30.086h192.354l36.572-512h54.856l36.572 512h192.354c11.636-9.358 22.852-19.378 33.56-30.086z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  className="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M480 0v0c265.096 0 480 173.914 480 388.448s-214.904 388.448-480 388.448c-25.458 0-50.446-1.62-74.834-4.71-103.106 102.694-222.172 121.108-341.166 123.814v-25.134c64.252-31.354 116-88.466 116-153.734 0-9.106-0.712-18.048-2.030-26.794-108.558-71.214-177.97-179.988-177.97-301.89 0-214.534 214.904-388.448 480-388.448zM996 870.686c0 55.942 36.314 104.898 92 131.772v21.542c-103.126-2.318-197.786-18.102-287.142-106.126-21.14 2.65-42.794 4.040-64.858 4.040-95.47 0-183.408-25.758-253.614-69.040 144.674-0.506 281.26-46.854 384.834-130.672 52.208-42.252 93.394-91.826 122.414-147.348 30.766-58.866 46.366-121.582 46.366-186.406 0-10.448-0.45-20.836-1.258-31.168 72.57 59.934 117.258 141.622 117.258 231.676 0 104.488-60.158 197.722-154.24 258.764-1.142 7.496-1.76 15.16-1.76 22.966z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  className="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M832 960l192-512h-832l-192 512zM128 384l-128 576v-832h288l128 128h416v128z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  className="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  className="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </aside>
        {/* sidebar end */}
        {/*  */}
        {/* content */}
        <main className="box content">
          <section>
            {/* <!-- overview header --> */}
            <div className="overview-header-flex">
              <h2>Data overview</h2>
              <div className="overview-header-progres-flex">
                <div className="progress"></div>
                <span>
                  <b>643</b> insertions needed to complete
                </span>
              </div>
            </div>
            {/* overview header end */}
            {/*  */}
            {/* <!-- overview carts --> */}
            <div className="grid-wrapper overview-layout">
              {/* <!-- left chart --> */}
              <div className="box chart-one">
                <h3>General Results</h3>

                {/* chart card */}
                <div className="chartsarea">
                  {/* bar chart */}
                  <div className="barchart">
                    <p className="barchart-header">
                      <b className="higlated-number">9.401</b> Followers
                    </p>
                    <div className="barchart-wrapper">
                      <div className="column-flex">
                        <div className="chart-column low"></div>
                        <span>a</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column mid"></div>
                        <span>b</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column low"></div>
                        <span>c</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall"></div>
                        <span>d</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tiny"></div>
                        <span>e</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall"></div>
                        <span>f</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column big"></div>
                        <span>g</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column low"></div>
                        <span>a</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column mid"></div>
                        <span>b</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column low"></div>
                        <span>c</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall"></div>
                        <span>d</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tiny"></div>
                        <span>e</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column tall"></div>
                        <span>f</span>
                      </div>

                      <div className="column-flex">
                        <div className="chart-column big"></div>
                        <span>g</span>
                      </div>
                    </div>
                  </div>
                  {/* bar chart end */}
                  {/*  */}
                  {/* donut chart */}
                  <div className="circlechart">
                    <svg>
                      <circle cx="0" cy="0" r="3rem"></circle>
                      <circle cx="0" cy="0" r="3rem"></circle>
                    </svg>
                  </div>
                  {/* donut chart end */}
                  {/*  */}
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
