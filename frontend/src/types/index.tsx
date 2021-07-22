
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

export interface SubscriptionSelectedTypes {
  id?: number;
  planType?: string;
  planValue?: number;
}
