import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'

export default function Footer() {
    return (

        <div className='row fixed-bottom'>
            <div className='col-sm-2'></div>
            <div className='col-sm-10 py-1 border border-right-0 border-left-0 text-center'> © 2019 Copyright:
               <a href="#" > TERCERMUNDISTAS PS XD</a></div>
        </div>
        // <footer className='row align-content-end '>
        //     {/* <div className='col-2 'style={{ color: "black" }}>
        //         <span>dfg</span>
        //     </div> */}
        //     <div className=" col-10 text-center py-3 fixed-bottom border" style={{ color: "black" }}> © 2019 Copyright:
        //         <a href="#" > TERCERMUNDISTAS PS XD</a>
        //     </div>
        // </footer>

    )
}