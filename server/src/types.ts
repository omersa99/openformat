import type { JsonValue } from "type-fest";

export type InputJsonValue = Omit<JsonValue, "null">;

export interface TransactionData {
  // Add whatever other fields are relevant for your transaction data
  actionAmount?: number;
  actionOperation?: string;
}

export interface DocumentData {
  totalAmount: number;
  // Add whatever other fields are relevant for your document data
}

export type DocumentOption = {
  value: number;
  label: string;
};

export interface TransactionOperation {
  actionOperation: string;
}

export interface FieldDefinition {
  Field_Id: number;
  Field_Name: string;
  Translation: string;
  Type: string;
  Length: number;
}

export interface FieldInfo {
  Field_Id: number;
  Field_Name: string;
  Translation: string;
  Type: string;
  Length: number;
  value: any;
}

export interface DocumentJson {
  Field_Id: number;
  Field_Name: string;
  Translation: string;
  Type: string;
  Length: number;
  value: any;
}
