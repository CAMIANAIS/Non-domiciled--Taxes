"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionEngine = void 0;
const SERVICE_RETENTION_RATE = {
    GENERAL_SERVICE: 0.15,
    PROFESSIONAL_SERVICE: 0.2,
    TECHNICAL_SERVICE: 0.3
};
class RetentionEngine {
    evaluate(input) {
        const retentionRate = this.resolveRetentionRate(input);
        const retentionAmount = this.round(input.amount * retentionRate);
        const payableAmount = this.round(input.amount - retentionAmount);
        return {
            ...input,
            retentionRate,
            retentionAmount,
            payableAmount
        };
    }
    resolveRetentionRate(input) {
        if (input.paymentMethod === "CARD") {
            return 0;
        }
        if (input.isCAN && input.hasCANCertificate) {
            return 0;
        }
        return SERVICE_RETENTION_RATE[input.serviceType];
    }
    round(value) {
        return Math.round(value * 100) / 100;
    }
}
exports.RetentionEngine = RetentionEngine;
