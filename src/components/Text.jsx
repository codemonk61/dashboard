import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ RenderAs="p", children, color, body, underline, upperCase, fontWeight, mt="4px",ml="4px", mr="4px", mb="4px", align, ...props }) => {
  const textStyle = {
    color: color || 'inherit',
    fontSize: body ? '16px' : 'inherit',
    fontWeight: fontWeight || '400',
    textDecoration: underline ? 'underline' : 'none',
    textTransform: upperCase ? 'uppercase' : 'none',
    marginTop: mt,
    marginLeft: ml,
    marginRight: mr,
    marginBottom: mb,
    textAlign: align || 'left'
  };

  return (
    <RenderAs style={textStyle} {...props}>
      {children}
    </RenderAs>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  body: PropTypes.bool,
  underline: PropTypes.bool,
  upperCase: PropTypes.bool,
};

Text.defaultProps = {
  color: 'inherit',
  body: false,
  underline: false,
  upperCase: false,
};

export default Text;
