export interface TableModel {
  tableHeader: string[];
  tableData: TableData[];
}

export interface TableData {
  id?: number;
  code?: string;
  name?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  createdDate?: string;
  status?: number;
  stopDate?: string;
  contractId?: number;
  joinDate?: string;
  seller?: {
    name: string;
    phone: string;
  };
  customer?: {
    name: string;
    phone: string;
  };
  productName?: string;
  activeDate?: string;
}
