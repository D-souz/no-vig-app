import React, { useState, useEffect } from "react";
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
import {dataTableColumns, dataTableColumns2 } from "./TableData";


const DataTablePage = () => {
const [DataTableData, setDataTableData] = useState([]);
const [OverUnderData, setOverUnderData] = useState([]);
const [loading, setLoading] = useState(true); // State to manage loading
const [error, setError] = useState(null); // State to manage errors

const formatCommenceTime = (commenceTime) => {
  const date = new Date(commenceTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`; // Format: dd/mm/yyyy hh:mm
};

  const calculateNoVigAndPercentages = (winOdds, lossOdds, drawOdds) => {
    const vig = (1 / winOdds) + (1 / lossOdds) + (drawOdds ? (1 / drawOdds) : 0) - 1;

    const noVigWinOdds =( 1 / ((1 / winOdds) + vig)).toFixed(3);
    const noVigLossOdds =( 1 / ((1 / lossOdds) + vig)).toFixed(3);
    const noVigDrawOdds = drawOdds ?( 1 / ((1 / drawOdds) + vig)).toFixed(3) : null;

    const noVigWinPercentage = ((1 / noVigWinOdds) * 100).toFixed(3);
    const noVigLossPercentage = ((1 / noVigLossOdds) * 100).toFixed(3);
    const noVigDrawPercentage = drawOdds ? ((1 / noVigDrawOdds) * 100).toFixed(3) : null;

    return {
      noVigWinOdds,
      noVigLossOdds,
      noVigDrawOdds,
      noVigWinPercentage,
      noVigLossPercentage,
      noVigDrawPercentage,
    };
  };


    // Fetch data function for table 1
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=${process.env.REACT_APP_API_KEY}`);
        const rawData = response.data;
  
        const results = rawData.map(event => {
          const sportTitle = event.sport_title;
          const commenceTime = event.commence_time;
          const formattedCommenceTime = formatCommenceTime(commenceTime);
          const homeTeam = event.home_team;
          const awayTeam = event.away_team;
  
          // Accessing bookmakers and mapping them
          return event.bookmakers.map(bookmaker => {
            const bookmakerTitle = bookmaker.title;
            const h2hMarket = bookmaker.markets.find(market => market.key === 'h2h');
            const outcomes = h2hMarket ? h2hMarket.outcomes : [];
  
            const winOdds = outcomes.find(outcome => outcome.name === homeTeam)?.price;
            const lossOdds = outcomes.find(outcome => outcome.name === awayTeam)?.price;
            const drawOdds = outcomes.find(outcome => outcome.name === 'Draw')?.price;

          // Calculate no-vig odds and percentages
          const {
            noVigWinOdds,
            noVigLossOdds,
            noVigDrawOdds,
            noVigWinPercentage,
            noVigLossPercentage,
            noVigDrawPercentage,
          } = calculateNoVigAndPercentages(winOdds, lossOdds, drawOdds);
  
            // Return an object with the relevant data
            return {
              sportTitle,
              commenceTime: formattedCommenceTime,
              homeTeam,
              awayTeam,
              bookmakerTitle,
              winOdds,
              drawOdds,
              lossOdds,
              noVigWinOdds,
              noVigLossOdds,
              noVigDrawOdds,
              noVigWinPercentage,
              noVigLossPercentage,
              noVigDrawPercentage,
            };
          });
        }).flat(); // Flatten the results to get a single array
  
        setDataTableData(results); // Set the fetched data
      } catch (error) {
        setError('Error fetching data'); // Set error state
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading state to false
      }
    };

    // fetch data for table 2

    const fetchOverUnderData = async () => {
      try {
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=totals&apiKey=${process.env.REACT_APP_API_KEY}`); // Replace with your Over/Under API URL
        const rawData = response.data;
    
        const results = rawData.map(event => {
          const sportTitle = event.sport_title;
          const commenceTime = event.commence_time;
          const formattedCommenceTime = formatCommenceTime(commenceTime);
          const homeTeam = event.home_team;
          const awayTeam = event.away_team;
    
          return event.bookmakers.map(bookmaker => {
            const bookmakerTitle = bookmaker.title;
            const totalsMarket = bookmaker.markets.find(market => market.key === 'totals');
            const outcomes = totalsMarket ? totalsMarket.outcomes : [];
    
            const overOutcome = outcomes.find(outcome => outcome.name === 'Over');
            const underOutcome = outcomes.find(outcome => outcome.name === 'Under');
    
            const overOdds = overOutcome ? overOutcome.price : null;
            const underOdds = underOutcome ? underOutcome.price : null;
            const points = overOutcome ? overOutcome.point : null; // Assuming points are the same for Over and Under
    
            let noVigOverOdds = null;
            let noVigUnderOdds = null;
            let noVigOverPercentage = null;
            let noVigUnderPercentage = null;
    
            if (overOdds && underOdds) {
              const vig = (1 / overOdds) + (1 / underOdds) - 1;
    
              noVigOverOdds = (1 / ((1 / overOdds) + vig)).toFixed(3);
              noVigUnderOdds = (1 / ((1 / underOdds) + vig)).toFixed(3);
    
              noVigOverPercentage = (1 / noVigOverOdds) * 100;
              noVigUnderPercentage = (1 / noVigUnderOdds) * 100;
            }
    
            return {
              sportTitle,
              commenceTime: formattedCommenceTime,
              homeTeam,
              awayTeam,
              bookmakerTitle,
              overOdds,
              underOdds,
              points,
              noVigOverOdds,
              noVigUnderOdds,
              noVigOverPercentage,
              noVigUnderPercentage,
            };
          });
        }).flat();
    
        setOverUnderData(results); // Set the Over/Under odds data
      } catch (error) {
        setError('Error fetching Over/Under data');
        console.error('Error fetching Over/Under data:', error);
      }
    };

    useEffect(() => {
      fetchData(); // data for table 1
      fetchOverUnderData() // data for table 2
    }, []);
  
    // Conditional rendering based on loading and error state
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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
            <ReactDataTable data={OverUnderData} columns={dataTableColumns2} expandableRows pagination actions />
          </PreviewCard>
        </Block>

      </Content>
    </>
  );
};
export default DataTablePage;
