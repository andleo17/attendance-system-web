import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import foto from '../recursos/perfil.jpg'


export default function NavLateral() {
    return (
        // <div classNameName='container-fluid'  >
        // <div classNameName="nav ladito fixed-top  row p-3 col-2 " style={{ background: "#212529" }}>
        //     <div classNameName='text-center' style={{ color: "#D5691E" }}>
        //             <h5 >SISTEMA DE ASISTENCIA</h5>
        //     </div>
        //     <div classNameName='border m-0  border-right-0 border-left-0 p-2' style={{ color: "white" }}>
        //         <div classNameName='text-center'>
        //             <img src={foto} classNameName='w-50 rounded-circle m-2' />
        //         </div>
        //         <div classNameName="text-center">
        //             <span classNameName="user-name ">
        //                 <strong > Paola Cieza</strong>
        //             </span>
        //             {/* <span className="user-role">Administrator</span> */}
        //         </div>
        //     </div>
        //     <div classNameName='m-0 p-0'>
        //         <ul classNameName="navbar-nav m-0 ">
        //             <li classNameName="sidebar-dropdown nav-item nav-a">
        //                 <a href="#" classNameName='nav-link nav-a  p-2' >
        //                     <span>Mantenimiento</span>
        //                 </a>
        //                 <div classNameName="sidebar-submenu nav-a" style={{ background: "#3a3f48" }}>
        //                     <ul>
        //                         <a href="#" classNameName='nav-a' >Tipo de licencia </a>
        //                     </ul>
        //                 </div>
        //             </li>
        //             <li classNameName="sidebar-dropdown  active nav-item nav-a">
        //                 <a href="#" classNameName='nav-link nav-a p-2'>
        //                     <span>Empleado</span>
        //                 </a>
        //                 <div classNameName="sidebar-submenu " style={{ background: "#3a3f48" }}>
        //                     <ul>
        //                         <a href="#" classNameName='nav-a'>Gestionar </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Contratos </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Horarios </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Usuarios</a>
        //                     </ul>
        //                 </div>
        //             </li>
        //             <li classNameName="sidebar-dropdown">
        //                 <a href="#" classNameName='nav-link nav-a p-2'>
        //                     <i classNameName="fa fa-tachometer-alt"></i>
        //                     <span>Operaciones</span>
        //                 </a>
        //                 <div classNameName="sidebar-submenu" style={{ background: "#3a3f48" }}>
        //                     <ul>
        //                         <a href="#" classNameName='nav-a'>Asistencia </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Registrar asistencias </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Justificaciones </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Permisos</a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Licencias</a>
        //                     </ul>
        //                 </div>
        //             </li>
        //             <li classNameName="sidebar-dropdown">
        //                 <a href="#" classNameName='nav-link nav-a p-2'>
        //                     <span>Consultas</span>
        //                 </a>
        //                 <div classNameName="sidebar-submenu" style={{ background: "#3a3f48" }}>
        //                     <ul>
        //                         <a href="#" classNameName='nav-a'>Asistencias </a>
        //                     </ul>
        //                 </div>
        //             </li>
        //             <li classNameName="sidebar-dropdown">
        //                 <a href="#" classNameName='nav-link nav-a p-2'>
        //                     {/* <i classNameName="fa fa-tachometer-alt"></i> */}
        //                     <span>Reportes</span>
        //                 </a>
        //                 <div classNameName="sidebar-submenu" style={{ background: "#3a3f48" }}>
        //                     <ul>
        //                         <a href="#" classNameName='nav-a'>Tardanzas </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Asistencias </a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Inacistencias por empleado</a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Licencias</a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Licencias por tipo</a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Inacistencias</a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a'>Estadísticas tardanzas</a>
        //                         <br />
        //                         <a href="#" classNameName='nav-a '>Estadísticas inasistencias</a>
        //                     </ul>
        //                 </div>
        //             </li>

        //         </ul>
        //     </div>

        // </div>
        // </div>


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
                    {/* <!-- sidebar-header  --> */}
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
                    {/* <!-- sidebar-search  --> */}
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
                                    {/* <!-- <i className="far fa-gem"></i> --> */}
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
                    {/* <!-- sidebar-menu  --> */}
                </div>
                {/* <!-- sidebar-content  --> */}

            </nav>
            
  </div>

    )
}