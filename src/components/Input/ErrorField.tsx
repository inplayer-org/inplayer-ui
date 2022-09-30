import React, { FunctionComponent } from 'react';
import { ErrorMessage, ErrorMessageProps } from 'formik';
import styled from 'styled-components';
import colors from '../../theme/colors';

const ErrorMessageWrapper = styled(ErrorMessage)<ErrorMessageProps>`
  margin-top: 0.5rem;
  display: block;
  color: ${colors.red};
`;

const ErrorField: FunctionComponent<ErrorMessageProps> = ({ className, ...rest }) => (
  <ErrorMessageWrapper component="span" className={className} {...rest} />
);

export default ErrorField;
