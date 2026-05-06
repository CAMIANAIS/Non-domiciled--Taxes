import { RetentionEngine } from "../domain/RetentionEngine";
import { RetentionInput } from "../domain/types";
import mockInvoicesRaw from "../tests/mock_data.json";

// Aplicamos el casting para que el motor lo reconozca como un array de inputs
const mockInvoices = mockInvoicesRaw as unknown as RetentionInput[];

const engine = new RetentionEngine();

console.log("--- INICIANDO PRUEBAS DE RETENCIÓN NO DOMICILIADOS ---");

mockInvoices.forEach((invoice) => {
  const result = engine.evaluate(invoice as RetentionInput);
  
  console.log(`\nProveedor: ${result.supplierName}`);
  console.log(`- Descripción: ${result.description}`);
  console.log(`- Tasa aplicada: ${(result.retentionRate * 100)}%`);
  console.log(`- Monto Retención: $${result.retentionAmount}`);
  console.log(`- IGV (18%): $${result.igvAmount}`); // El 18% que validaste
  console.log(`- Neto a pagar: $${result.payableAmount}`);
  
  // Validaciones lógicas
  if (result.paymentMethod === "CARD" && result.retentionAmount !== 0) {
    console.error("❌ ERROR: Pago con tarjeta debe tener 0 retención");
  } else if (result.hasCANCertificate && result.retentionAmount !== 0) {
    console.error("❌ ERROR: Proveedor CAN con certificado debe tener 0 retención");
  } else {
    console.log("✅ Prueba superada con éxito");
  }
});