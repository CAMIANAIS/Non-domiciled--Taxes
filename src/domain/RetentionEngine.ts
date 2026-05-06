// src/domain/RetentionEngine.ts
import { ServiceType, RetentionInput } from "./types";

const SERVICE_RETENTION_RATE: Record<ServiceType, number> = {
  DIGITAL_SERVICE: 0.30,      // Oracle y similares
  PROFESSIONAL_SERVICE: 0.24, // Profesores sin convenio (24%)
  TECHNICAL_ASSISTANCE: 0.15   // Asistencia técnica
};

export class RetentionEngine {
  public evaluate(input: RetentionInput) {
    const rate = this.resolveRetentionRate(input);
    const retentionAmount = this.round(input.amount * rate);
    
    // IMPORTANTE: Incluye el 18% de IGV No Domiciliados que mencionaste
    const igvAmount = this.round(input.amount * 0.18); 

    return {
      ...input,
      retentionRate: rate,
      retentionAmount,
      igvAmount,
      payableAmount: this.round(input.amount - retentionAmount)
    };
  }

  private resolveRetentionRate(input: RetentionInput): number {
    // Regla de Oro: Si es tarjeta, 0%
    if (input.paymentMethod === "CARD") return 0;

    // Regla CAN: Colombia/Bolivia con certificado, 0%
    if (input.hasCANCertificate) return 0;

    return SERVICE_RETENTION_RATE[input.serviceType];
  }

  private round(value: number): number {
    return Math.round(value * 100) / 100;
  }
}