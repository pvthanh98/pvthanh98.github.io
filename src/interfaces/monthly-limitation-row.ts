export interface MonthlyLimitationRow {
    category: string;
    currentAmount: number;
    limit: number;
    remainingCost: number
}

export interface MonthlyLimitationData {
    rows: Array<MonthlyLimitationRow>
}