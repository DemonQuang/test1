'use client';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import VideoCameraOutlined from '@ant-design/icons/lib/icons/VideoCameraOutlined';
import { Layout, Menu } from 'antd';
import React from 'react';
const AdminSidebar = () => {
    const { Sider } = Layout;
    const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
        }),
    );
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
    )
}

export default AdminSidebar;