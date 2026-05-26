import { useState } from 'react'
import { createCustomer } from '../../services/clientService';


function CustomerForm({ onUpdated }) {
   
    const [customerData, setCustomerData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCustomer(customerData);
            alert('Cliente creado exitosamente');
            setCustomerData({ firstName: '', lastName: '', email: '' });
            onUpdated();
            
        } catch (error) {
            alert('Error al crear cliente');
        }   
    };

    return (
        <div>
            <h3>Crear Cliente</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="Nombre" value={customerData.firstName} onChange={(e) => setCustomerData({...customerData, firstName: e.target.value})} />
                <input placeholder="Apellido" value={customerData.lastName} onChange={(e) => setCustomerData({...customerData, lastName: e.target.value})} />
                <input placeholder="Email" value={customerData.email} onChange={(e) => setCustomerData({...customerData, email: e.target.value})} />
                <button type="submit">Crear Cliente</button>
            </form>
            
        </div>
    )
}

export default CustomerForm;