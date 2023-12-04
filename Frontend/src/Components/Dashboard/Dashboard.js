import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { euro } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    const balanceColor = totalBalance() >= 0 ? 'var(--color-green)' : 'var(--color-delete)';

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Όλες οι συναλλαγές</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Συνολικά έσοδα</h2>
                                <p1>
                                    {euro} {totalIncome()}
                                </p1>
                            </div>
                            <div className="expense">
                                <h2>Συνολικά έξοδα</h2>
                                <p2>
                                    {euro} {totalExpenses()}
                                </p2>
                            </div>
                            <div className="balance" style={{ color: balanceColor }}>
                                <h2>Συνολικό υπόλοιπο</h2>
                                    <p3>
                                         {euro} {totalBalance()}
                                    </p3>
                                
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Έσοδα</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                €{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                €{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Έξοδα</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                €{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                €{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: rgba(131, 127, 129, 0.58);
                    border: 2px solid rgba(197, 162, 20, 0.75);
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                    p1{
                        color: var(--color-green);
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                    p2{
                        color: var(--color-delete);
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                    p3{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-accent);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: rgba(131, 127, 129, 0.58);
                border: 2px solid rgba(197, 162, 20, 0.75);
                box-shadow: 0px 1px 5px rgba(197, 162, 20, 0.75);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard