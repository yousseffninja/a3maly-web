import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#282729", borderRadius: "140px 0px 0px 0px" }} >
      <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            youeremail@gmail.com
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            +91 964 6326 671
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#ffffff", mb: 2 }}>
            NEED HELP
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Help center
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Terms
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Commnuity Meetup
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Our Blog
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#ffffff", mb: 2 }}>
            LIVE CONTACT?
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Live Chat
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Phone: +99 125 547 789
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Fex: +58 784 58
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            mail@yourdomain.com
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#ffffff", mb: 2 }}>
            ADDRESS
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            1 Beverly Hills, House 56,
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            Los Angeles, California,
          </Typography>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
            United State.
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "#7C848E" }} />
      <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 5 }}>
        <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
          Copyright © 2020 name. All Rights Reserved.
        </Typography>
        <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#7C848E", mb: 2 }}>
          Design by name
        </Typography>
      </Box>
    </Box>
  );
}