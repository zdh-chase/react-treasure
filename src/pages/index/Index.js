import React from 'react';
import { Tabs } from 'antd';
import Tabs1 from '@/pages/tabs/Tabs1';
import Tabs2 from '@/pages/tabs/Tabs2';
import Tabs3 from '@/pages/tabs/Tabs3';

const { TabPane } = Tabs;

export default function Index() {

  const handleChangeTabs = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={handleChangeTabs}
      >
        <TabPane key="1"
          tab="Tab 1"
        >
          <Tabs1 />
        </TabPane>
        <TabPane key="2"
          tab="Tab 2"
        >
          <Tabs2 />
        </TabPane>
        <TabPane key="3"
          tab="Tab 3"
        >
          <Tabs3 />
        </TabPane>
      </Tabs>
    </div>
  );
}
