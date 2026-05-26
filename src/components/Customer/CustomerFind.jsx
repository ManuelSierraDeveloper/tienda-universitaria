import { useState } from 'react';
import { getCustomerById } from '../../services/clientService';

function CustomerFind() {
    const [customerId, setCustomerId] = useState('');
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState("");


    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const data = await getCustomerById(customerId);
            setCustomer(data);
            setError("");
        } catch (error) {
            setError("Cliente No encontrado");
            setCustomer(null);
        }
    }

    return (
        <div>
            <h3>Buscar Cliente por ID</h3>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    placeholder="Ingrese ID del cliente"
                />
                <button type="submit">Buscar</button>
            </form>
            { customer && (
                <div>
                    <h3>Cliente Encontrado</h3>
                    <p><strong>ID:</strong> {customer.id}</p>
                    <p><strong>Nombre:</strong> {customer.firstName}</p>
                    <p><strong>Apellido:</strong> {customer.lastName}</p>
                    <p><strong>Email:</strong> {customer.email}</p>
                   
                </div>
                
            )}
            {error && (
                <div>
                    <p>{error}</p>
                </div>
            )}
        
        </div>
    )
}

export default CustomerFind;
