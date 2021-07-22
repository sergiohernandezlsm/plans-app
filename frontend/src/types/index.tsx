
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

export interface ContextTypes {
  subscriptions: SubscriptionsTypes[];
  totalPlans: number;
  getTotal: (x: SelectedValue) => void;
}

