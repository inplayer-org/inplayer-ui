import React from 'react';
import { IoMdAnalytics } from 'react-icons/io';
import { MdPhotoLibrary, MdPeople } from 'react-icons/md';
import { Navbar } from '.';

const Usage = () => {
  return (
    <Navbar logo="https://inplayer.com/wp-content/themes/darkwin/pics/brand/android-icon-192x192.png">
      <Navbar.MenuItem
        icon={<IoMdAnalytics size="192x192" />}
        onClick={() => console.log('Analytics clicked')}
        active
      >
        Analytics
      </Navbar.MenuItem>
      <Navbar.MenuItem
        icon={<MdPhotoLibrary size="192x192" />}
        onClick={() => console.log('Assets clicked')}
      >
        Assets
      </Navbar.MenuItem>
      <Navbar.MenuItem
        icon={<MdPeople size="192x192" />}
        onClick={() => console.log('Audience clicked')}
      >
        Audience
      </Navbar.MenuItem>
    </Navbar>
  );
};

export default Usage;
