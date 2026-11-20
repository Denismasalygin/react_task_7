export interface AccountSummaryItem {
    label: string
    title: string
    action: string
}

export interface AccountSummaryCardsProps {
    items: Record<string, AccountSummaryItem>
}