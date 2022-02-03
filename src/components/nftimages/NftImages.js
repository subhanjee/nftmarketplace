import * as React from "react";
import "./nftimages.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../carousel/Carousel";

function NftImages() {
  return ( 
    <div className="mainnft">
     
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}  >
          <Grid item xs={16}  md={8} lg={6}  >
            <div>
              <Carousel1/>
            </div>
          </Grid>
          <Grid item xs={16} sm={16} md={8} lg={10} className="grid">
            <Grid container spacing={2} columns={16} justifyContent="center"
            alignItems="center">
              <Grid item xs={10}  sm={8} md={8} lg={5}  className="grid">
                <div>
                <p className="nfttext">Year of the Tiger</p>
                <p className="nfttext1">kaysin Gallery</p>
                  <img className="kaysingif" src="KAYSIN.gif" alt="" />
                </div>
                <div>
                <p className="nfttext">gm#boi</p>
                  <img className="kaysingif" src="short.png" alt="" />
                </div>
              </Grid>

              <Grid item xs={10} sm={8} md={8} lg={5}  className="grid">
                <div>
                <p className="nfttext">GloBabies</p>
                <p className="nfttext1">on Tezos</p>
                  <img className="kaysingif" src="GLOBABIES.gif" alt="" />
                </div>
                <div>
                <p className="nfttext">The Drops</p>
                  <img className="kaysingif" src="Rarible.gif" alt="" />
                </div>
              </Grid>

              <Grid item xs={10} sm={8} md={8} lg={5}  className="grid">
                <div>
                <p className="nfttext">The Young Abstract</p>
                  <img className="kaysingif" src="short2.png" alt="" />
                </div>
                <div>
                <p className="nfttext">Women Rise</p>
                <p className="nfttext1">Super Rare</p>
                  <img className="kaysingif" src="Women.gif" alt="" />
                </div>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Box>
     
    </div>
  );
}

export default NftImages;
