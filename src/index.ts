import { RetentionEngine } from "./domain/RetentionEngine";
import { RetentionInput } from "./domain/types";

const engine = new RetentionEngine();

const sampleInvoice: RetentionInput = {
  date: "2026-05-06",
  supplierName: "Servicios Integrales SAC",
  supplierTaxId: "20123456789",
  voucherNumber: "F001-12345",
  currency: "PEN",
  description: "Mantenimiento de sistemas",
  amount: 10000,
  paymentMethod: "BANK_TRANSFER",
  serviceType: "GENERAL_SERVICE",
  isCAN: false,
  hasCANCertificate: false
};

const result = engine.evaluate(sampleInvoice);
console.log("Resultado de retencion:", result);
