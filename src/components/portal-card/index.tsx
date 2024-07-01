import * as React from 'react'
import { createElement } from 'react';
import { Button } from '@alifd/next';
import './index.scss'

export interface ProtalCardProps{
    title?:string;
    description?:string;
    backgroundImage?:string;
    href?:string;
    style?:Record<string,any>
}
const PortalCard: React.FC<ProtalCardProps> =(props:ProtalCardProps)=>{
    const { title,description,backgroundImage,href,style:propStyle={} }=props
    const [style,setStyle]=React.useState(propStyle)
    const onClick=()=>{
        window.open(href)
    }
    const onMouseEnter=()=>{
        console.log(11);
        
        setStyle({
            ...style,
            background: `url(${backgroundImage})`
        })
    }
    const onMouseLeave=()=>{
        console.log(22);
        
        setStyle({
            ...style,
            background: null
        })
    }
    return(
        <div className="portal-card" style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div>
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>

            <div>
                <Button type='normal' onClick={onClick}>详情</Button>
            </div>
        </div>
    )
}
PortalCard.defaultProps={
    title:'Title',
    description:"This is s description"
}
export default PortalCard