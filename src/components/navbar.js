import React from 'react'

import NavbarItem from './navbarItem'
import { AuthConsumer } from '../main/provedorAutenticacao'
import LocalStorageService from '../app/service/localstorageService'

function Navbar(props){

    function Deslogar(){
      LocalStorageService.removerItem('_usuario_logado');
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a href="/home" className="navbar-brand">Minhas Finanças</a>
          <button className="navbar-toggler" type="button" 
                  data-toggle="collapse" data-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <NavbarItem render={!LocalStorageService.obterItem('_usuario_logado' ? true : false)} href="/home" label="Home" />
                <NavbarItem render={LocalStorageService.obterItem('_usuario_logado' ? true: false)} href="/cadastro-usuarios" label="Usuários" />
                <NavbarItem render={!LocalStorageService.obterItem('_usuario_logado' ? true: false)} href="/consulta-lancamentos" label="Lançamentos" />
                <NavbarItem onClick={Deslogar} render={true} href="/login" label="Sair"/>
            </ul>
            </div>
        </div>
      </div>
    )
}

export default () => (
  <AuthConsumer>
    {(context) => (
        <Navbar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />
    )}
  </AuthConsumer>
)