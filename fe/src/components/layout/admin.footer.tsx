'use client';
import React from 'react';
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;
    return (
        <Footer style={{ textAlign: 'center' }}>
            test ts ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}

export default AdminFooter;