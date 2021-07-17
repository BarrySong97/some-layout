import './index.less';
import 'antd/dist/antd.less';
import { Layout, Menu, Tree } from 'antd';
import LeftMainLayout from './layouts/left-main-layout';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0',
        children: [
          { title: '0-1-0-0', key: '324fe2340' },
          { title: '0-1-0-1', key: '4353efr451' },
          {
            title: '0-1-0-2',
            key: '053453-2',
            children: [
              { title: '0-1-0-0', key: '32423er40' },
              { title: '0-1-0-1', key: '435re3451' },
              {
                title: '0-1-0-2',
                key: '053453-2',
                children: [
                  { title: '0-1-0-0', key: '3242er340' },
                  { title: '0-1-0-1', key: '4353f451' },
                  { title: '0-1-0-2', key: '053f453-2' },
                ],
              },
            ],
          },
        ],
      },
      { title: '0-1-0-1', key: '0-345' },
      { title: '0-1-0-2', key: '0-15342' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

export default function IndexPage() {
  const components = {
    left: <Tree treeData={treeData} />,
    main: <>test</>,
    leftWidth:300,
  };
  return (
    <Layout className="layout">
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px' }}>
          <LeftMainLayout components={components} />
        </Content>
      </Layout>
    </Layout>
  );
}
