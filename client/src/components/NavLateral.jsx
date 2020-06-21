import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import foto from '../recursos/perfil.jpg'


export default function NavLateral() {
    return (
        // <div className='container-fluid'  >
            <div className="nav ladito fixed-top row p-3 col-2 " style={{ background: "#212529" }}>
                <div className='text-center' style={{ color: "#D5691E" }}>
                        <h5 >SISTEMA DE ASISTENCIA</h5>
                </div>
                <div className='border m-0  border-right-0 border-left-0 p-2' style={{ color: "white" }}>
                    <div className='text-center'>
                        <img src={foto} className='w-50 rounded-circle m-2' />
                    </div>
                    <div className="text-center">
                        <span className="user-name ">
                            <strong > Paola Cieza</strong>
                        </span>
                        {/* <span class="user-role">Administrator</span> */}
                    </div>
                </div>
                <div className='m-0 p-0'>
                    <ul className="navbar-nav m-0 ">
                        <li className="sidebar-dropdown nav-item nav-a">
                            <a href="#" className='nav-link nav-a  p-2' >
                                <span>Mantenimiento</span>
                            </a>
                            <div className="sidebar-submenu nav-a" style={{ background: "#3a3f48" }}>
                                <ul>
                                    <a href="#" className='nav-a' >Tipo de licencia </a>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown  active nav-item nav-a">
                            <a href="#" className='nav-link nav-a p-2'>
                                <span>Empleado</span>
                            </a>
                            <div className="sidebar-submenu " style={{ background: "#3a3f48" }}>
                                <ul>
                                    <a href="#" className='nav-a'>Gestionar </a>
                                    <br />
                                    <a href="#" className='nav-a'>Contratos </a>
                                    <br />
                                    <a href="#" className='nav-a'>Horarios </a>
                                    <br />
                                    <a href="#" className='nav-a'>Usuarios</a>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#" className='nav-link nav-a p-2'>
                                <i className="fa fa-tachometer-alt"></i>
                                <span>Operaciones</span>
                            </a>
                            <div className="sidebar-submenu" style={{ background: "#3a3f48" }}>
                                <ul>
                                    <a href="#" className='nav-a'>Asistencia </a>
                                    <br />
                                    <a href="#" className='nav-a'>Registrar asistencias </a>
                                    <br />
                                    <a href="#" className='nav-a'>Justificaciones </a>
                                    <br />
                                    <a href="#" className='nav-a'>Permisos</a>
                                    <br />
                                    <a href="#" className='nav-a'>Licencias</a>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#" className='nav-link nav-a p-2'>
                                <span>Consultas</span>
                            </a>
                            <div className="sidebar-submenu" style={{ background: "#3a3f48" }}>
                                <ul>
                                    <a href="#" className='nav-a'>Asistencias </a>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#" className='nav-link nav-a p-2'>
                                {/* <i className="fa fa-tachometer-alt"></i> */}
                                <span>Reportes</span>
                            </a>
                            <div className="sidebar-submenu" style={{ background: "#3a3f48" }}>
                                <ul>
                                    <a href="#" className='nav-a'>Tardanzas </a>
                                    <br />
                                    <a href="#" className='nav-a'>Asistencias </a>
                                    <br />
                                    <a href="#" className='nav-a'>Inacistencias por empleado</a>
                                    <br />
                                    <a href="#" className='nav-a'>Licencias</a>
                                    <br />
                                    <a href="#" className='nav-a'>Licencias por tipo</a>
                                    <br />
                                    <a href="#" className='nav-a'>Inacistencias</a>
                                    <br />
                                    <a href="#" className='nav-a'>Estadísticas tardanzas</a>
                                    <br />
                                    <a href="#" className='nav-a'>Estadísticas inasistencias</a>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        // </div>
    )
}