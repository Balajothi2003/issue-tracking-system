import React, { useState, useEffect } from 'react';
import './Service.css';
const IssueTrackingSystem = () => {
const [inventory, setInventory] = useState([]);

useEffect(() => {
const fetchInventoryData = async () => {
try {
const response = await fetch('https://api.example.com/inventory');
const data = await response.json();
setInventory(data);
} catch (error) {
console.error('Error fetching inventory data:', error);
}
};

fetchInventoryData();
}, []);

return (
<div>
<h1>Issue Tracking System</h1>
<ul>
{inventory.map(item => (
<li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
))}
</ul>
</div>
);
};

export default IssueTrackingSystem;