import React from 'react';
import { Tabs } from 'antd';

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
                    Content of Tab Pane 1
                </TabPane>
                <TabPane key="2"
                    tab="Tab 2"
                >
                    Content of Tab Pane 2
                </TabPane>
                <TabPane key="3"
                    tab="Tab 3"
                >
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    );
}