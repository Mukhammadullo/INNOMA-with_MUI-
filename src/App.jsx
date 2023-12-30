import './App.css'
import { useTranslation } from "react-i18next"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// dark
import Switcher from './components/Switcher'

// mui
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Drawer from '@mui/material/Drawer';


function App() {
  const [lng, setLng] = useState("ru");
  const { t, i18n } = useTranslation()


  //  function
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }



  // ___________________
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="text-center bg-[#07AF91]"
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <h1 className='m-[40px] text-[20px] font-bold'>{t("header.li1")}</h1>
      <h1 className='m-[40px] text-[20px] font-bold'>{t("header.li2")}</h1>
      <h1 className='m-[40px] text-[20px] font-bold'>{t("header.li3")}</h1>
      <h1 className='m-[40px] text-[20px] font-bold'>{t("header.li4")}</h1>


    </Box>
  );


  return (

    <>



      <div className='main p-[2%] dark:bg-[black]'>
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

          <img src='src/assets/INNOMA.VC.png' />

          <ul className='flex font-bold mob:hidden md:inline-flex text-[white]'>
            <li className='m-[20px]'>{t("header.li1")}</li>
            <li className='m-[20px]'>{t("header.li2")}</li>
            <li className='m-[20px]'>{t("header.li3")}</li>
            <li className='m-[20px]'>{t("header.li4")}</li>
          </ul>

          <div className='mob:hidden md:inline-flex'>
            <Button variant="contained" sx={{ bgcolor: "#07AF91" }}>{t("header.btntxt")}</Button>
          </div>
          <select className='bg-[white] border-none text-black h-[30px] w-[55px] font-bold' value={lng} onChange={(e) => { changeLanguage(e.target.value); setLng(e.target.value) }}>
            <option value={"en"}>EN</option>
            <option value={"ru"}>RU</option>
          </select>


          <div className='md:hidden'>
            {['top'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon></MenuIcon>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          <Switcher />

        </Box>

        {/* innertitle */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", padding: "4%", marginLeft: "4%" }}>
          <Box>
            <h1 className='font-bold md:text-[30px] text-[white]'>{t("header.txt1")}</h1>
            <h1 className='font-bold md:text-[30px] text-[white]'>{t("header.txt2")}</h1>
            <h1 className='font-bold md:text-[30px] text-[white]'>{t("header.txt3")}</h1>
            <h1 className='text-[30px] text-[white] mb-[20px]'>{t("header.txt4")}</h1>
            <Button variant="contained" sx={{ bgcolor: "#016CA8" }}>{t("header.btn")}</Button>
          </Box>
        </Box>
      </div>


      {/* section1 */}
      <div className='md:flex p-[5%]  justify-between'>

        <div className='md:w-[50%]'>
          {/* left */}
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 className='text-[#1178B2] font-bold text-[40px] m-[30px]'>{t("section1.txt1")}</h1>
            <h1 className='text-[#1178B2] font-bold text-[20px] m-[30px]'>{t("section1.txt2")}</h1>
            <h1 className='w-[60%] m-[10px]'>{t("section1.txt3")}</h1>
            <h1 className='w-[60%] m-[10px]'>{t("section1.txt4")}</h1>
          </Box>
        </div>


        <div className='md:w-[50%]'>
          {/* right */}
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src='src/assets/kisspng-competitor-analysis-market-research-marketing-quan-5b102810d85456 1.png' />
            <Button variant="contained">{t("section1.btn1")}</Button>
          </Box>
        </div>
      </div>

      {/* section2 */}
      <div className='md:flex p-[5%]  justify-between'>

        <div className='md:w-[50%]'>
          {/* right */}
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src='src/assets/rocket 1.png' />
            <Button variant="contained">{t("section1.btn1")}</Button>
          </Box>
        </div>

        <div className='md:w-[50%]'>
          {/* left */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 className='text-[#1178B2] font-bold text-[40px] m-[30px]'>{t("section1.txt1")}</h1>
            <h1 className='text-[#1178B2] font-bold text-[20px] m-[30px]'>{t("section1.txt5")}</h1>
            <h1 className='w-[60%] m-[10px]'>{t("section1.txt5")}</h1>
            <h1 className='w-[60%] m-[10px]'>{t("section1.txt6")}</h1>
          </Box>
        </div>
      </div>


      {/* section3 */}
      <div>

        <h1 className='text-[#1178B2] font-bold text-[30px] ml-[50px]'>{t("section3.title")}</h1>
        <div className='md:flex'>

          <Box sx={{ boxShadow: "0px 0px  3px black", margin: "50px", padding: "50px" }}>
            <h1 className='text-[#1178B280] font-bold text-center text-[80px]'>01</h1>
            <h1>{t("section3.txt1")}</h1>
            <h1>{t("section3.txt2")}</h1>
          </Box>
          <Box sx={{ boxShadow: "0px 0px  3px black", margin: "50px", padding: "50px" }}>
            <h1 className='text-[#1178B280] font-bold text-center text-[80px]'>02</h1>
            <h1>{t("section3.txt3")}</h1>
            <h1>{t("section3.txt4")}</h1>
          </Box>
          <Box sx={{ boxShadow: "0px 0px 3px black", margin: "50px", padding: "50px" }}>
            <h1 className='text-[#1178B280] font-bold text-center text-[80px]'>03</h1>
            <h1>{t("section3.txt5")}</h1>
            <h1>{t("section3.txt6")}</h1>
          </Box>
        </div>

      </div>


      {/* section4 */}
      <div className='section4'>
        <Box sx={{ padding: "5%" }}>
          <h1 className='md:text-[60px] font-bold text-[white] text-center bg-[#07AF91]'>{t("section4.title")}</h1>
          <p className='text-center text-[white] md:text-[26px]'>{t("section4.txt")}</p>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button variant="contained">{t("section1.btn1")}</Button>
          </Box>
        </Box>
      </div>


      {/* section5 */}
      <div>

        <Box sx={{ display: "flex", justifyContent: "center", padding: "4%" }}>
          <h1 className='text-[#1178B2] font-bold md:text-[30px]'>{t("section5.title")}</h1>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ padding: "20px", bgcolor: "#88BBD8" }}>{t("section5.txt1")}</Box>
            <Box sx={{ padding: "20px", bgcolor: "#EEF1F4" }}>{t("section5.txt2")}</Box>
            <Box sx={{ padding: "20px", bgcolor: "#EEF1F4" }}>{t("section5.txt3")}</Box>
            <Box sx={{ padding: "20px", bgcolor: "#EEF1F4" }}>{t("section5.txt4")}</Box>
          </Box>
        </Box>


        <div className='md:flex justify-around  mt-[4%]'>

          {/* left */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 className='md:text-[20px] font-bold'>{t("section5.txt5")}</h1>
            <h1 className='text-[#07AF91] text-[30px] font-bold'>{t("section5.txt6")}</h1>
            <h1 className='w-[50%]'>{t("section5.txt7")}</h1>
            <Button sx={{ marginTop: "20px", width: "200px", height: "60px" }} variant="contained">{t("section1.btn1")}</Button>
          </Box>
          {/* rigth */}
          <div className='md:flex'>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ width: "250px", height: "15vh", margin: "10px", borderRadius: "8px", boxShadow: "0px 0px 3px black" }}><h1 className='font-bold text-center p-[5%] text-[#1178B280]'>5.5 millon</h1></Box>
              <Box sx={{ width: "250px", height: "15vh", margin: "10px", borderRadius: "8px", boxShadow: "0px 0px 3px black" }}><h1 className='font-bold text-center p-[5%] text-[#1178B280]'>3.5 millon</h1></Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ width: "250px", height: "15vh", margin: "10px", borderRadius: "8px", boxShadow: "0px 0px 3px black" }}><h1 className='font-bold text-center p-[5%] text-[#1178B280]'>12.5 millon</h1></Box>
              <Box sx={{ width: "250px", height: "15vh", margin: "10px", borderRadius: "8px", boxShadow: "0px 0px 3px black", bgcolor: "#1178B2" }}><h1 className='font-bold text-center p-[5%] text-[white]'>8.5 millon</h1></Box>
            </Box>
          </div>

        </div>
      </div>




      {/* section6 */}

      <div className='flex justify-center'>
        <div className='p-[5%] flex flex-col items-center'>
          <h1 className='text-[#1178B2] font-bold md:text-[40px]'>{t("section6.txt1")}</h1>
          <h1 className='w-[60%]'>{t("section6.txt2")}</h1>
        </div>




      </div>

      <div className='md:flex justify-around'>
        <div className='shadow-xl p-[5%] mt-[3%] rounded-[12px] flex flex-col items-center '>
          <img src='src/assets/3.png' />

          <h1 className='font-bold mt-[10px]'>{t("section6.txt3")}</h1>
        </div>
        <div className='shadow-xl p-[5%] mt-[3%] rounded-[12px] flex flex-col items-center'>
          <img src='src/assets/Vector (4).png' />
          <h1 className='font-bold mt-[10px]'>{t("section6.txt4")}</h1>
        </div>
        <div className='shadow-xl p-[5%] mt-[3%] rounded-[12px] flex flex-col items-center'>
          <img src='src/assets/Vector (3).png' />
          <h1 className='font-bold mt-[10px]'>{t("section6.txt5")}</h1>
        </div>
      </div>
      <div className='bg-[#0F0F0F] p-[10%] m-[5%] rounded-3xl flex justify-center'>
        <img src='src/assets/Group 839.png' />
      </div>





      {/* section7 */}

      <div>
        <h1 className='text-[#1178B2] font-bold md:text-[40px] ml-[5%]'>{t("section7.title")}</h1>
        {/* accordin */}
        <div className='m-[5%]'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ boxShadow: "0px 0px 2px black" }}
            >
              <Typography><h1>{t("acordion.module1")}  {t("acordion.txt1")}</h1> </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t("acordion.txt2")}
              </Typography>
              <Typography>
                {t("acordion.txt3")}
              </Typography>
              <Typography>
                {t("acordion.txt4")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ boxShadow: "0px 0px 2px black" }}
            >
              <Typography><h1>{t("acordion.module2")}  {t("acordion.txt5")}</h1> </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t("acordion.txt2")}
              </Typography>
              <Typography>
                {t("acordion.txt3")}
              </Typography>
              <Typography>
                {t("acordion.txt4")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ boxShadow: "0px 0px 2px black" }}
            >
              <Typography><h1>{t("acordion.module3")}  {t("acordion.txt6")}</h1> </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t("acordion.txt2")}
              </Typography>
              <Typography>
                {t("acordion.txt3")}
              </Typography>
              <Typography>
                {t("acordion.txt4")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ boxShadow: "0px 0px 2px black" }}
            >
              <Typography><h1>{t("acordion.module4")}  {t("acordion.txt7")}</h1> </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t("acordion.txt2")}
              </Typography>
              <Typography>
                {t("acordion.txt3")}
              </Typography>
              <Typography>
                {t("acordion.txt4")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ boxShadow: "0px 0px 2px black" }}
            >
              <Typography><h1>{t("acordion.module5")}  {t("acordion.txt8")}</h1> </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t("acordion.txt2")}
              </Typography>
              <Typography>
                {t("acordion.txt3")}
              </Typography>
              <Typography>
                {t("acordion.txt4")}
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={{ boxShadow: "0px 0px 2px black" }}
            >
              <Typography>  {t("acordion.txt9")}</Typography>
            </AccordionSummary>
          </Accordion>
          <Button sx={{ marginTop: "20px", width: "200px", height: "50px" }} variant="contained">{t("section1.btn1")}</Button>
        </div>
      </div>


      {/* section8 */}
      <div className='bg-[#4457e5d7] p-[5%]'>
        <div className='md:flex justify-center , items-center'>
          {/* left */}
          <div>
            <h1 className='text-[white] font-bold md:text-[30px] w-[40%]'>{t("section8.txt1")}</h1>
            <h1 className='text-[20px] w-[70%] text-[white]'>{t("section8.txt2")}</h1>
            <Button sx={{ marginTop: "20px", width: "200px", height: "50px" }} variant="contained">{t("section3.txt3")}</Button>

          </div>
          {/* right */}
          <div>
            <img src='src/assets/Group 811 (1).png' />
          </div>
        </div>
      </div>



      {/* section9 */}
      <div className='m-[10%]'>
        <h1 className='font-bold md:text-[40px] mob:text-[20px] text-[#1178B2]'>{t("section9.txt1")}</h1>

        {/* row1 */}
        <div className='md:flex'>
          <div className='shadow-2xl p-[5%] mt-[3%] m-[20px] rounded-[12px]'>
            <div className='flex justify-center p-[10px]'>
              <img src='src/assets/01.png' />
            </div>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt2")}</h1>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt7")}</h1>
          </div>

          <div className='shadow-2xl p-[5%]  m-[20px] mt-[3%] rounded-[12px]'>
            <div className='flex justify-center p-[10px]'>
              <img src='src/assets/02.png' />
            </div>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt4")}</h1>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt7")}</h1>
          </div>

          <div className='shadow-2xl p-[5%]  m-[20px] mt-[3%] rounded-[12px]'>
            <div className='flex justify-center p-[10px]'>
              <img src='src/assets/03.png' />
            </div>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt6")}</h1>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt7")}</h1>
          </div>
        </div>
        {/* row1 */}
        <div className='md:flex'>
          <div className='shadow-2xl p-[5%] mt-[3%] m-[20px] rounded-[12px]'>
            <div className='flex justify-center p-[10px]'>
              <img src='src/assets/04.png' />
            </div>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt2")}</h1>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt7")}</h1>
          </div>

          <div className='shadow-2xl p-[5%]  m-[20px] mt-[3%] rounded-[12px]'>
            <div className='flex justify-center p-[10px]'>
              <img src='src/assets/05.png' />
            </div>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt4")}</h1>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt7")}</h1>
          </div>

          <div className='shadow-2xl p-[5%]  m-[20px] mt-[3%] rounded-[12px]'>
            <div className='flex justify-center p-[10px]'>
              <img src='src/assets/06.png' />
            </div>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt6")}</h1>
            <h1 className='font-bold mt-[10px]'>{t("section9.txt7")}</h1>
          </div>
        </div>
      </div>



      {/* section10 */}
      <div className='m-[10%]'>

        <h1 className='font-bold text-[40px]  mb-[10px] text-[#1178B2]'>{t("section10.txt1")}</h1>

        <div className='md:flex justify-between'>

          {/* card1 */}
          <div className='md:w-[30%] shadow-2xl p-[3%]'>
            <div className='flex justify-center mt-[5%]'>
              <img src='src/assets/Vector (5).png' />
            </div>
            <h1 className='font-bold text-center m-[10px]'>{t("section10.txt2")}</h1>
            <hr />
            <div className='ml-[5%] mb-[4%]'>
              <h1 className='m-[4%]'>{t("section10.txt5")}</h1>
              <h1 className='m-[4%]'>1{t("section10.txt6")}</h1>
              <h1 className='m-[4%]'>2{t("section10.txt7")}</h1>
              <h1 className='m-[4%]'>3{t("section10.txt8")}</h1>
              <h1 className='m-[4%]'>4{t("section10.txt9")}</h1>

              <hr />
              <h1 className='m-[4%]'>{t("section10.txt11")}</h1>
              <hr />
              <h1 className='m-[4%]'>{t("section10.txt12")}</h1>
              <hr />
              <h1 className='m-[4%]'>{t("section10.txt13")}</h1>
              <div className='flex justify-center m-[20px]'>
                <Button sx={{ marginTop: "20px", width: "200px", height: "50px" }} variant="contained">{t("section3.txt3")}</Button>
              </div>
            </div>
          </div>




          {/* card2 */}
          <div className='md:w-[30%] shadow-2xl p-[3%]'>
            <div className='flex justify-center mt-[5%]'>
              <img src='src/assets/Vector (6).png' />
            </div>
            <h1 className='font-bold text-center m-[10px]'>{t("section10.txt2")}</h1>
            <hr />
            <div className='ml-[5%] mb-[4%]'>
              <h1 className='m-[4%]'>{t("section10.txt5")}</h1>
              <h1 className='m-[4%]'>1{t("section10.txt6")}</h1>
              <h1 className='m-[4%]'>2{t("section10.txt7")}</h1>
              <h1 className='m-[4%]'>3{t("section10.txt8")}</h1>
              <h1 className='m-[4%]'>4{t("section10.txt9")}</h1>

              <hr />
              <h1 className='m-[4%]'>{t("section10.txt11")}</h1>
              <hr />
              <h1 className='m-[4%]'>{t("section10.txt12")}</h1>
              <hr />
              <h1 className='m-[4%]'>{t("section10.txt13")}</h1>
              <div className='flex justify-center m-[20px]'>
                <Button sx={{ marginTop: "20px", width: "200px", height: "50px" }} variant="contained">{t("section3.txt3")}</Button>
              </div>
            </div>
          </div>



          {/* card3 */}
          <div className='md:w-[30%] shadow-2xl p-[2%]'>
            <div className='flex justify-center mt-[5%]'>
              <img src='src/assets/Vector (7).png' />
            </div>
            <h1 className='font-bold text-center m-[10px]'>{t("section10.txt2")}</h1>
            <hr />
            <div className='ml-[5%] mb-[4%]'>
              <h1 className='m-[4%]'>{t("section10.txt5")}</h1>
              <h1 className='m-[4%]'>1{t("section10.txt6")}</h1>
              <h1 className='m-[4%]'>2{t("section10.txt7")}</h1>
              <h1 className='m-[4%]'>3{t("section10.txt8")}</h1>
              <h1 className='m-[4%]'>4{t("section10.txt9")}</h1>

              <hr />
              <h1 className='m-[4%]'>{t("section10.txt11")}</h1>
              <hr />
              <h1 className='m-[4%]'>{t("section10.txt12")}</h1>
              <hr />
              <h1 className='m-[4%]'>{t("section10.txt13")}</h1>
              <div className='flex justify-center m-[20px]'>
                <Button sx={{ marginTop: "20px", width: "200px", height: "50px" }} variant="contained">{t("section3.txt3")}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* section11 */}
      <div className='m-[10%]'>

        <h1 className='font-bold text-[40px]  mb-[10px] text-[#1178B2]'>{t("section11.txt1")}</h1>

        <div className='md:flex'>
          {/* left */}
          <div className='md:w-[50%]'>
            <img src='src/assets/Снимок экрана 2022-11-14 в 5.45 1.png' />
          </div>

          {/* right */}
          <div className='md:w-[50%] flex flex-col justify-center items-center'>
            <h1 className='mb-[5%]'>{t("section11.txt2")}</h1>
            <h1>{t("section11.txt3")}</h1>
          </div>
        </div>
      </div>
              
      {/* section12 */}
      <div className='m-[10%] shadow-2xl md:flex'>

        {/* left */}
        <div className='md:w-[50%] p-[3%]'>
          <img src='src/assets/Group 841.svg' />
        </div>

        {/* right */}
        <div className='md:w-[50%] flex flex-col justify-center'>
          <h1 className='mb-[4%] w-[70%]'>{t("section12.txt1")}</h1>
          <h1>{t("section12.txt2")}</h1>
        </div>

      </div>


      {/* section13 */}
      <div className='flex justify-center m-[5%]'>
        <img src='src/assets/Group 1027.png' />
      </div>


      {/* section14 */}
      <div>
        <Box className="sm:flex-wrap pl-[10%]">


          <br />
          <Swiper watchSlidesProgress={true} slidesPerView={3} className="">
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px]  text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box className="">
                <img src='src/assets/Ellipse 545 (1).png' />
                <h1 className="text-[20px] pl-[15%] text-[black] font-bold">Юрий Ким</h1>
                <p className="w-[350px] text-center pl-[5%]">Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
              </Box>

            </SwiperSlide>

          </Swiper>

        </Box>
      </div>


      {/* section15 */}
      <div className='mt-[4%]'>
        <div className='md:flex justify-around m-[20px]'>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/Dealroom 1.png' /></div>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/Снимок экрана 2022-07-01 в 5.09 1.png' /></div>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/Снимок экрана 2022-07-01 в 5.07 1.png' /></div>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/Снимок экрана 2022-09-08 в 1.50 (1).png' /></div>
        </div>
        {/* row2 */}
        <div className='md:flex justify-around mt-[50px]'>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/Снимок экрана 2022-11-19 в 7.52.png' /></div>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/png-clipart-in5-tech-entrepreneurship-tecom-group-startup-company-technology-others-miscellaneous-text-removebg-preview 1.png' /></div>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/Снимок экрана 2022-11-19 в 7.54.png' /></div>
          <div className='p-[2%] mob:p-[15%] md:w-[20%] flex items-center justify-center rounded-[12px] shadow-lg'><img src='src/assets/header-logo 1.png' /></div>
        </div>
      </div>



      {/* section16 */}
      <div className='section16 p-[5%] flex flex-col justify-center items-center'>

        <h1 className='text-[30px] text-[white] font-bold'>{t("section16.txt1")}</h1>
        <h1 className='w-[50%] text-[white] text-[20px] text-center'>{t("section16.txt2")}</h1>
      </div>


      {/* section17 */}
      <div>
       
      </div>


      {/* section18 */}
      <div className='md:flex  justify-around p-[5%] bg-[#7777dd]'>
        {/* left */}
        <div className='md:w-[50%]'>
          <h1 className='text-[white] font-bold text-[30px]'>{t("section16.txt1")}</h1>
          <h1 className='text-[white] font-bold text-[20px]'>{t("section16.txt2")}</h1>
          <img src='src/assets/Group 857.png' />
        </div>
        {/* right */}
        <div>

          <div className='md:w-[50%]'>
            <input className='w-[350px] h-[40px] bg-transparent border-black border-b-[2px] border-solid] m-[10px]' placeholder='Name' /> <br />
            <input className='w-[350px] h-[40px] bg-transparent border-black border-b-[2px] border-solid] m-[10px]' placeholder='Email' /><br />
            <input className='w-[350px] h-[40px] bg-transparent border-black border-b-[2px] border-solid] m-[10px]' placeholder='999' /><br />
            <Button sx={{ marginTop: "20px", width: "200px", height: "50px" }} variant="contained">{t("section3.txt3")}</Button>
          </div>
        </div>
      </div>



      {/* footer */}

      <footer className='footer md:flex justify-center items-center mt-[20px]'>
        <img src='src/assets/INNOMA.VC.png' />

        <ul className='flex font-bold mob:hidden md:inline-flex text-[white]'>
          <li className='m-[20px]'>{t("header.li1")}</li>
          <li className='m-[20px]'>{t("header.li2")}</li>
          <li className='m-[20px]'>{t("header.li3")}</li>
          <li className='m-[20px]'>{t("header.li4")}</li>
        </ul>

        <h1 className='text-[white]'>Dubai, Single Business Tower <br /> 1503, Business Bay</h1>
      </footer>
    </>
  )
}
export default App
