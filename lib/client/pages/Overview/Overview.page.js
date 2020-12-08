import React from 'react';

import './overview.css';

import OverviewHeader from '../../component/OverviewHeader/OverviewHeader';
import ChartCard from '../../component/ChartCard/ChartCard';
import Termschart from '../../component/Termschart/Termschart';
import Table from '../../component/Table/Table';
import Pagination from '../../component/Pagination/Pagination';

const overviewHeaderInsertions = 643;
const overviewHeaderProgress = 80;
const titleLeftChart = 'General Results';
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

const titleRigthChart = 'Ratings by category';
const followersRigthChart = 3900;
const colorRigthChart = 'pink';
const barsRigthChart = {
  a: 20,
  b: 50,
  c: 40,
  d: 60,
  e: 100,
  f: 70,
  g: 10,
  h: 100,
  i: 60,
  j: 10,
  k: 40,
  l: 30,
  m: 50,
  n: 100,
};
const donutPercentageRigthChart = 80;

const termsChartData = [85.08, 1.76, 33.42, 75.11];

const tableTitle = 'Support Requests';
const tableHeaders = [
  { key: 'name', label: 'name' },
  { key: 'email', label: 'email' },
  { key: 'time', label: 'time' },
  { key: 'phone_number', label: 'phone number' },
  { key: 'city', label: 'city' },
];
const tableData = [
  {
    name: 'Cecilia Welch',
    email: 'heather_keeling@gottlieb.ca',
    time: '01:06AM',
    phone_number: '215-593-5846',
    city: 'South Mariane',
  },
  {
    name: 'Sara Glover',
    email: 'floyd_brakus@lindgren.com',
    time: '00:22AM',
    phone_number: '057-812-3947',
    city: 'East Maryam',
  },
  {
    name: 'Harriett Morgan',
    email: 'jabari.kilback@nelson.tv',
    time: '12:22PM',
    phone_number: '866-668-0327',
    city: 'Monserratmouth',
  },
  {
    name: 'Susie Curry',
    email: 'theo_gleichner@kaia.org',
    time: '07:56PM',
    phone_number: '647-851-5280',
    city: 'Lonnyburgh',
  },
  {
    name: 'Edgar Greer',
    email: 'ankunding_ralph@gmail.com',
    time: '08:35AM',
    phone_number: '985-747-0063',
    city: 'Schmittfurt',
  },
  {
    name: 'Minerva Massey',
    email: 'lia_purdy@yahoo.com',
    time: '03:24AM',
    phone_number: '488-514-5012',
    city: 'South Lori',
  },
];

const paginationElementsPerPage = 20;
const paginationTotalDataElements = 25;

const OverviewPage = () => {
  return (
    <>
      {/* <!-- overview header --> */}
      <OverviewHeader
        insertions={overviewHeaderInsertions}
        progress={overviewHeaderProgress}
      />
      {/* <!-- overview carts --> */}
      <div className="grid-wrapper overview-layout">
        {/* <!-- left chart --> */}
        <div className="box chart-one">
          <ChartCard
            title={titleLeftChart}
            followers={followersLeftChart}
            color={colorLeftChart}
            barsData={barsLeftChart}
            donutPercentage={donutPercentageLeftChart}
          />
        </div>

        {/* <!-- rigth chart --> */}
        <div className="box chart-two">
          <ChartCard
            title={titleRigthChart}
            followers={followersRigthChart}
            color={colorRigthChart}
            barsData={barsRigthChart}
            donutPercentage={donutPercentageRigthChart}
          />
        </div>

        {/* <!-- terms --> */}
        <div className="box terms">
          <Termschart termsData={termsChartData} />
        </div>

        {/* <!-- table --> */}
        <div className="box chart-table">
          <Table
            title={tableTitle}
            headers={tableHeaders}
            tableData={tableData}
          />
        </div>

        {/* <!-- pagination --> */}
        <div className="pagination">
          <Pagination
            elementsPerPage={paginationElementsPerPage}
            totalDataElements={paginationTotalDataElements}
          />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
