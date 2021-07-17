import React, { FC } from 'react';
import './index.less';
export interface LeftMainLayoutProps {
  components: {
    left: React.ReactNode;
    main: React.ReactNode;
    leftWidth?: number | string;
  };
}
const LeftMainLayout: FC<LeftMainLayoutProps> = ({ components }) => {
  const { left, main, leftWidth = 'auto' } = components;
  return (
    <div className="flex h-full">
      <div style={{ width: leftWidth }} className="mr-4 bg-white p-4">
        {left}
      </div>
      <div className="flex-1 bg-white p-4">{main}</div>
    </div>
  );
};

export default LeftMainLayout;
