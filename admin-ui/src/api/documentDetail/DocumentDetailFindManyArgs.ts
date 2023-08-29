import { DocumentDetailWhereInput } from "./DocumentDetailWhereInput";
import { DocumentDetailOrderByInput } from "./DocumentDetailOrderByInput";

export type DocumentDetailFindManyArgs = {
  where?: DocumentDetailWhereInput;
  orderBy?: Array<DocumentDetailOrderByInput>;
  skip?: number;
  take?: number;
};
