import React, { ChangeEvent, ReactNode, forwardRef, RefObject, KeyboardEvent } from 'react';
import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import { MdSearch } from 'react-icons/md';
import colors from '../../theme/colors';
import {
  AnalyticsComponent,
  AnalyticsProps,
  AnalyticsEvents,
  AnalyticsComponentType,
} from '../../analytics';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type StyledInputProps = {
  sizeProp?: Size;
  icon?: ReactNode | null;
};

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  color: ${({ theme }) => theme.palette.text.main};
  background: ${colors.white};
  font-weight: ${({ theme }) => theme.font.weights.light};
  padding: 0.375em 0.75em;
  border: 1px solid ${colors.gray};
  border-radius: 0.188em;
  font-size: ${({ theme }) => theme.font.sizes.medium};

  &:focus {
    border-bottom: 1px solid ${colors.skyBlue};
  }

  padding-left: ${({ icon }) => (icon ? '2rem !important' : null)};
  ${ifProp(
    { type: 'search' },
    css`
      padding-left: 2rem !important;
      ::placeholder {
        position: relative !important;
        left: 0.1rem !important;
      }

      ::-webkit-search-decoration,
      ::-webkit-search-cancel-button,
      ::-webkit-search-results-button,
      ::-webkit-search-results-decoration {
        cursor: pointer;
      }
    `
  )};
  ${switchProp('sizeProp', {
    xs: css`
            font-size: ${({ theme }) => theme.font.sizes.extraSmall}
            padding: 0.1875rem 0.25rem;
        `,
    sm: css`
            font-size: ${({ theme }) => theme.font.sizes.small}
            padding: 0.375rem 0.5rem;
        `,
    md: css`
      font-size: ${({ theme }) => theme.font.sizes.medium};
      padding: 0.5625rem 0.75rem;
    `,
    lg: css`
      font-size: ${({ theme }) => theme.font.sizes.large};
      padding: 0.75rem 1rem;
    `,
  })};
`;

const IconContainer = styled.div`
  position: absolute;
  color: ${colors.darkGray};
  left: 0.5rem;
  top: 33%;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

type Props = {
  type: string;
  placeholder: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  value: string | Array<string> | number;
  sizeProp?: Size;
  icon?: ReactNode;
  className?: string;
} & AnalyticsProps;

type RefType =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined;

const Input = forwardRef(
  (
    { type, placeholder, onChange, sizeProp, className = '', icon, tag = '', ...rest }: Props,
    ref: RefType
  ) => {
    const onInputChange = (e: ChangeEvent<HTMLInputElement>): any => {
      e.persist();
      if (onChange) {
        onChange(e);
      }
    };

    if (type === 'search') {
      return (
        <AnalyticsComponent>
          {({ pages, tracker, merchantId, ip }) => (
            <InputWrapper>
              <IconContainer>
                <MdSearch />
              </IconContainer>
              <StyledInput
                sizeProp={sizeProp}
                ref={ref}
                type={type}
                placeholder={placeholder}
                onChange={onInputChange}
                onBlur={() => {
                  if (tag) {
                    tracker.track({
                      event: AnalyticsEvents.FOCUS_OUT,
                      type: AnalyticsComponentType.INPUT,
                      tag,
                      pages,
                      merchantId,
                      ip,
                    });
                  }
                }}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') {
                    if (tag) {
                      tracker.track({
                        event: AnalyticsEvents.KEYBOARD_EVENT,
                        type: AnalyticsComponentType.INPUT,
                        tag: `${tag}_enter`,
                        pages,
                        merchantId,
                        ip,
                      });
                    }
                  }
                }}
                onClick={() => {
                  if (tag) {
                    tracker.track({
                      event: AnalyticsEvents.CLICK,
                      type: AnalyticsComponentType.INPUT,
                      tag,
                      pages,
                      merchantId,
                      ip,
                    });
                  }
                }}
                {...rest}
              />
            </InputWrapper>
          )}
        </AnalyticsComponent>
      );
    }

    return (
      <AnalyticsComponent>
        {({ pages, tracker, merchantId, ip }) => (
          <InputWrapper className={className}>
            <IconContainer>{icon}</IconContainer>
            <StyledInput
              sizeProp={sizeProp}
              ref={ref}
              type={type || 'text'}
              placeholder={placeholder}
              onChange={onInputChange}
              icon={icon}
              onBlur={() => {
                if (tag) {
                  tracker.track({
                    event: AnalyticsEvents.FOCUS_OUT,
                    type: AnalyticsComponentType.INPUT,
                    tag,
                    pages,
                    merchantId,
                    ip,
                  });
                }
              }}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (tag) {
                  if (e.key === 'Enter') {
                    tracker.track({
                      event: AnalyticsEvents.KEYBOARD_EVENT,
                      type: AnalyticsComponentType.INPUT,
                      tag: `${tag}_enter`,
                      pages,
                      merchantId,
                      ip,
                    });
                  }
                }
              }}
              onClick={() => {
                if (tag) {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.INPUT,
                    tag,
                    pages,
                    merchantId,
                    ip,
                  });
                }
              }}
              {...rest}
            />
          </InputWrapper>
        )}
      </AnalyticsComponent>
    );
  }
);

Input.displayName = 'Input';

Input.defaultProps = {
  sizeProp: 'md',
  icon: null,
};

export default Input;
