# Peru Retention Engine (TypeScript)

Proyecto en TypeScript para calcular retenciones en Peru y exportar resultados a CSV compatible con la importacion de CONTASIS.

## Reglas implementadas

- 0% de retencion si el medio de pago es tarjeta (`CARD`).
- 0% de retencion para operaciones CAN cuando hay certificado (`isCAN=true` y `hasCANCertificate=true`).
- 15% a 30% segun tipo de servicio:
  - `GENERAL_SERVICE`: 15%
  - `PROFESSIONAL_SERVICE`: 20%
  - `TECHNICAL_SERVICE`: 30%

## Instalacion

```bash
npm install
```

## Compilar

```bash
npm run build
```

## Ejecutar ejemplo de calculo

```bash
npm start
```

## Exportar CSV para CONTASIS

1. Coloca los comprobantes en `data/input.json` (array de objetos `RetentionInput`).
2. Ejecuta:

```bash
npm run build
npm run export:contasis
```

Opcionalmente puedes indicar rutas:

```bash
node dist/exportContasisCsv.js ./data/input.json ./data/contasis-retentions.csv
```

El archivo generado contiene las columnas:
`Fecha, Proveedor, RUC, Comprobante, Moneda, BaseImponible, PorcentajeRetencion, MontoRetencion, NetoPagar, Glosa`.
