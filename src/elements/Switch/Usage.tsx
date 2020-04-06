import React, { useState } from 'react';
import { Switch } from 'elements';

const Usage = () => {
  const [checked, setChecked] = useState(false);
  const [checkedByDefault, setCheckedByDefault] = useState(true);

  return (
    <>
      <Switch
        checked={checked}
        id="toggle1"
        label="Swipe me!"
        onChange={() => setChecked(!checked)}
      />
      <br />
      <br />
      <Switch
        checked={checkedByDefault}
        id="toggle2"
        label="Checked by default, can be changed!"
        onChange={() => setCheckedByDefault(!checkedByDefault)}
      />
      <br />
      <br />
      <Switch
        disabled
        checked={false}
        id="toggle3"
        label="Disabled!"
        onChange={() => console.log('disabled')}
      />
      <br />
      <br />
      <Switch
        disabled
        checked
        id="toggle4"
        label="Disabled and checked!"
        onChange={() => console.log('disabled')}
      />
    </>
  );
};

export default Usage;
