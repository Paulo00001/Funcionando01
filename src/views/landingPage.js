import React from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends React.Component {

    goToHomePage = () => {
        this.props.history.push("/home")
    }

    render(){
        return (
            <div className="container text-center" >
                <h2>Bem vindo ao sistema Controle das Finanças!</h2>
                Esse sistema te facilitara a ter as contas em dia!
                
                 < br/>< br/>

                <div className="offset-md-4 col-md-4">
                    <button style={{ width: '100%' }} 
                            onClick={this.goToHomePage} 
                            className="btn btn-success">
                        <i className="pi pi-sign-in"></i> Acessar
                    </button>
                </div>
            </div>
        )
    }

}

export default withRouter(LandingPage)