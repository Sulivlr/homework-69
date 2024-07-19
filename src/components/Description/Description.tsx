import React from 'react';

const Description = ({summary}) => {

    return (
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    );
};

export default Description;