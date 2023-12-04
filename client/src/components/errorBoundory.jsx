
import { Component } from "react";
import { Link } from "react-router-dom";


export default class ErrorBoundory extends Component {
    constructor(){
        super()
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(err){
       return {
        hasError:true
       }
    }

    componentDidCatch(error,errorInfro){
        console.log('componenDidCatch')
    }
    render(){
        if(this.state.hasError){
            
            return  <div className="error">
            <h1>404</h1>
            {/* <Link to={'/'}></Link> */}
        </div>
        }
        return(
            this.props.children
        )
    }
}