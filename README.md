Peru Retention Engine (TypeScript Edition) 🇵🇪 ⚙️
A professional rule engine designed to automate tax retention calculations for non-resident (foreign) suppliers in Peru. This project bridges the gap between financial accounting logic and modern software engineering, developed under an Agentic Software Engineering workflow.  
+1

🚀 Value Proposition
Elimination of Human Error: Automates the application of specific tax rates (15%, 24%, 30%) based on SUNAT regulations.

Regulatory Compliance: Automatically identifies benefits from Double Taxation Treaties (CAN) and banking exceptions (Credit Card payments).Peru Retention Engine (TypeScript Edition) 🇵🇪 ⚙️
A professional rule engine designed to automate tax retention calculations for non-resident (foreign) suppliers in Peru. This project bridges the gap between financial accounting logic and modern software engineering, developed under an Agentic Software Engineering workflow.  
+1

🚀 Value Proposition
Elimination of Human Error: Automates the application of specific tax rates (15%, 24%, 30%) based on SUNAT regulations.

Regulatory Compliance: Automatically identifies benefits from Double Taxation Treaties (CAN) and banking exceptions (Credit Card payments).

Operational Efficiency: Drastically reduces the processing time for international invoices from providers like Oracle or foreign professional services.  

🛠️ Tech Stack
Language: TypeScript (Node.js) for strict typing and asynchronous reliability.

Architecture: Clean Architecture (Domain-Driven Design) to ensure business rules remain independent of output technology.  

Environment: Developed entirely on macOS using Cursor.

🤖 Agentic Workflow (AI-Assisted Development)
In alignment with the standards for the Agentic Software Engineer program, this repository documents the use of generative AI tools:

Cursor Composer: Used for initial scaffolding and complex TypeScript type refactoring.

Agent Mode: Leveraged AI capabilities to execute terminal tests, diagnose compilation errors, and autonomously suggest tsconfig.json fixes.

Knowledge Graph Integration: Development was guided by a Markdown-based log system (docs/knowledge-graph) which provided context for the AI to understand business rules extracted from expert accounting interviews.

⚖️ Implemented Business Rules
Scenario	Tax Rate	Legal Basis / Logic
Credit Card Payment	0%	Banking exception (Bancarización directa).
CAN Treaty (CO/BO)	0%	Decision 578 CAN (with Residency Certificate).
Digital Services	30%	Standard rate for software/subscriptions (e.g., Oracle).
Professional Services	24%	Standard rate for non-resident individuals (Professors).
Technical Assistance	15%	Reduced rate for qualified technical services.
📦 Installation
Bash
npm install
🏗️ Build
Bash
npm run build
🖥️ Usage
Run Calculation Example

Bash
npm start
Export CSV for CONTASIS

Place your vouchers in data/input.json (array of RetentionInput objects).

Execute the exporter:

Bash
npm run build
npm run export:contasis
Alternatively, specify paths:

Bash
node dist/exportContasisCsv.js ./data/input.json ./data/contasis-retentions.csv
Output Columns: Date, Supplier, RUC, Voucher, Currency, TaxBase, Retention%, RetentionAmount, NetToPay, Description.

🧪 Unit Testing
The project includes a validation suite for critical scenarios:

Bash
npx ts-node src/tests/engine.test.ts
Banking Validation: Ensures credit card payments result in $0 retention.

IGV Validation: Confirms the automatic 18% IGV (Utilización de Servicios) calculation.

📈 Roadmap
CONTASIS Adapter: Full automation of Excel templates for direct ERP import.

Gemini API Integration: Automatic service classification by analyzing invoice descriptions using LLMs.  

Audit Module: Generation of support documentation for tax authority (SUNAT) audits.

Operational Efficiency: Drastically reduces the processing time for international invoices from providers like Oracle or foreign professional services.  

🛠️ Tech Stack
Language: TypeScript (Node.js) for strict typing and asynchronous reliability.

Architecture: Clean Architecture (Domain-Driven Design) to ensure business rules remain independent of output technology.  

Environment: Developed entirely on macOS using Cursor.

🤖 Agentic Workflow (AI-Assisted Development)
In alignment with the standards for the Agentic Software Engineer program, this repository documents the use of generative AI tools:

Cursor Composer: Used for initial scaffolding and complex TypeScript type refactoring.

Agent Mode: Leveraged AI capabilities to execute terminal tests, diagnose compilation errors, and autonomously suggest tsconfig.json fixes.

Knowledge Graph Integration: Development was guided by a Markdown-based log system (docs/knowledge-graph) which provided context for the AI to understand business rules extracted from expert accounting interviews.

⚖️ Implemented Business Rules
Scenario	Tax Rate	Legal Basis / Logic
Credit Card Payment	0%	Banking exception (Bancarización directa).
CAN Treaty (CO/BO)	0%	Decision 578 CAN (with Residency Certificate).
Digital Services	30%	Standard rate for software/subscriptions (e.g., Oracle).
Professional Services	24%	Standard rate for non-resident individuals (Professors).
Technical Assistance	15%	Reduced rate for qualified technical services.
📦 Installation
Bash
npm install
🏗️ Build
Bash
npm run build
🖥️ Usage
Run Calculation Example

Bash
npm start
Export CSV for CONTASIS

Place your vouchers in data/input.json (array of RetentionInput objects).

Execute the exporter:

Bash
npm run build
npm run export:contasis
Alternatively, specify paths:

Bash
node dist/exportContasisCsv.js ./data/input.json ./data/contasis-retentions.csv
Output Columns: Date, Supplier, RUC, Voucher, Currency, TaxBase, Retention%, RetentionAmount, NetToPay, Description.

🧪 Unit Testing
The project includes a validation suite for critical scenarios:

Bash
npx ts-node src/tests/engine.test.ts
Banking Validation: Ensures credit card payments result in $0 retention.

IGV Validation: Confirms the automatic 18% IGV (Utilización de Servicios) calculation.

📈 Roadmap
CONTASIS Adapter: Full automation of Excel templates for direct ERP import.

Gemini API Integration: Automatic service classification by analyzing invoice descriptions using LLMs.  

Audit Module: Generation of support documentation for tax authority (SUNAT) audits.