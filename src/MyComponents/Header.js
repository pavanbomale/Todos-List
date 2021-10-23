import React from 'react'


export default function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                </div>
            </nav>
        </div>
    )
}

