import React from 'react';
import {Row,Col} from 'antd';
import Utils from './../../utils/utils'
import './index.less'

export default class Hedaer extends React.Component{
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })

        setInterval(()=>{
            let sysTime=Utils.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        })
    }
    render(){
        return (
           <div>
               <Row className="header">
                   <Col span="24" className="header-top">
                   <span>欢迎,{this.state.userName}</span>
                   <a>退出</a>
                   </Col>
               </Row>
               <Row className="breadcrumb">
                   <Col span={4} className="breadcrumb-title">
                   首页
                   </Col>
                   <Col span={20} className="weather"> 
                    <span className="data">{this.state.sysTime}</span>
                    <span className="weather-detail">多云</span>
                   </Col>
               </Row>
           </div>
        )
    }
}