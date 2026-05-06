import fs from "node:fs";
import path from "node:path";
import { RetentionEngine } from "./domain/RetentionEngine";
import { RetentionInput } from "./domain/types";

const CONTASIS_HEADERS = [
  "Fecha",
  "Proveedor",
  "RUC",
  "Comprobante",
  "Moneda",
  "BaseImponible",
  "PorcentajeRetencion",
  "MontoRetencion",
  "NetoPagar",
  "Glosa"
];

function formatNumber(value: number): string {
  return value.toFixed(2);
}

function escapeCsv(value: string): string {
  const escaped = value.replace(/"/g, "\"\"");
  return `"${escaped}"`;
}

function toCsvRow(values: string[]): string {
  return values.map(escapeCsv).join(",");
}

function buildContasisCsv(records: RetentionInput[]): string {
  const engine = new RetentionEngine();
  const rows = [toCsvRow(CONTASIS_HEADERS)];

  for (const record of records) {
    const result = engine.evaluate(record);
    rows.push(
      toCsvRow([
        result.date,
        result.supplierName,
        result.supplierTaxId,
        result.voucherNumber,
        result.currency,
        formatNumber(result.amount),
        formatNumber(result.retentionRate * 100),
        formatNumber(result.retentionAmount),
        formatNumber(result.payableAmount),
        result.description
      ])
    );
  }

  return rows.join("\n");
}

function main(): void {
  const inputPath = process.argv[2] ?? "data/input.json";
  const outputPath = process.argv[3] ?? "data/contasis-retentions.csv";

  const absoluteInputPath = path.resolve(inputPath);
  const absoluteOutputPath = path.resolve(outputPath);

  const rawInput = fs.readFileSync(absoluteInputPath, "utf8");
  const records = JSON.parse(rawInput) as RetentionInput[];

  const csv = buildContasisCsv(records);

  fs.mkdirSync(path.dirname(absoluteOutputPath), { recursive: true });
  fs.writeFileSync(absoluteOutputPath, csv, "utf8");

  process.stdout.write(
    `Archivo CSV generado en: ${absoluteOutputPath} (${records.length} registros)\n`
  );
}

main();
