import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Assets
  import Usa from "assets/img/dashboards/usa.png";
  // Custom components
  import MiniCalendar from "components/calendar/MiniCalendar";
  import MiniStatistics from "components/card/MiniStatistics";
  import IconBox from "components/icons/IconBox";
  import React, { useState, useEffect } from "react";
  import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
  } from "react-icons/md";
  import CheckTable from "views/Shareholder/Franchise/components/CheckTable";
  import YoutubeComplaxes from "views/Shareholder/default/components/YoutubePu";
  
  import Tasks from "views/Shareholder/default/components/Tasks";
  import TotalSpent from "views/Shareholder/Franchise/components/TotalSpent";
  import WeeklyRevenue from "views/Shareholder/Franchise/components/WeeklyRevenue";
  import {columnsDataDevelopment} from "views/Shareholder/Franchise/variables/columnsData";
  import tableDataDevelopment from "views/Shareholder/Franchise/variables/tableDataDevelopment.json";
  import axios from "axios";
  import {
    columnsDataCheck,
    columnsHistoryCheck,
    columnsDataComplex,
  } from "views/Shareholder/default/variables/columnsData";
  import tableDataCheck from "views/Shareholder/Franchise/variables/tableDataCheck.json";
  import tableDataComplex from "views/Shareholder/default/variables/tableDataComplex.json";
  import tableHistory from "views/Shareholder/default/variables/tableHistory.json";
  import DevelopmentTable from "views/Shareholder/Franchise/components/DevelopmentTable"
  
  export default function UserReports() {

    const [data, setData] = useState(null);

    // Chakra Color Mode
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");
          const headers = {
            Authorization: `${token}`,
          };
  
          const response = await axios.get(
            "https://api.purposeblacketh.com/api/shareHolder/dashBoard/",
            { headers }
          );
  
          const apiData = response.data.data;
          console.log("apis", apiData)
          const res = { obj: apiData.payment_history.slice(0, 3) };
          const curr = {ans: apiData.completedShareInfo.slice(0,3)}
          let agris = 0
          
          if (
            apiData.currentShareInfo.shareCatagory === "franchise" &&
            apiData.currentShareInfo.shareType === "agri"
          ) {
            // Only update agris if the conditions are met
            agris ={ans: apiData.currentShareInfo.numberOfShare} ;
            console.log("franchisss",agris)
          }else{
            agris = {ans: 0}
          }
          let ago = 0

          if (
            apiData.currentShareInfo.shareCatagory === "franchise" &&
            apiData.currentShareInfo.shareType === "agro"
          ) {
            // Only update agris if the conditions are met
            ago ={ans: apiData.currentShareInfo.numberOfShare} ;
          
          }else{
            ago = {ans:0}
          }

         
          
          
          const franchiseData = {
            name: "Franchise",
            growth: "buy",
            value: apiData.completedShareInfo[1]?.numberOfShare || "0",
          };
          const ordinaryData = {
            name: "Ordinary",
            growth: "buy",
            value: apiData.completedShareInfo[0]?.numberOfShare || "0",
          };
          const tsmData = {
            name: "TSM",
            growth: "buy",
            value: apiData.completedShareInfo[2]?.numberOfShare || "0",
          };
          const totalData = {
            name: "Total",
            value:
              parseInt(ago.ans) +
              parseInt(agris.ans) 
              
          };
  
          setData({
            franchiseData,
            ordinaryData,
            tsmData,
            totalData,
            checkTableData: res.obj,
            shareInfo: curr.ans,
            AF: agris.ans,
            AGO: ago.ans
            
            
            
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []); 

  
    if (!data) {
      // Render loading state or return null
      return null;
    }
 
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "xl": 4 }}
          gap='25px'
          mb='20px' >
            
          {/* <MiniStatistics
            name='Retail Franchise (RF)'
            value='10 Type 1 Shop'
            
          /> */}
          <MiniStatistics
            name='Agriculture Franchise (AF)'
            value= {data.AF}
            
          />
          <MiniStatistics
            name='Ago-Processing'
            value={data.AGO}
          />
         
          
          <MiniStatistics
          
            {...data.totalData}
          />
        </SimpleGrid>
  
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
          <Box>
          <TotalSpent  mb='20px'/>
          <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={data.checkTableData}
        />
          </Box>
          <CheckTable columnsData={columnsHistoryCheck} tableData={data.shareInfo}  w='50%'/>
        </SimpleGrid>
        
     
      </Box>
    );
  }
  