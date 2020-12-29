import React from 'react';
import {Link} from 'react-router-dom';

function detailsPage(props) {
    const item = props.location.state.data;
    return (
        <>
        <div className="flexBox paraCSS">
            <div className="Left"> Welcome all to Periodic table </div>
            <div className="heading">Details about {item.name}({item.symbol})</div>
            <div className="Right">
                <Link to=
                    {{pathname:"/"
                    }}>
                    <span className="back">Go back to Periodic table...</span>
                </Link>
            </div>
        </div>
        <div className="tableCenter" style={{background:"#c9e9f6"}}>
            <table className="styled-table alignItem">
            <tbody>
                
                <tr>
                    <td><b>Atomic Number</b></td>
                    <td>{item.atomicNumber}</td>
                </tr>
                <tr>
                    <td><b>Symbol</b></td>
                    <td>{item.symbol}</td>
                </tr>
                <tr>
                    <td><b>Name</b></td>
                    <td>{item.name}</td>
                </tr>
                <tr>
                    <td><b>Atomic Mass</b></td>
                    <td>{item.atomicMass}</td>
                </tr>
                <tr>
                    <td><b>Electronic Configuration</b></td>
                    <td>{item.electronicConfiguration}</td>
                </tr>
                <tr>
                    <td><b>Electronegativity</b></td>
                    <td>{item.electronegativity}</td>
                </tr>
                <tr>
                    <td><b>Atomic Radius</b></td>
                    <td>{item.atomicRadius}</td>
                </tr>
                <tr>
                    <td><b>Standard State</b></td>
                    <td>{item.standardState}</td>
                </tr>
                <tr>
                    <td><b>Bonding Type</b></td>
                    <td>{item.bondingType}</td>
                </tr>
                <tr>
                    <td><b>Group Block</b></td>
                    <td>{item.groupBlock}</td>
                </tr>
                <tr>
                    <td><b>Year Discovered</b></td>
                    <td>{item.yearDiscovered}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p className="paraCSSEnd">&nbsp;
            <span>
                <small>
                    &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
                </small>
            </span>
        </p>
        </>
    )
}

export default detailsPage
