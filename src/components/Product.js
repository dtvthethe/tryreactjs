import React, {Component} from 'react';
import ProductItem from './ProductItem';

class Product extends Component {


    users2 = [
        {
            id: 1,
            name: 'Nguyen Van A',
            img: 'a.jpg',
            price: 12000,
            status: true
        },
        {
            id: 2,
            name: 'Tran Van H',
            img: 'b.jpeg',
            price: 12300,
            status: false
        },
        {
            id: 3,
            name: 'Ti Van Teo',
            img: 'c.jpeg',
            price: 16000,
            status: true
        },
        {
            id: 4,
            name: 'Meo Van U',
            img: 'd.png',
            price: 42000,
            status: true
        }
    ];

    listUser = this.users2.map((user, index) => {
        return (<ProductItem key={user.id} img={user.img} name={user.name} price={user.price} status={user.status} />)
    });


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    { this.listUser }
                </div>
            </div>
        );
    }
}

export default Product;
