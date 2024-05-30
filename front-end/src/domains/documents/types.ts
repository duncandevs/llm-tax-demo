import { z } from 'zod';

// Employee Information Schema
const EmployeeNameSchema = z.object({
  FirstName: z.string(),
  MiddleInitial: z.string().nullable(), // Optional field
  LastName: z.string(),
});

const EmployeeAddressSchema = z.object({
  Street: z.string(),
  City: z.string(),
  State: z.string(),
  ZipCode: z.string(),
});

const EmployeeInformationSchema = z.object({
  EmployeeName: EmployeeNameSchema,
  SocialSecurityNumber: z.string(),
  Address: EmployeeAddressSchema,
});

// Employer Information Schema
const EmployerAddressSchema = z.object({
  Street: z.string(),
  City: z.string(),
  State: z.string(),
  ZipCode: z.string(),
});

const EmployerInformationSchema = z.object({
  EmployerName: z.string(),
  EmployerIdentificationNumber: z.string(),
  EmployerAddress: EmployerAddressSchema,
});

// Wages and Taxes Schema
const WagesAndTaxesSchema = z.object({
  WagesTipsOtherCompensation: z.number(),
  FederalIncomeTaxWithheld: z.number(),
  SocialSecurityWages: z.number(),
  SocialSecurityTaxWithheld: z.number(),
  MedicareWagesAndTips: z.number(),
  MedicareTaxWithheld: z.number(),
  SocialSecurityTips: z.number().nullable(), // Optional field
  AllocatedTips: z.number().nullable(), // Optional field
});

// State and Local Taxes Schema
const StateInformationSchema = z.object({
  State: z.string(),
  EmployerStateIDNumber: z.string(),
  StateWagesTipsEtc: z.number(),
  StateIncomeTax: z.number(),
});

const LocalInformationSchema = z.object({
  LocalityName: z.string(),
  LocalWagesTipsEtc: z.number(),
  LocalIncomeTax: z.number(),
  LocalityCode: z.string().nullable(),
});

const StateAndLocalTaxesSchema = z.object({
  StateInformation: z.array(StateInformationSchema).nullable(), // Optional field
  LocalInformation: z.array(LocalInformationSchema).nullable(), // Optional field
});

// Other Information Schema
const Box12CodeSchema = z.object({
  Code: z.string(),
  Amount: z.number(),
});

const Box13CheckboxesSchema = z.object({
  StatutoryEmployee: z.boolean(),
  RetirementPlan: z.boolean(),
  ThirdPartySickPay: z.boolean(),
});

const Box14OtherSchema = z.object({
  Description: z.string(),
  Amount: z.number(),
});

const OtherInformationSchema = z.object({
  Box12Codes: z.array(Box12CodeSchema).nullable(), // Optional field
  Box13Checkboxes: Box13CheckboxesSchema.nullable(), // Optional field
  Box14Other: z.array(Box14OtherSchema).nullable(), // Optional field
}).nullable(); // Optional field

// Final W2 Form Schema
const W2FormSchema = z.object({
  EmployeeInformation: EmployeeInformationSchema,
  EmployerInformation: EmployerInformationSchema,
  WagesAndTaxes: WagesAndTaxesSchema,
  StateAndLocalTaxes: StateAndLocalTaxesSchema,
  OtherInformation: OtherInformationSchema,
});

type W2Form = z.infer<typeof W2FormSchema>;

export {
  W2FormSchema,
};

export type {
  W2Form
}
