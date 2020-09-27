import React,{Component} from  'react'


export  default class Card extends Component {
//Test passing  children  in  componet
    render(){
        return(
            <div>
            <p>Looks  Super Amazing  to  word with this Environment </p>
            {this.props.children}
            </div>
        )       
    }
}