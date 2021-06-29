import React, {Component} from 'react'
import Card from './CardUI'

import sunnyimg from '../assets/sunny.jpeg'
import stormimg from '../assets/storm.jpeg'
import rainimg from '../assets/rain.jpeg'


class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={sunnyimg} title="Sunny"
                        content="Sunny weather days are days when there are very 
                        little or no clouds in the sky. We usually experience more 
                        sunny days in the summer when the days are warmer. This is 
                        the reason we enjoy spending more time outside in the summer."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={stormimg} title="Stormy"
                        content="A storm is a violent meteorological phenomena in which there 
                        is heavy rain, and wind due to moisture in the air. Hail and Lightning are 
                        also common in storms. ... A storm is associated with severe weather and may
                         be marked by strong wind, thunder, lightning and heavy precipitation such as 
                         ice."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={rainimg} title="Rainy" 
                              content="Clouds are made of water droplets. Within a cloud, 
                              water droplets condense onto one another, causing the droplets to grow. 
                              When these water droplets get too heavy to stay suspended in the cloud, 
                              they fall to Earth as rain."/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Cards