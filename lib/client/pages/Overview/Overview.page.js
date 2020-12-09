import React from 'react';
import useOverviewPage from '../../hooks/useOverviewPage';

import './overview.css';

import OverviewHeader from '../../component/OverviewHeader/OverviewHeader';
import ChartCard from '../../component/ChartCard/ChartCard';
import Termschart from '../../component/Termschart/Termschart';
import Table from '../../component/Table/Table';
import Pagination from '../../component/Pagination/Pagination';

// mock data
import {
  overviewHeaderInsertions,
  overviewHeaderProgress,
  titleLeftChart,
  followersLeftChart,
  colorLeftChart,
  barsLeftChart,
  donutPercentageLeftChart,
  titleRigthChart,
  followersRigthChart,
  colorRigthChart,
  barsRigthChart,
  donutPercentageRigthChart,
  termsChartData,
  tableTitle,
} from '../../utils/mockData';

const OverviewPage = () => {
  const {
    totaleElements,
    headers,
    elementsToDisplay,
    currentPage,
    setCurrentPage,
  } = useOverviewPage(6);

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
            headers={headers}
            tableData={elementsToDisplay}
          />
        </div>

        {/* <!-- pagination --> */}
        <div className="pagination">
          <Pagination
            elementsPerPage={6}
            totalDataElements={totaleElements.length}
            currentPage={currentPage}
            handlePagination={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
