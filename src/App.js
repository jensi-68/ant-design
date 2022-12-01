import './App.css';
import 'antd/dist/antd.css';
// import { icon } from 'antd';
import { GitlabOutlined , SearchOutlined , TwitterOutlined , PieChartOutlined , AreaChartOutlined , BarChartOutlined} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from 'react';

function App() {
  return (
   <>
      <Button type="primary">Primary Button</Button>
      <div className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      Primary
    </Button>
    </div>
    <TwitterOutlined />
    {/* <StepBackwardOutline/> */}
    <SearchOutlined/>
    <PieChartOutlined />
    <AreaChartOutlined/>
    <BarChartOutlined />
    <GitlabOutlined />
   </>
  );
}

export default App;
