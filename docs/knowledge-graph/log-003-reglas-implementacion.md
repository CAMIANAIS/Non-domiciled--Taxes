ID: 003-REGLAS-TS

Fecha: 6 de mayo de 2026

Estado: Implementación en TypeScript

1. Contexto Técnico

Se migró la lógica de negocio de un entorno conceptual a un motor funcional en TypeScript usando Cursor en macOS.

2. Reglas de Negocio Aplicadas

Excepción de Pago: Si el método es CREDIT_CARD, la retención es 0%.

Convenios (CDI): Aplicación de tasa 0% para Colombia y Bolivia bajo la Decisión 578 (CAN), condicionado a la existencia del Certificado de Residencia.

Tasas Residuales: 24% para servicios profesionales y 30% para servicios digitales (como Oracle) si no hay convenios aplicables.

3. Aprendizaje (Feedback-Loop)

Lo que funciona: La separación de la lógica en src/domain permite que el sistema sea agnóstico al ERP (vendible a empresas que no usan CONTASIS).

Lo que falta: Validar si el IGV de no domiciliados (18%) debe aparecer desglosado en el asiento contable final para el cliente.

4. Próxima Acción

Generar el adaptador para exportar estos resultados al formato Excel de CONTASIS.