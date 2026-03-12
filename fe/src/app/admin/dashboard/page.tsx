'use client';
import { Layout, theme } from 'antd';
import AdminFooter from '@/components/layout/admin.footer';
import AdminSidebar from '@/components/layout/admin.sidebar';
import AdminHeader from '@/components/layout/admin.header';

const Dashboard = () => {
    const { Content } = Layout;


    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <AdminSidebar />
            <Layout>
                <AdminHeader />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        content
                    </div>
                </Content>
                <AdminFooter />
            </Layout>
        </Layout>
    );
};
export default Dashboard;
