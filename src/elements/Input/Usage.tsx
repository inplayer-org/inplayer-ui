import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Input from '.';

const Usage = () => {
  const [val, setVal] = useState('');
  return (
    <div style={{ margin: '20px' }}>
      <Input
        type="text"
        onChange={(e) => setVal(e.target.value)}
        placeholder="enter your username"
        value={val}
        id="1"
        sizeProp="md"
        icon={<FaLinkedin />}
      />
      {/* <input onChange={e => setVal(e.target.value)} /> */}
    </div>
  );
};

export default Usage;
