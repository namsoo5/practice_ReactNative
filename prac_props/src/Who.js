import React, { Component } from 'react';

// class Who extends Component {

//     static defaultProps = {
//         name: '기본기본'
//     }

//     render() {
//         return (
//             <div>
//                 안녕 나는 {this.props.name}이야
//             </div>
//         );
//     }
// }

const Who = ({phone}) => {
    return <div>안녕안녕 내폰번은 {phone}이야</div>;
}

Who.defaultProps = {
    phone: '01012344567'
}

export default Who;