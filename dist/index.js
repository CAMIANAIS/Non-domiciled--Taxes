"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RetentionEngine_1 = require("./RetentionEngine");
const engine = new RetentionEngine_1.RetentionEngine();
const sampleInvoice = {
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
