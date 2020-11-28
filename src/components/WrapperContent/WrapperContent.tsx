import React from 'react'

const WrapperContent: React.FC = ({ children }) => (
  <div style={{ height: 'calc(100% - 64px)' }}>
    {children}
  </div>
)

export default WrapperContent
