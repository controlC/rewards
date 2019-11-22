import React from 'react';

const ContentHead = ({headers}) => (
  <thead>
    <tr>
      {
        headers.map(headerString => <th>{headerString}</th>)
      }
    </tr>
  </thead>
);

export default ContentHead;