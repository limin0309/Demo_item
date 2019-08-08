import React from 'react';
import { Menu, Icon } from 'antd';
import './index.less'
import MenuConfig from './../../config/menuConfig'
const { SubMenu } = Menu;


export default class NavLeft extends React.Component{
    
    componentWillMount(){
       const menuTreeNode= this.renderMenu(MenuConfig)
       this.setState({
        menuTreeNode
       })
    }
    // 菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return <SubMenu title={item.title} key={item.key}>{this.renderMenu(item.children)}</SubMenu>
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render(){

        function handleClick(e) {
            console.log('click', e);
          }
        return (
            <div>
                <div className="logo">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
                    <h1>Imooc Ms</h1>
                </div>
                <div>
                    <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical" theme="dark"> 
                        {this.state.menuTreeNode}
                    </Menu>,
                </div>
            </div>
        )
    }
}