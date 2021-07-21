
export interface SelectedValue {
  selectedValue?: number;
}
export interface SubscriptionsTypes extends Partial<SelectedValue> {
  id?: number;
  planCode?: string;
  name?: string;
  monthlyCost?: number;
  annualCost?: number;
}
