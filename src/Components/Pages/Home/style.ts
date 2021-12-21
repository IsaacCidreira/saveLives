import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`

export const SubContainer = styled.div`
    div{
        display: flex;
        align-items: center;
        margin-right: 62px;
        margin-left: 62px;

        img{
            max-width: 487px;
            max-height: 731px;
        }

        p{
            margin-left: 62px;
            max-width: 50%;
            position: relative;
        }
        p::before{
            content: '';
            width: 15px;
            height: 8px;
            background-color: var(--second-color);
            color: yellow;
            z-index: 1000;
            position: absolute;
            left: -1.4rem;
            top: .3rem;
        }
        
    }
    div:nth-child(even){
        justify-content: right;
        img{
            order: 2;
            margin-left: 62px;
        }
    }
`