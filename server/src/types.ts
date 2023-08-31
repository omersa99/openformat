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
