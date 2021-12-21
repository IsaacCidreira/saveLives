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
        align-items: flex-start;
        margin-right: 62px;
        margin-left: 62px;
        
       &:not(:last-child){
            margin-bottom: 5.8rem;
        }

        img{
            max-width: 487px;
            max-height: 731px;
        }

        p{
            margin-left: 62px;
            max-width: 50%;
            position: relative;
            margin-bottom: 2rem;

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
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
           
        }
        
    }
    div:nth-child(even){
        justify-content: right;
        align-items: flex-start;
        img{
            order: 2;
            margin-left: 62px;
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
           
            
        }
    }
`