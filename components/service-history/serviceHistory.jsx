"use client";

import React from 'react';

const ServiceHistory = () => {
    const services = [
        {
            id: 1,
            fullName: "Juan Pérez",
            dateTime: "2023-10-01 10:30",
            address: "Calle 123, Barrio Central",
        },
        {
            id: 2,
            fullName: "María Gómez",
            dateTime: "2023-10-02 14:00",
            address: "Avenida 456, Barrio Norte",
        },
        {
            id: 2,
            fullName: "María Gómez",
            dateTime: "2023-10-02 14:00",
            address: "Avenida 456, Barrio Norte",
        },
        {
            id: 2,
            fullName: "María Gómez",
            dateTime: "2023-10-02 14:00",
            address: "Avenida 456, Barrio Norte",
        },
        // Agrega más servicios según sea necesario
    ];

    const handleServiceClick = (id) => {
        // Aquí puedes navegar a la página de detalle del servicio
        // Por ejemplo: history.push(`/service-history/${id}`);
    };

    return (
        <div className="max-w-5xl mx-auto px-4 pt-44">
            <h1 className="text-4xl font-bold mb-4 text-primary-100">Historial de Servicios</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {services.map(service => (
                    <div key={service.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" onClick={() => handleServiceClick(service.id)}>
                        <h2 className="text-xl font-semibold">{service.fullName}</h2>
                        <p className="text-gray-600">Fecha y Hora: {service.dateTime}</p>
                        <p className="text-gray-600">Dirección: {service.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceHistory;