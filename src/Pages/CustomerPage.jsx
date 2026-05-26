import {useState, useEffect} from 'react';
import CustomerFind from '../components/Customer/CustomerFind';
import CustomerUpdate from '../components/Customer/CustomerUpdate';
import CustomerForm from '../components/Customer/CustomerForm';
import CustomerCard from '../components/Customer/CustomerCard';
import { getAllCustomers, deleteCustomer } from '../services/clientService';

function CustomerPage() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState(null);

    async function GuardarCustomer(){
        const data = await getAllCustomers();
        setCustomers(data);
        setCustomer(null);
    }

    async function handleDelete(customerId){
        await deleteCustomer(customerId);
        GuardarCustomer();
        
    }

    useEffect(() => {
        GuardarCustomer();
    }, []);

    

    return (
        <div>
            <h2
            >Gestión de Clientes</h2>
            <section>
                <CustomerFind />
                
                <CustomerForm onUpdated={ GuardarCustomer } />

                <CustomerCard editCustomer={setCustomer} listCustomers={customers} onDelete={handleDelete} />
            
                {customer && (
                    <CustomerUpdate customer={customer} onUpdate={GuardarCustomer} onCancel={() => setCustomer(null)}  />
                )}

            
            </section>
        </div>
    )
}

export default CustomerPage;