import { DashboardLayout } from '@/layouts/dashboard/layout';
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button, Paper, Avatar } from '@mui/material';
import Logo from '@/assets/logo.png';
import ServiceSmsIcon from '@/assets/icons/serviceSmsIcon';
import ServiceBlogIcon from '@/assets/icons/serviceBlogIcon';
import ServiceAdsIcon from '@/assets/icons/serviceAdsIcon';

const Page = () => {
  const { t } = useTranslation();
  const title = "My work GPT";
  const image = "https://travel.state.gov/content/dam/passports/photo_examples/_MG_3425_GOOD.png/jcr:content/renditions/original";

  const items = [
    {
      icon: <ServiceBlogIcon />,
      color: "rgb(244, 238, 255)",
      title: 'Build Blog',
      describtion: "Write to me little message",
    },
    {
      icon: <ServiceAdsIcon />,
      color: "rgb(255, 226, 224)",
      title: 'Build Ads',
      describtion: "Write to me little message",
    },
    {
      icon: <ServiceSmsIcon />,
      color: "rgb(255, 249, 231)",
      title: 'Build SMS',
      describtion: "Write to me little message",
    },
  ]

  const [messages, setMessages] = useState<{ message: string; time: string }[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat box when new messages arrive
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current?.scrollHeight);
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  };

  const handleSendMessage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (messageInput.trim() !== '') {
      const currentTime = getCurrentTime();
      setMessages([...messages, { message: messageInput, time: currentTime }]);
      setMessageInput('');
    }
  };

  return (
    <>
      <Head>
        <title>
          {t(title)} | A3maly
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        {messages.length === 0 ?
          <Box sx={{ height: '90%', maxHeight: "520px", overflow: 'auto' }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }} >
                <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 46, fontWeight: 700, color: "rgb(0, 214, 255)", mx: 5 }}>{t('Welcome to')} </Typography>
                <img src={Logo.src} className="App-logo" alt="logo" width={"15%"} height={"15%"} />
              </Box>
              <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 24, fontWeight: 700, color: "rgb(46, 42, 64)", mx: 5 }}>{t('Your Artificial Intelligence - Provided by My Business')} </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 10 }}>
                {items.map((item, index) => (
                  <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: 5 }}>
                    <Box sx={{ bgcolor: item.color, p: 1, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "70px", height: "70px" }}>
                      {item.icon}
                    </Box>
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 700, color: "rgb(46, 42, 64)", mx: 5, my: 2 }}>{t(item.title)} </Typography>
                    <Paper>
                      <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 14, fontWeight: 400, color: "rgb(46, 42, 64)", mx: 5, my: 4 }}>{t(item.describtion)} </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          :
          <Box sx={{ height: '90%', maxHeight: "520px", overflow: 'auto' }}>
            <Box ref={chatBoxRef} sx={{ maxHeight: '100%', overflowY: 'auto' }}>
              {messages.map((messageObj, index) => (
                <Box key={index} sx={{ display: "flex", width: "94%", mx: 4 }}>
                  <Avatar src={image} sx={{ marginRight: '10px' }} />
                  <Paper
                    sx={{
                      display: 'flex',
                      flexDirection: 'column', // Add flexDirection 'column' to stack message and time vertically
                      alignItems: 'flex-start', // Align items to the start (left side)
                      height: 'auto',
                      padding: '10px',
                      marginBottom: '15px',
                      bgcolor: 'rgba(0, 124, 255, 0.1)',
                      width: "100%",
                      wordWrap: 'break-word',
                    }}
                  >
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: "#000000" }}>{messageObj.message}</Typography>
                    <Typography variant="caption" sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 400, color: "rgb(132, 129, 138)" }}>{messageObj.time}</Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Box>
        }
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px', width: "100%" }}>
          <form
            onSubmit={handleSendMessage}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              width: '100%',
            }}
          >
            <TextField
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              label={t('Enter what you want')}
              variant="outlined"
              sx={{ width: '90%', height: "50px" }}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ width: '206px', height: "50px", bgcolor: '#00314C' }}>
              <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 400, color: '#ffffff' }}>
                {t('Send')}
              </Typography>
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;