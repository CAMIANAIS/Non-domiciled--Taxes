// src/domain/types.ts

export type PaymentMethod = "CARD" | "BANK_TRANSFER" | "CASH";

// Diferenciamos los tipos de servicio según la ley peruana
export type ServiceType = 
  | "DIGITAL_SERVICE"       // Ejemplo: Oracle (30%)
  | "PROFESSIONAL_SERVICE" // Ejemplo: Profesores (24% o 30%)
  | "TECHNICAL_ASSISTANCE"; // Tasa especial (15%)

export interface RetentionInput {
  supplierName: string;
  country: string;
  amount: number;
  currency: string;
  paymentMethod: PaymentMethod;
  serviceType: ServiceType;
  hasCANCertificate: boolean; // Para Colombia/Bolivia
  hasCDICertificate: boolean; // Para México, Chile, Irlanda
  description: string;
}

export interface CalculationResult {
  baseAmount: number;
  retentionRate: number;
  retentionAmount: number;
  igvAmount: number; // El 18% que paga la empresa local
  netToPay: number;
  accountingSeats: {
    expenseAccount: string; // Cuenta 63
    liabilityAccount: string; // Cuenta 4212
    taxAccount: string; // Cuenta 41174
  };
}