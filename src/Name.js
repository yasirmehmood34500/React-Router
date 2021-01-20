import React from 'react'

class Name extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Yasir",
            mobile: "+92 301 7198 621"
        }
        this.changeName=this.changeName.bind(this)
        this.changeMobile=this.changeMobile.bind(this)
    }
    changeName(name){
        this.setState({name:name})
    }
    changeMobile(mobile){
        this.setState({mobile:mobile})
    }
    
    render(){
        return(
            <div>
                <h1>My Name is {this.state.name} </h1>
                <h1>My Name is {this.state.mobile} </h1>
                <button onClick={()=>this.changeName("Mehmood")}>Click for Change Name</button>
                <button onClick={()=>this.changeMobile("+92 301 7198 622")}>Click for Change Mobile</button>
            </div>
        )
    }
}

export default Name