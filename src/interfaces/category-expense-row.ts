export interface CategoryExpenseRow {
    category: string,
    amount: number
}

export interface CategoryExpenseRowData {
    rows: Array<CategoryExpenseRow>
}