**ID:** 002-REGLAS-NEGOCIO-NODOMICILIADOS
**Fecha:** [Fecha actual]
**Fuente:** Entrevista Contador BS

**Hallazgos Clave & Reglas de Negocio:**

1.  **Regla de Retención por Defecto (Personas):**
    *   Si NO hay convenio (CDI): 24%.
    *   Si HAY convenio (ej. Colombia, México, Chile, Irlanda): Depende del Certificado de Residencia.
    *   Servicios Digitales (Empresas): 30% (generalmente).
2.  **Excepción Crítica de Pago:**
    *   Si el método de pago es TARJETA DE CRÉDITO -> RETENCIÓN = 0%.
3.  **Flujo Operativo & Cuentas Contables (El Asiento):**
    *   Asiento base: `63 (Gasto) / 4212 (CXP)` vs `41174 (Retención 30%)`.
    *   Tipo de cambio utilizado: El de la fecha de la operación.
4.  **Flujo de Control (Presupuesto):**
    *   Se requiere un "FUR" (Formulario Único de Requerimiento) asociado al proveedor, serie, número y monto en Finanzas.
    *   Si el monto excede lo presupuestado, se solicita un FUR adicional.
5.  **Entregable / Integración (El Output de Valor):**
    *   No necesitan un visor de PDF. Necesitan una **Plantilla de Importación para CONTASIS** (estructurada con montos y monedas).