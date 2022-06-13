export interface DailyExpenseRow {
    date: string;
    amount: number;
    category: string;
    description:string;
}

export interface DailyExpenseData {
    rows: Array<DailyExpenseRow>
}