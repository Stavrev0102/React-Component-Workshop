
import { Component } from "react";


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
            return <h1>404</h1>
        }
        return(
            this.props.children
        )
    }
}