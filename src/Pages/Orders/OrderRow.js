import React, { useEffect, useState } from 'react';


const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({})
    // console.log(orderService);
    // console.log(service);

    useEffect(() => {
        if (service) {
            fetch(`http://localhost:5000/services/${service}`)
                .then(res => res.json())
                .then(data => setOrderService(data))
                // .then(data => console.log(data))
        }
    }, [service])


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs"> {status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;