import React, { Component } from 'react';


class ToolBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
        }

        this.changeName = this.changeName.bind(this);
    }

    changeName(event){
        this.setState({
            name: event.target.value
        });
    }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Tool Bar</h3>
                    </div>
                    <div className="panel-body">
                        <div className="input-group">
                            <label>Name: {this.state.name}</label><br/>
                            <input type="text" className="form-control" placeholder="Search" onChange={this.changeName} />
                            <span className="input-group-btn">
                                {/* <button type="button" className="btn btn-default">Click</button> */}
                            </span>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
