import User from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/a-sm.jpg";
import User4 from "../../../images/avatar/d-sm.jpg";
import React from "react";
import { UserAvatar, Icon } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";


export const basicData = {
  header: ["#", "First", "Last"],
  data: [
    {
      id: "1",
      first: "Mark",
      last: "Otto",
    },
    {
      id: "2",
      first: "Jacob",
      last: "Thornton",
    },
    {
      id: "3",
      first: "Larry",
      last: "the bird",
    },
  ],
};

export const dataTableColumns = [
  {
    name: "Sport",
    selector: (row) => row.sportTitle,
    sortable: true,
  },
  {
    name: "Start Time",
    selector: (row) => row.commenceTime,
    sortable: true,
    hide: 370,
  },
  {
    name: "Home",
    selector: (row) => row.homeTeam,
    sortable: true,
    hide: 370,
  },
  {
    name: "Away",
    selector: (row) => row.awayTeam,
    sortable: true,
    hide: "sm",
  },
  {
    name: "Bookmaker",
    selector: (row) => row.bookmakerTitle,
    sortable: true,
    hide: "sm",
  },
  {
    name: "Win",
    selector: (row) => row.winOdds,
    sortable: true,
    hide: "md",
  },
  {
    name: "Draw",
    selector: (row) => row.drawOdds,
    sortable: true,
    hide: "md",
  },
  {
    name: "Loss",
    selector: (row) => row.lossOdds,
    sortable: true,
    hide: "md",
  },
  {
    name: "NV-W",
    selector: (row) => row.noVigWinOdds,
    sortable: true,
    hide: "md",
  },
  {
    name: "NV-D",
    selector: (row) => row.noVigLossOdds,
    sortable: true,
    hide: "md",
  },
  {
    name: "NV-L",
    selector: (row) => row.noVigDrawOdds,
    sortable: true,
    hide: "md",
  },
  {
    name: "NV-W%",
    selector: (row) => row.noVigWinPercentage,
    sortable: true,
    hide: "md",
  },
  {
    name: "NV-D%",
    selector: (row) => row.noVigDrawPercentage,
    sortable: true,
    hide: "md",
  },
  {
    name: "NV-L%",
    selector: (row) => row.noVigLossPercentage,
    sortable: true,
    hide: "md",
  },
];

export const dataTableColumns2 = [
  {
    name: "User",
    selector: (row) => row.name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.name)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.name}{" "}
            <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ms-1`}
            ></span>
          </span>
          <span>{row.email}</span>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Balance",
    selector: (row) => row.balance,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        {row.balance} <span className="currency">USD</span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
    cell: (row) => <span>{row.phone}</span>,
    hide: "md",
  },
  {
    name: "Verified",
    selector: (row) => row.verified,
    sortable: true,
    minWidth: "170px",
    hide: "md",
    cell: (row) => (
      <ul className="list-status d-flex">
        <li>
          <Icon
            className={`text-${
              row.emailStatus === "success" ? "success" : row.emailStatus === "pending" ? "info" : "secondary"
            }`}
            name={`${
              row.emailStatus === "success"
                ? "check-circle"
                : row.emailStatus === "alert"
                ? "alert-circle"
                : "alarm-alt"
            }`}
          ></Icon>{" "}
          <span>Email</span>
        </li>
        <li>
          <Icon
            className={`text-${
              row.kycStatus === "success"
                ? "success"
                : row.kycStatus === "pending"
                ? "info"
                : row.kycStatus === "warning"
                ? "warning"
                : "secondary"
            }`}
            name={`${
              row.kycStatus === "success" ? "check-circle" : row.kycStatus === "pending" ? "alarm-alt" : "alert-circle"
            }`}
          ></Icon>{" "}
          <span>KYC</span>
        </li>
      </ul>
    ),
  },
  {
    name: "Last Login",
    selector: (row) => row.lastLogin,
    sortable: true,
    cell: (row) => <span>{row.lastLogin}</span>,
    hide: "lg",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    hide: "sm",
    cell: (row) => (
      <span
        className={`tb-status ms-1 text-${
          row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

// export const DataTableData = async () => {
//   try {
//     const response = await axios.get(`https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=${process.env.REACT_APP_API_KEY}`); // Replace with your API URL
//     const data = response.data;
//   console.log(data)

//      // Ensure data is an array
//      if (!Array.isArray(data)) {
//       throw new Error("API response is not an array");
//     }
    // Map the data from the API to the desired structure
    // return data.map((item) => {
      // const winOdds = item.odds.win; // Adjust based on actual API response
      // const drawOdds = item.odds.draw; // Adjust based on actual API response
      // const lossOdds = item.odds.loss; // Adjust based on actual API response

      // // Calculate the vig
      // const vig = (1 / winOdds) + (1 / drawOdds) + (1 / lossOdds) - 1;

      // // Calculate no-vig odds
      // const noVigWinOdds = 1 / ((1 / winOdds) + vig);
      // const noVigDrawOdds = 1 / ((1 / drawOdds) + vig);
      // const noVigLossOdds = 1 / ((1 / lossOdds) + vig);

      // // Calculate percentages
      // const noVigWinPercentage = (1 / noVigWinOdds) * 100;
      // const noVigDrawPercentage = (1 / noVigDrawOdds) * 100;
      // const noVigLossPercentage = (1 / noVigLossOdds) * 100;

      // return {
      //   id: item.id,
      //   sport_title: item.sport_title,
      //   home: item.home_team, // Adjust based on actual API response
      //   away: item.away_team, // Adjust based on actual API response
        // bookmaker: item.bookmaker, // Adjust based on actual API response
        // win: winOdds,
        // draw: drawOdds,
        // loss: lossOdds,
        // no_vig_win: noVigWinOdds,
        // no_vig_draw: noVigDrawOdds,
        // no_vig_loss: noVigLossOdds,
        // win_percentage: item.odds.win_percentage, // Adjust based on actual API response
        // draw_percentage: item.odds.draw_percentage, // Adjust based on actual API response
        // loss_percentage: item.odds.loss_percentage, // Adjust based on actual API response
        // no_vig_win_percentage: noVigWinPercentage,
        // no_vig_draw_percentage: noVigDrawPercentage,
        // no_vig_loss_percentage: noVigLossPercentage,
    //   };
    // });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Re-throw the error for handling in the calling function
//   }
// };


// export const DataTableData = [
//   {
//     id: 0,
//     sport: "Francine Kirby",
//     home: 24,
//     away: "female",
//     bookmaker: "BUZZWORKS",
//     win: "2017-02-17",
//     draw: "$2,570.39",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 1,
//     sport: "Reva Best",
//     home: 40,
//     away: "female",
//     bookmaker: "MARQET",
//     win: "2021-10-14",
//     draw: "$1,488.76",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 2,
//     sport: "Alexis Flores",
//     home: 21,
//     away: "female",
//     bookmaker: "OBONES",
//     win: "2020-04-28",
//     draw: "$1,336.93",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 3,
//     sport: "Nixon Sullivan",
//     home: 30,
//     away: "male",
//     bookmaker: "SLUMBERIA",
//     win: "2016-10-08",
//     draw: "$2,156.70",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 4,
//     sport: "Foreman Wooten",
//     home: 20,
//     away: "male",
//     bookmaker: "ESCENTA",
//     win: "2018-07-12",
//     draw: "$3,057.42",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 5,
//     sport: "Franco Davis",
//     home: 28,
//     away: "male",
//     bookmaker: "ZILLACON",
//     win: "2015-10-08",
//     draw: "$2,730.88",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 6,
//     sport: "Bullock Kline",
//     home: 32,
//     away: "male",
//     bookmaker: "SAVVY",
//     win: "2017-07-03",
//     draw: "$2,986.05",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 7,
//     sport: "Baird Coffey",
//     home: 36,
//     away: "male",
//     bookmaker: "BLEENDOT",
//     win: "2014-01-27",
//     draw: "$2,755.80",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 8,
//     sport: "Eula Walters",
//     home: 40,
//     away: "female",
//     bookmaker: "UXMOX",
//     win: "2020-09-19",
//     draw: "$3,302.75",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 9,
//     sport: "Gaines Moss",
//     home: 26,
//     away: "male",
//     bookmaker: "INCUBUS",
//     win: "2017-10-13",
//     draw: "$3,856.24",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 10,
//     sport: "Sargent Winters",
//     home: 28,
//     away: "male",
//     bookmaker: "AUSTEX",
//     win: "2020-12-26",
//     draw: "$3,668.64",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 11,
//     sport: "Sybil Patton",
//     home: 35,
//     away: "female",
//     bookmaker: "ZILIDIUM",
//     win: "2020-06-19",
//     draw: "$1,987.14",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 12,
//     sport: "Henderson Elliott",
//     home: 39,
//     away: "male",
//     bookmaker: "ZOARERE",
//     win: "2016-08-16",
//     draw: "$1,795.31",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 13,
//     sport: "Combs Irwin",
//     home: 33,
//     away: "male",
//     bookmaker: "COLAIRE",
//     win: "2017-07-19",
//     draw: "$2,396.73",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   {
//     id: 14,
//     sport: "Fleming Buchanan",
//     home: 33,
//     away: "male",
//     bookmaker: "WEBIOTIC",
//     win: "2021-09-12",
//     draw: "$3,406.96",
//     loss: "4515",
//     nvw:"52258",
//     nvd:"89566",
//     nvl:"8595"
//   },
//   // {
  //   id: 15,
  //   name: "Mcbride Dixon",
  //   home: 25,
  //   away: "male",
  //   bookmaker: "ZBOO",
  //   win: "2017-12-08",
  //   draw: "$1,065.32",
  // },
  // {
  //   id: 16,
  //   name: "Nettie Greer",
  //   home: 32,
  //   away: "female",
  //   bookmaker: "QUONK",
  //   win: "2014-03-15",
  //   draw: "$1,558.83",
  // },
  // {
  //   id: 17,
  //   name: "Anita Saunders",
  //   home: 39,
  //   away: "female",
  //   bookmaker: "IDEALIS",
  //   win: "2015-07-31",
  //   draw: "$1,848.84",
  // },
  // {
  //   id: 18,
  //   name: "Darcy Mcclain",
  //   home: 24,
  //   away: "female",
  //   bookmaker: "DIGIGEN",
  //   win: "2020-02-19",
  //   draw: "$3,382.78",
  // },
  // {
  //   id: 19,
  //   name: "Jodi Knowles",
  //   home: 32,
  //   away: "female",
  //   bookmaker: "KONGENE",
  //   win: "2014-03-09",
  //   draw: "$1,668.05",
  // },
  // {
  //   id: 20,
  //   name: "Cathleen Schroeder",
  //   home: 21,
  //   away: "female",
  //   bookmaker: "TROPOLIS",
  //   win: "2014-09-28",
  //   draw: "$2,730.21",
  // },
  // {
  //   id: 21,
  //   name: "Lea Fitzgerald",
  //   home: 24,
  //   away: "female",
  //   bookmaker: "AVENETRO",
  //   win: "2015-08-17",
  //   draw: "$2,547.85",
  // },
  // {
  //   id: 22,
  //   name: "Pitts Graham",
  //   home: 20,
  //   away: "male",
  //   bookmaker: "MALATHION",
  //   win: "2020-05-08",
  //   draw: "$3,538.05",
  // },
  // {
  //   id: 23,
  //   name: "Lane Glass",
  //   home: 22,
  //   away: "male",
  //   bookmaker: "NETROPIC",
  //   win: "2020-01-26",
  //   draw: "$1,141.42",
  // },
  // {
  //   id: 24,
  //   name: "Tisha Cleveland",
  //   home: 33,
  //   away: "female",
  //   bookmaker: "YURTURE",
  //   win: "2020-01-11",
  //   draw: "$2,877.89",
  // },
  // {
  //   id: 25,
  //   name: "Ortiz Nguyen",
  //   home: 34,
  //   away: "male",
  //   bookmaker: "TRIBALOG",
  //   win: "2019-07-09",
  //   draw: "$3,156.79",
  // },
  // {
  //   id: 26,
  //   name: "Katrina Alvarado",
  //   home: 33,
  //   away: "female",
  //   bookmaker: "PYRAMIA",
  //   win: "2016-07-04",
  //   draw: "$2,273.02",
  // },
  // {
  //   id: 27,
  //   name: "Craig Chang",
  //   home: 30,
  //   away: "male",
  //   bookmaker: "COMVEYER",
  //   win: "2019-09-08",
  //   draw: "$3,028.17",
  // },
  // {
  //   id: 28,
  //   name: "Joann Short",
  //   home: 30,
  //   away: "female",
  //   bookmaker: "PRISMATIC",
  //   win: "2017-08-17",
  //   draw: "$2,041.14",
  // },
  // {
  //   id: 29,
  //   name: "Vargas Rivers",
  //   home: 23,
  //   away: "male",
  //   bookmaker: "ELPRO",
  //   win: "2014-04-25",
  //   draw: "$1,906.04",
  // },
  // {
  //   id: 30,
  //   name: "Snow Hampton",
  //   home: 37,
  //   away: "male",
  //   bookmaker: "SNORUS",
  //   win: "2014-11-30",
  //   draw: "$1,419.30",
  // },
  // {
  //   id: 31,
  //   name: "Ellison Pennington",
  //   home: 32,
  //   away: "male",
  //   bookmaker: "APEX",
  //   win: "2020-02-06",
  //   draw: "$3,486.62",
  // },
  // {
  //   id: 32,
  //   name: "Kate Donaldson",
  //   home: 28,
  //   away: "female",
  //   bookmaker: "TALENDULA",
  //   win: "2021-07-05",
  //   draw: "$3,025.63",
  // },
  // {
  //   id: 33,
  //   name: "Bridges Franco",
  //   home: 20,
  //   away: "male",
  //   bookmaker: "FURNAFIX",
  //   win: "2021-09-21",
  //   draw: "$1,371.72",
  // },
  // {
  //   id: 34,
  //   name: "Montgomery Moreno",
  //   home: 24,
  //   away: "male",
  //   bookmaker: "ZIORE",
  //   win: "2018-08-04",
  //   draw: "$1,016.90",
  // },
  // {
  //   id: 35,
  //   name: "Meyers Barnett",
  //   home: 25,
  //   away: "male",
  //   bookmaker: "OCEANICA",
  //   win: "2017-03-04",
  //   draw: "$3,804.05",
  // },
  // {
  //   id: 36,
  //   name: "Gertrude Glenn",
  //   home: 29,
  //   away: "female",
  //   bookmaker: "FORTEAN",
  //   win: "2018-04-19",
  //   draw: "$3,883.97",
  // },
  // {
  //   id: 37,
  //   name: "Wise Fitzpatrick",
  //   home: 34,
  //   away: "male",
  //   bookmaker: "RODEOLOGY",
  //   win: "2017-11-08",
  //   draw: "$1,400.23",
  // },
  // {
  //   id: 38,
  //   name: "Joseph Leonard",
  //   home: 30,
  //   away: "male",
  //   bookmaker: "QIMONK",
  //   win: "2014-12-01",
  //   draw: "$2,689.09",
  // },
  // {
  //   id: 39,
  //   name: "Booker Chambers",
  //   home: 24,
  //   away: "male",
  //   bookmaker: "SKYPLEX",
  //   win: "2014-07-29",
  //   draw: "$3,949.05",
  // },
  // {
  //   id: 40,
  //   name: "Corrine Kerr",
  //   home: 35,
  //   away: "female",
  //   bookmaker: "FIBEROX",
  //   win: "2019-06-07",
  //   draw: "$2,245.15",
  // },
  // {
  //   id: 41,
  //   name: "Williamson Daniel",
  //   home: 26,
  //   away: "male",
  //   bookmaker: "GREEKER",
  //   win: "2020-09-15",
  //   draw: "$3,814.20",
  // },
  // {
  //   id: 42,
  //   name: "Anthony Oneill",
  //   home: 36,
  //   away: "male",
  //   bookmaker: "MIXERS",
  //   win: "2020-07-22",
  //   draw: "$1,129.99",
  // },
  // {
  //   id: 43,
  //   name: "Marquita Hubbard",
  //   home: 25,
  //   away: "female",
  //   bookmaker: "VELOS",
  //   win: "2015-11-19",
  //   draw: "$2,227.39",
  // },
  // {
  //   id: 44,
  //   name: "Dena Clements",
  //   home: 34,
  //   away: "female",
  //   bookmaker: "ORBEAN",
  //   win: "2020-08-31",
  //   draw: "$2,689.21",
  // },
  // {
  //   id: 45,
  //   name: "Tia Curry",
  //   home: 37,
  //   away: "female",
  //   bookmaker: "MUSAPHICS",
  //   win: "2019-04-02",
  //   draw: "$3,784.72",
  // },
  // {
  //   id: 46,
  //   name: "Rios House",
  //   home: 30,
  //   away: "male",
  //   bookmaker: "IMPERIUM",
  //   win: "2015-08-23",
  //   draw: "$1,519.37",
  // },
  // {
  //   id: 47,
  //   name: "Whitfield Mcleod",
  //   home: 37,
  //   away: "male",
  //   bookmaker: "SCHOOLIO",
  //   win: "2015-03-17",
  //   draw: "$2,365.21",
  // },
  // {
  //   id: 48,
  //   name: "Conrad Holt",
  //   home: 38,
  //   away: "male",
  //   bookmaker: "MENBRAIN",
  //   win: "2020-02-01",
  //   draw: "$2,289.04",
  // },
  // {
  //   id: 49,
  //   name: "Mclaughlin Fletcher",
  //   home: 34,
  //   away: "male",
  //   bookmaker: "SOLAREN",
  //   win: "2018-09-05",
  //   draw: "$1,115.62",
  // },
// ];

export const userData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Abu Bin Ishtiyak",
    displayName: "Ishtiak",
    dob: "10 Aug, 1980",
    role: "Customer",
    checked: false,
    email: "info@softnio.com",
    balance: "35,040.34",
    phone: "818474958",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "10 Feb 2020",
    status: "Active",
    address: "2337 Kildeer Drive",
    state: "Kentucky",
    country: "Canada",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    dob: "10 Sept, 1990",
    role: "Investor",
    email: "ashley@softnio.com",
    balance: "580.00",
    checked: false,
    phone: "1243941787",
    emailStatus: "success",
    kycStatus: "pending",
    lastLogin: "07 Feb 2020",
    status: "Pending",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 3,
    avatarBg: "info",
    name: "Joe Larson",
    dob: "19 Jan, 1985",
    role: "Customer",
    email: "larson@example.com",
    balance: "32,000.34",
    checked: false,
    phone: "1686032320",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "04 Feb 2020",
    status: "Active",
    country: "England",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Jane Montgomery",
    dob: "24 April, 1985",
    role: "Subscriber",
    email: "jane84@example.com",
    balance: "0.00",
    checked: false,
    phone: "4392715360",
    emailStatus: "alert",
    kycStatus: "alert",
    lastLogin: "01 Feb 2020",
    status: "Suspend",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 5,
    avatarBg: "purple",
    name: "Frances Burns",
    dob: "30 May, 2000",
    role: "Manager",
    image: User,
    email: "frances@example.com",
    balance: "42.50",
    checked: false,
    phone: "6391303150",
    emailStatus: "pending",
    kycStatus: "error",
    lastLogin: "31 Jan 2020",
    status: "Active",
    country: "Bangladesh",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 6,
    avatarBg: "primary",
    name: "Alan Butler",
    dob: "10 Feb, 1997",
    role: "Investor",
    image: User2,
    email: "butler@example.com",
    balance: "440.34",
    checked: false,
    phone: "9633091706",
    emailStatus: "pending",
    kycStatus: "warning",
    lastLogin: "18 Jan 2020",
    status: "Inactive",
    country: "India",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "Victoria Lynch",
    dob: "02 May, 1993",
    role: "Investor",
    email: "victoria@example.com",
    balance: "59,400.68",
    checked: false,
    phone: "8119854846",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "15 Jan 2020",
    status: "Active",
    country: "China",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 8,
    avatarBg: "success",
    name: "Patrick Newman",
    dob: "15 Feb, 1997",
    role: "Customer",
    email: "patrick@example.com",
    balance: "30.00",
    checked: false,
    phone: "9422384474",
    emailStatus: "success",
    kycStatus: "pending",
    lastLogin: "08 Jan 2020",
    status: "Active",
    country: "India",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 9,
    avatarBg: "purple",
    name: "Jane Harris",
    dob: "28 Feb, 1985",
    role: "Customer",
    image: User4,
    email: "harris@example.com",
    balance: "5,530.23",
    checked: false,
    phone: "1234472384",
    emailStatus: "pending",
    kycStatus: "pending",
    lastLogin: "02 Jan 2020",
    status: "Pending",
    country: "Vietnam",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "Emma Walker",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "walker@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 11,
    avatarBg: "pink",
    name: "Lilja Peltola",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "lilja@example.com",
    balance: "105.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "pending",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Canada",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 12,
    avatarBg: "secondary",
    name: "Annette Hunter",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "hunter@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "25 Dec 2019",
    status: "Pending",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 13,
    avatarBg: "pink",
    name: "Sara Koivisto",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "sara@example.com",
    balance: "165.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "rejected",
    kycStatus: "pending",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Russia",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 14,
    avatarBg: "blue",
    name: "Kianna Pham",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "kiana@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Suspend",
    country: "South Korea",
    designation: "Accountant",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 15,
    avatarBg: "pink",
    name: "Raymond Atkins",
    dob: "30 Dec, 1998",
    role: "Customer",
    image: User4,
    email: "sara@example.com",
    balance: "165.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "rejected",
    kycStatus: "pending",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Russia",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 16,
    avatarBg: "blue",
    name: "Amira Talley",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "amira@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Saudi Arabia",
    designation: "Lecturer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 17,
    avatarBg: "secondary",
    name: "Lana Steiner",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "steinar@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Pending",
    country: "Latvia",
    designation: "Accountant",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 18,
    avatarBg: "warning",
    name: "Joshua Mcnair",
    dob: "30 Dec, 1998",
    image: User4,
    role: "Admin",
    email: "joshua@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Suspend",
    country: "Ireland",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 19,
    avatarBg: "secondary",
    name: "Asiya Wolff",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "asia@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Latvia",
    designation: "Accountant",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 20,
    avatarBg: "warning",
    name: "Fox Mccloud",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "fox@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Suspend",
    country: "Ireland",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
];
