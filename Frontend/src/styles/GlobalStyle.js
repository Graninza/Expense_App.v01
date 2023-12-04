import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: rgba(197, 162, 20, 0.75);
        --primary-color2: 'color: rgba(235, 174, 32, 0.80)';
        --primary-color3: 'color: rgba(235, 174, 32, 0.65)';
        --color-green: rgba(74, 194, 17, 1);
        --color-grey: rgba(170, 170, 170, 1);
        --color-accent: rgba(225, 121, 13, 0.8);
        --color-delete: rgba(182, 12, 12, 0.8);
    }

    body{
        font-family: 'Ubuntu', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(197, 162, 20, 0.75);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;