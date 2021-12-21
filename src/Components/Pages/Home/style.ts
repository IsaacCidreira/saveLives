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
        margin-right: 32px;
        margin-left: 32px;
        
       
       &:not(:last-child){
            margin-bottom: 5.8rem;
        }

        img{
            max-width: 487px;
            max-height: 731px;
        }

        p{
            max-width: 100%;
            position: relative;
            margin-bottom: 2rem;
            font-size: 1vw;

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
    @media(max-width:886px){

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            flex-direction: column;
            div{
                max-width: 350px;
                    p{ 
                        font-size: .8rem;
                    }
                    p:first-child{ 
                        margin-top: 3rem;
                    }
              
            }
            
            
            img{
                max-width: 60%;
                max-height: 100%;
                margin-left: 0px;
                margin-right: 0px;
            }
        }

       
        div:nth-child(even){
            align-items: center;
            justify-content: right;
            align-items: center !important;
            img{
                order: 1 ;
                margin-left:0px;
                
            }
            div{
                order: 2;
            }
       }
           
       @media(max-width:400px){
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            flex-direction: column;
            div{
                max-width: 250px;
                    p{ 
                        font-size: .7rem;
                    }
                    p:first-child{ 
                        margin-top: 3rem;
                    }
              
            }
        }
        
        }
}
`