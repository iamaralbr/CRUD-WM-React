import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link="/" icon="home" item="Início"/>
            <NavItem link="/users" icon="users" item="Usuários"/>
        </nav>
    </aside>