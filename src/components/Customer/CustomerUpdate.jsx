import {useState} from 'react';
import { updateCustomer } from '../../services/clientService';


function CustomerUpdate({customer, onUpdate, onCancel}) {
    const [customerData, setCustomerData] = useState({
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        status: customer.status || 'ACTIVE'
    });

    const handleUpdate = async (event) => {
        try {
            event.preventDefault();
            await updateCustomer( customer.id, customerData );
            onUpdate();
        } catch (error) {
            console.error('Error updating customer:', error);
        }
    }

    return (
        <div>
            <h2>Actualizar Cliente</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={customerData.firstName}
                    onChange={(e) => setCustomerData({...customerData, firstName: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    value={customerData.lastName}
                    onChange={(e) => setCustomerData({...customerData, lastName: e.target.value})}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={customerData.email}
                    onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                />

                <select
                    value={customerData.status}
                    onChange={(e) => setCustomerData({...customerData, status: e.target.value})}
                >
                    <option value="ACTIVE">Activo</option>
                    <option value="INACTIVE">Inactivo</option>
                </select>

                <button type="submit">Actualizar</button>
                <button type="button" onClick={onCancel}>Cancelar</button>
            </form>
        </div>
    );
}

export default CustomerUpdate;