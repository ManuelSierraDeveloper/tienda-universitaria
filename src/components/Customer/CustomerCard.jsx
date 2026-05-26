import { useState, useEffect } from 'react'
import { getCustomerById, getAllCustomers, deleteCustomer} from '../../services/clientService';
import CustomerUpdate from './CustomerUpdate';


function CustomerCard({ editCustomer, listCustomers, onDelete }) {
    
    return (
        <div>
            <h3>Clientes</h3>
            <ul>
                {listCustomers.map(customer => (
                    <li key={customer.id}>
                        <p> {customer.id} - {customer.firstName} {customer.lastName} - {customer.email}</p>
                        <button onClick={() => onDelete(customer.id)}>Eliminar</button>
                        <button onClick = { () => editCustomer(customer) }>Actualizar</button>
                    </li>
                ))}
                 
            </ul>
        </div>
    );
}

export default CustomerCard;