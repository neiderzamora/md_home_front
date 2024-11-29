"use client";

import React, { useState, useEffect } from 'react';
import { FaUser , FaClock, FaMapMarkerAlt, FaStethoscope, FaTimes } from 'react-icons/fa';

const DoctorDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [serviceStatus, setServiceStatus] = useState('Esperando aceptación');
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Simulación de solicitudes de pacientes
    useEffect(() => {
        // Aquí podrías hacer una llamada a la API para obtener las solicitudes
        const simulatedRequests = [
            { 
                id: 1, 
                patientName: "Juan",
                patientLastName: "Pérez",
                gender: "Masculino",
                age: 30,
                phone: "123456789",
                email: "juan.perez@example.com",
                address: "Calle 123, Barrio Central", 
                eps: "EPS Salud",
                prepagada: "Medicina Prepagada 1",
                symptoms: ["Fiebre", "Tos"], 
            },
            { 
                id: 2, 
                patientName: "María",
                patientLastName: "Gómez",
                gender: "Femenino",
                age: 25,
                phone: "987654321",
                email: "maria.gomez@example.com",
                address: "Avenida 456, Barrio Norte", 
                eps: "EPS Bienestar",
                prepagada: "Medicina Prepagada 2",
                symptoms: ["Dolor de cabeza"], 
            },
        ];
        setRequests(simulatedRequests);

        // Actualizar la hora cada segundo
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleAcceptRequest = (requestId) => {
        setServiceStatus('Petición aceptada');
        // Aquí podrías actualizar el estado en la base de datos o API
    };

    const handleCompleteService = () => {
        setServiceStatus('Servicio finalizado');
    };

    const openModal = (request) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRequest(null);
    };

    return (
        <div className="max-w-5xl mx-auto px-4 pt-44">
            <h1 className="text-4xl font-bold mb-4 text-primary-100">Panel del Doctor</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold"><FaClock className="inline mr-2" /> Hora Actual: {currentTime}</h2>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Solicitudes de Pacientes</h2>
                {requests.length > 0 ? (
                    <ul className="space-y-4">
                        {requests.map(request => (
                            <li key={request.id} className="border p-4 rounded-lg shadow-md">
                                <p><FaUser  className="inline mr-2" /><strong>Paciente:</strong> {request.patientName} {request.patientLastName}</p>
                                <p><FaMapMarkerAlt className="inline mr-2" /><strong>Dirección:</strong> {request.address}</p>
                                <p><FaStethoscope className="inline mr-2" /><strong>Síntomas:</strong> {request.symptoms.join(', ')}</p>
                                <button 
                                    onClick={() => handleAcceptRequest(request.id)} 
                                    className="mt-2 bg-primary-100 text-white py-2 px-4 rounded"
                                >
                                    Aceptar Solicitud
                                </button>
                                <button 
                                    onClick={() => openModal(request)} 
                                    className="mt-2 ml-2 bg-secondary-100 text-white py-2 px-4 rounded"
                                >
                                    Ver Detalles
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay solicitudes pendientes.</p>
                )}
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Estado del Servicio: {serviceStatus}</h2>
                {serviceStatus === 'Petición aceptada' && (
                    <button 
                        onClick={handleCompleteService} 
                        className="mt-2 bg-primary-100 text-white py-2 px-4 rounded"
                    >
                        Finalizar Servicio
                    </button>
                )}
            </div>

            {/* Modal para mostrar detalles del paciente */}
            {isModalOpen && selectedRequest && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className ="text-2xl font-bold mb-4">Detalles del Paciente</h2>
                        <p><strong>Nombre:</strong> {selectedRequest.patientName} {selectedRequest.patientLastName}</p>
                        <p><strong>Género:</strong> {selectedRequest.gender}</p>
                        <p><strong>Edad:</strong> {selectedRequest.age}</p>
                        <p><strong>Teléfono:</strong> {selectedRequest.phone}</p>
                        <p><strong>Email:</strong> {selectedRequest.email}</p>
                        <p><strong>Dirección:</strong> {selectedRequest.address}</p>
                        <p><strong>EPS:</strong> {selectedRequest.eps}</p>
                        <p><strong>Medicina Prepagada:</strong> {selectedRequest.prepagada}</p>
                        <p><strong>Síntomas:</strong> {selectedRequest.symptoms.join(', ')}</p>
                        
                        <button 
                            onClick={closeModal} 
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                        >
                            <FaTimes className="inline mr-2" /> Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorDashboard;