import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Προβολή συναλλαγών",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Έσοδα",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Έξοδα",
        icon: expenses,
        link: "/dashboard",
    },
]