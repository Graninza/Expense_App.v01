import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Τίτλος Εσόδου"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Μέγεθος Εσόδου'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Εισάγετε μια ημερομηνία'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Επιλέξτε Επιλογή</option>
                    <option value="salary">Μισθός</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Επενδύσεις</option>
                    <option value="stocks">Μετοχές</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Τραπεζική μεταφορά</option>  
                    <option value="youtube">Youtube</option> 
                    <option value="streaming">Streaming</option>
                    <option value="pokemon">Κάρτες Pokemon</option>
                    <option value="consulting">Consulting</option>    
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Προσθέστε μια αναφορά' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}


const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid rgba(197, 162, 20, 0.75);
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 5px rgba(197, 162, 20, 0.75);
    color: rgba(197, 162, 20, 0.75);
    &::placeholder{
        color: rgba(197, 162, 20, 0.75);
    }
}
.input-control{
    input{
        width: 100%;
    }
}

.selects{
    display: flex;
    justify-content: flex-end;
    select{
        color: rgba(197, 162, 20, 0.75);
        &:focus, &:active{
            color: rgba(197, 162, 20, 0.75);
        }
    }
}

.submit-btn{
    button{
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}
`;
export default Form