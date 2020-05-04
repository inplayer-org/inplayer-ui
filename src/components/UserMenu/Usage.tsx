import React from 'react';
import UserMenu from '.';

const Usage = () => (
  <>
    <UserMenu
      image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      menuTitle="User name"
      menuItems={[{ title: 'Hello' }, { title: 'World' }]}
      actionItem={{ title: 'Logout' }}
    />
    <div style={{ marginTop: '20%' }}>
      <UserMenu menuTitle="User name" actionItem={{ title: 'Logout' }} />
    </div>
  </>
);

export default Usage;
