

/*Crear cliente

# Pedir datos del cliente

# Traer todos los clientes

# Editar cliente

- POST /api/customers
• GET /api/customers/{id}
• GET /api/customers
• PATCH /api/customers/{id}


*/


const URL_API = 'http://localhost:8080/api/customers';



export async function getAllCustomers(page = 0, size = 5) {
  try {
    const response = await fetch(`${URL_API}?page=${page}&size=${size}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
    });

    if (!response.ok) {
      let message = "Error fetching customers";
      try {
        const errorBody = await response.json();
        message = errorBody?.message || message;
      } catch {}
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
}

export async function getCustomerById(customerId) {
    const response = await fetch(`${URL_API}/${customerId}`);
    if (!response.ok) {
        throw new Error('Error fetching customer');
    }
    return response.json();
}

export async function createCustomer(customerData) {

        const response = await fetch(URL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: customerData.firstName,
                lastName: customerData.lastName,
                email: customerData.email,
               
            })
        });
        if (!response.ok) {
            throw new Error('Error creating customer');
        }

        return response.json();
    }

export async function deleteCustomer(customerId) {
    const response = await fetch(`${URL_API}/${customerId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting customer');
    }
    return response.json();
}

export async function updateCustomer(customerId, customerData) {
    const response = await fetch(`${URL_API}/${customerId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: customerData.firstName,
            lastName: customerData.lastName,
            email: customerData.email,
            status: customerData.status
        })
    });
    if (!response.ok) {
        throw new Error('Error updating customer');
    }
    return response.json();
}

