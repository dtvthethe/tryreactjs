import React, {Component} from 'react';
import "./ProductItem.css";

class ProductItem extends Component {

    clickMe(str){
        alert('Hey' + str);
    }

    render() {
        return (<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <a href='google.com.cn' className="thumbnail">
                <img src={'/images/' + this.props.img} alt="" className="ProductItem"/>
            </a>
            <br/>
            <span className="label label-default">{this.props.name}</span>

            <p>Price: {this.props.price}</p>

            <button type="button" className={'btn  btn-sm ' + (this.props.status ? 'btn-success' : 'btn-danger')} onClick={()=>this.clickMe(this.props.name)}>Add to
                Cart
            </button>
        </div>)
    };
}

export default ProductItem;
