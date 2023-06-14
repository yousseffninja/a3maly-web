import { createContext, useState } from 'react';
import { IAccountFinancialsBalance } from '@/@types/account-financials-balance';
import axios from "../configs/axios-client";
import {
  get_financials_offices_balance,
  get_financials_drivers_balance,
  get_transactions
} from '@/environment/apis';
import { IDriverFinancialsBalance } from '@/@types/driver-financials-balance';
import { ITransactionsFinancials } from '@/@types/transactions-financials';
import { IOfficeFinancialsBalance } from '@/@types/office-financials-balance';

export const FinancialsContext = createContext<accountFinancialsBalanceContextType | undefined>(undefined);

export const FinancialsProvider = ({ children }: any) => {
  const [transactions, setTransactions] = useState<ITransactionsFinancials[]>([])
  const [offices, setOffices] = useState<IOfficeFinancialsBalance[]>([]);
  const [drivers, setDrivers] = useState<IDriverFinancialsBalance[]>([]);
  const [count, setCount] = useState(0);

  const fetchTransactions = (page: number, rowsPerPage:number , filter?:string) => {
    axios
      .get(get_transactions(page, rowsPerPage, filter))
      .then((res) => {
        setTransactions(res.data.data)
        setCount(res.data.meta.total);
      })
      .catch((error) => {
      });
  }
  const fetchOfficesbalance = (page: number, rowsPerPage:number , filter?:string) => {
    axios
      .get(get_financials_offices_balance(page, rowsPerPage , filter))
      .then((res) => {
        setOffices(res.data.data);
        setCount(res.data.meta.total);
      })
      .catch((error) => {
      });
  }

  const fetchDrivers = (page: number, rowsPerPage:number , filter?:string) => {
    axios
      .get(get_financials_drivers_balance(page, rowsPerPage, filter))
      .then((res) => {
        setDrivers(res.data.data)
        setCount(res.data.meta.total);
      })
      .catch((error) => {
      });
  }

  return (
    <FinancialsContext.Provider
      value={{
        transactions,
        offices,
        drivers,
        count,
        fetchTransactions,
        fetchOfficesbalance,
        fetchDrivers,
      }}
    >
      {children}
    </FinancialsContext.Provider>
  )
}

export default FinancialsProvider;

export type accountFinancialsBalanceContextType = {
  fetchTransactions: (page: number, rowsPerPage:number , filter?:string) => void;
  fetchOfficesbalance: (page: number, rowsPerPage:number , filter?:string) => void;
  fetchDrivers: (page: number, rowsPerPage:number , filter?:string) => void;
  transactions: ITransactionsFinancials[];
  offices: IOfficeFinancialsBalance[];
  drivers: IDriverFinancialsBalance[];
  count: number;
};