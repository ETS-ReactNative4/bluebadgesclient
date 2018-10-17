import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Button} from 'reactstrap'
import GetFiles from '../home/GetFiles'
import SeeAll from '../home/SeeAll'
import Homes from './Homes'
import '../cssStuff/home.css'

export default class Home extends Component {
    render(){
        return(
            <div className='hom'>
                <Homes />
            </div>
        )
    }
}  