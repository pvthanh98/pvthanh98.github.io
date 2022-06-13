import { CategoryExpenseRow } from "../interfaces/category-expense-row";
import { OverviewRow } from "../interfaces/overview-row";

export function convertOverviewData(usage: Array<any>) {
    if (usage) {
        const data: Array<OverviewRow> = [];
        for (let key in usage) {
            data.push({
                duration: key,
                amount: usage[key]
            })
        }
        return data;
    }
    return [];
}

export function convertCategoryExpenseData(categories: Array<any>) {
    if (categories) {
        const data: Array<CategoryExpenseRow> = [];
        for (let key in categories) {
            data.push({
                category: key,
                amount:123
            })
        }
        return data;
    }
    return [];
}


export function ExcelDateToJSDate(serial: number) {
    console.log({serial})
    var utc_days  = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
 
    var fractional_day = serial - Math.floor(serial) + 0.0000001;
 
    var total_seconds = Math.floor(86400 * fractional_day);
 
    var seconds = total_seconds % 60;
 
    total_seconds -= seconds;
 
    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
 
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
 }