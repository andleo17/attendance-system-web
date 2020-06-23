import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import foto from '../recursos/perfil.jpg'


export default function NavLateral() {
    return (


        <div className="fixed-top page-wrapper chiller-theme toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fas fa-bars"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a href="#">SISTEMA DE ASISTENCIA</a>
                        <div id="close-sidebar">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="sidebar-header">
                        <div className="user-pic">
                                <img src={foto} className="img-responsive img-rounded" alt="User picture"/>
                        </div>
                        <div className="user-info">
                            <span className="user-name"> Paola Cieza </span>
                            <span className="user-role">Administrator</span> </div>
                    </div>


                    <div className="sidebar-search">
                        <div>
                            <div className="input-group">
                                <input type="text" className='form-control search-menu' placeholder='Buscar'/>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="sidebar-menu">
                        <ul>
                            <li className="header-menu">
                                <span>General</span>
                            </li>

                            <li className="sidebar-dropdown">
                                <a href="#">
                                    <i className="fa fa-cogs"></i>
                                    <span>Mantenimiento</span>
                                </a>
                                <div className="sidebar-submenu">
                                    <ul>
                                        <li> <a href="#">Tipo de licencia  </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-dropdown">
                                <a href="#">
                                    <i className="fa fa-child xd"></i>
                                    <span>Empleado</span>
                                </a>
                                <div className="sidebar-submenu">
                                    <ul>
                                        <li> <a href="#">Gestionar </a></li>
                                        <li> <a href="#">Contratos </a></li>
                                        <li> <a href="#">Horarios </a></li>
                                        <li> <a href="#">Usuarios </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-dropdown">
                                <a href="#">
                                    <i className="fa fa-laptop"></i>
                                    


                                    <span>Operaciones</span>
                                </a>
                                <div className="sidebar-submenu">
                                    <ul>
                                        <li> <a href="#">Asistencia </a></li>
                                        <li> <a href="#">Registrar Asistencia </a></li>
                                        <li> <a href="#">Justificaciones </a></li>
                                        <li> <a href="#">Permisos </a></li>
                                        <li> <a href="#">Licencias </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-dropdown">
                                <a href="#">
                                    <i className="fa fa-question"></i>
                                    <span>Consultas</span>
                                </a>
                                <div className="sidebar-submenu">
                                    <ul>
                                        <li> <a href="#">Asistencias </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-dropdown">
                                <a href="#">
                                    <i className="fa fa-folder"></i>
                                    <span>Reportes</span>
                                </a>
                                <div className="sidebar-submenu">
                                    <ul>
                                        <li> <a href="#">Tardanzas </a></li>
                                        <li> <a href="#">Asistencias </a></li>
                                        <li> <a href="#">Inacistencias por empleado </a></li>
                                        <li> <a href="#">Licencias </a></li>
                                        <li> <a href="#">Licencias por tipo </a></li>
                                        <li> <a href="#">Inacistencias </a></li>
                                        <li> <a href="#">Estadísticas tardanzas </a></li>
                                        <li> <a href="#">Estadísticas inasistencias </a></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
            
  </div>

    )
}