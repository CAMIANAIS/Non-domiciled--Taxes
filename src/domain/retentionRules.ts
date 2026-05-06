// src/domain/retentionRules.ts

export const calculateRetention = (invoice: any) => {
    // 1. Regla de Oro: Bancarización/Tarjeta
    if (invoice.paymentMethod === 'CREDIT_CARD') {
      return { rate: 0, reason: 'Excepción por pago con Tarjeta de Crédito' };
    }
  
    // 2. Regla de Convenios (CAN: Colombia/Bolivia)
    if (invoice.hasResidencyCertificate && ['CO', 'BO'].includes(invoice.country)) {
      return { rate: 0, reason: 'Aplicación Decisión 578 CAN - Doble Imposición' };
    }
  
    // 3. Reglas por tipo de servicio (Sin convenio o sin certificado)
    if (invoice.serviceType === 'DIGITAL') {
      return { rate: 0.30, reason: 'Retención estándar Servicios Digitales (30%)' };
    }
  
    if (invoice.serviceType === 'PROFESSIONAL') {
      return { rate: 0.24, reason: 'Retención estándar Personas Naturales/Profesores (24%)' };
    }
  
    return { rate: 0.30, reason: 'Tasa general por defecto' };
  };