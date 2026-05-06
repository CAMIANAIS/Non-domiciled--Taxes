ID: 001-NOM-DOM

Proyecto: Retenciones No Domiciliados (Perú)

Hipótesis: Automatizar el cálculo y la generación de guías de pago para servicios de no domiciliados reducirá el error humano en un 90% y ahorrará 2 horas de gestión por cada factura extranjera.

Métrica de Éxito: Generación de un reporte de retenciones (IR e IGV) y guía para el Formulario 1662 en menos de 1 minuto a partir de un invoice.

Estado: Fase de lógica contable.

VALIDACION-REGLAS

Fecha: 4 de Mayo, 2026

Objetivo: Identificar el "Algoritmo Mental" del contador.

Respuestas clave a buscar:

Diferencia entre 15% y 30% (Lógica de Asistencia Técnica).

Manejo de Certificados de Residencia (Documentación).

Flujo del IGV No Domiciliados (Conciliación).

Formato de salida preferido (TXT vs PDF).

## Caso de Prueba 01: [Nombre de la Empresa/Servicio - ej. Licencias de Software AWS]
**Input Real:**
- Proveedor: AWS (Estados Unidos)
- Tipo de Servicio: Servicios Digitales / Software
- Monto Factura: $1,000 USD
- ¿Se consume en Perú?: Sí

**Output Esperado (Lo que dice la ley/el contador):**
- Tasa IR a aplicar: 30%
- Retención IR: $300 USD
- Tasa IGV a aplicar: 18%
- IGV a pagar (Formulario 1662): $180 USD
- Monto neto a depositar al proveedor: $700 USD (Si el contrato dice que la retención la asume el proveedor)

**Resultado del Algoritmo:** [Pendiente]
**Discrepancia/Aprendizaje:** [Pendiente]