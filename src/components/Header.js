import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href='google.com.cn' className="navbar-brand">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a href='google.com.cn' className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a href='google.com.cn' className="nav-link">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href='google.com.cn' className="nav-link dropdown-toggle" id="dropdownId" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a href='google.com.cn' className="dropdown-item">Action 1</a>
                                <a href='google.com.cn' className="dropdown-item">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Header;
