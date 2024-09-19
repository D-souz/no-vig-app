import React from "react";
import axios from "axios";

import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../../components/Component";
import { DataTableData, dataTableColumns, dataTableColumns2, userData } from "./TableData";

const DataTablePage = () => {


  return (
    <>
      <Head title="Homepage" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            {/* <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo> */}
            <BlockTitle tag="h2" className="fw-normal">
              No-Vig App
            </BlockTitle>
            <BlockDes>
              <p className="lead">
              The tables in this section show the scoccer games; current games in play, upcoming and live{" "}
              They show odds and no-vig odds & percentages from some betting houses 
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>
{/* 
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable Default</BlockTitle>
              <p>
                Just import <code>ReactDataTable</code> from <code>components</code>, it is built in for react dashlite.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination />
          </PreviewCard>
        </Block> */}

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with current events (W, D, L)</BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination actions />
          </PreviewCard>
        </Block>


        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with current events (under & over )</BlockTitle>
          </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination actions />
          </PreviewCard>
        </Block>


        {/* <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with custom markup</BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable
              data={userData}
              columns={dataTableColumns2}
              pagination
              className="nk-tb-list"
              selectableRows
            />
          </PreviewCard>
        </Block> */}
      </Content>
    </>
  );
};
export default DataTablePage;
