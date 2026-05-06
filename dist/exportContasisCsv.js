"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const RetentionEngine_1 = require("./RetentionEngine");
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
function formatNumber(value) {
    return value.toFixed(2);
}
function escapeCsv(value) {
    const escaped = value.replace(/"/g, "\"\"");
    return `"${escaped}"`;
}
function toCsvRow(values) {
    return values.map(escapeCsv).join(",");
}
function buildContasisCsv(records) {
    const engine = new RetentionEngine_1.RetentionEngine();
    const rows = [toCsvRow(CONTASIS_HEADERS)];
    for (const record of records) {
        const result = engine.evaluate(record);
        rows.push(toCsvRow([
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
        ]));
    }
    return rows.join("\n");
}
function main() {
    const inputPath = process.argv[2] ?? "data/input.json";
    const outputPath = process.argv[3] ?? "data/contasis-retentions.csv";
    const absoluteInputPath = node_path_1.default.resolve(inputPath);
    const absoluteOutputPath = node_path_1.default.resolve(outputPath);
    const rawInput = node_fs_1.default.readFileSync(absoluteInputPath, "utf8");
    const records = JSON.parse(rawInput);
    const csv = buildContasisCsv(records);
    node_fs_1.default.mkdirSync(node_path_1.default.dirname(absoluteOutputPath), { recursive: true });
    node_fs_1.default.writeFileSync(absoluteOutputPath, csv, "utf8");
    process.stdout.write(`Archivo CSV generado en: ${absoluteOutputPath} (${records.length} registros)\n`);
}
main();
