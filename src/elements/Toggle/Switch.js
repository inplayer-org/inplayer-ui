// @flow
import React from 'react';
import styled from 'styled-components';
import { uiColors } from 'utils';

import colors from 'config/colors';
import Switch from 'react-switch';

type Props = {
  checked: boolean,
  onChange: Function,
  id: number,
};

// const modifiers = {
//   hoverDisabled: () => `
//     &:hover {
//       background: ${colors.lightGray};
//       border: 1px solid ${colors.gray};
//       pointer-events: none;
//     }
//   `,
// };

const SwitchContainer = styled.span`
  .react-switch-bg {
    background: ${colors.lightGray};
    border: 1px solid ${colors.gray};
    transition: all ease 500ms;
    overflow: visible;

    &:checked {
      border: 1px solid ${uiColors('primary.main')};
      background: ${uiColors('primary.main')};
    }

    &:hover,
    &:checked:hover {
      background: ${uiColors('primary.light')};
      border: 1px solid ${uiColors('primary.main')};
    }
  }

  .react-switch-handle {
    height: 20px !important;
    width: 20px !important;
    margin: 1px;
    position: absolute;
    z-index: 2;
    background: ${uiColors('white')};
    border-radius: 50px;
    top: -3px !important;
    left: -4px !important;
    cursor: pointer;
    border: 1px solid #d7dde5 !important;
    transition: all ease 300ms;

    &:hover {
      border: 1px solid #00aae6 !important;
    }
  }

  .react-switch-bg:hover ~ .react-switch-handle {
    border: 1px solid #00aae6 !important;
  }

  .react-switch-handle:hover ~ .react-switch-bg {
    background: #00aae60f !important;
    border: 1px solid ##00aae6 !important;
  }
`;

const Switcher = ({ checked, onChange, id }: Props) => {
  const { accentBlue, lightGray, white } = colors;

  return (
    <SwitchContainer>
      <Switch
        id={id}
        checked={checked}
        onColor={accentBlue}
        offColor={lightGray}
        offHandleColor={white}
        onHandleColor={white}
        uncheckedIcon={false}
        checkedIcon={false}
        height={16}
        width={34}
        boxShadow="null"
        activeBoxShadow="null"
        onChange={onChange}
      />
    </SwitchContainer>
  );
};

/** @component */
export default Switcher;
