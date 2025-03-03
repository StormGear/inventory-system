export interface Product {
    productId: number;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
  }
  
  export interface SalesSummary {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number;
    date: string;
  }
  
  export interface PurchaseSummary {
    purchaseSummaryId: string;
    totalPurchased: number;
    changePercentage?: number;
    date: string;
  }
  
  export interface ExpenseSummary {
    expensesSummaryId: string;
    totalExpenses: number;
    date: string;
  }
  
  export interface ExpenseByCategorySummary {
    expensesByCategorySummaryId: string;
    category: string;
    amount: string;
    date: string;
  }