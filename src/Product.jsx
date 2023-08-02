import { styled } from 'styled-components';

const Product = ({addElement, name, price, picture, status}) => {
    return(
        <Card status={status}>
            <div className='image1'>
                <img src={picture} alt="" />
            </div>
            <div className="description">

                <div className="text1">
                    <h2>{name}</h2>
                    <h3>{status ? price+'MAD' : 'Pas Disponible'}</h3>
                </div>
                
                <div onClick={()=>{addElement({name: name, price: price, image_path: picture, count: 1})}} tabindex="0" class="plusButton">
                    <svg class="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <g mask="url(#mask0_21_345)">
                        <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                        </g>
                    </svg>
                </div>
            </div>
            
        </Card>
    )
}

const Card = styled.div`

    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    width: 330px; 
    max-width: 100%;
    border-radius: 20px;
    padding: 2rem;
    gap: 2rem;
    z-index: 1.5;
    box-shadow: 0px 0px 20px 15px #0000001f;
    transition: all 0.2s ease-out;
    opacity: ${props => props.status ? 1 : 0.5};
    pointer-events: ${props => props.status ? 'all' : 'none'};
    justify-self: center;
    

    &:hover {
        transform: scale(1.02);
    }

    .image1 {
        height: 80%;
        width: 100%;
        border-radius: 20px;  
        display: flex;
        justify-content: center; 
        align-items: center; 
    }

    .image1 img{

        border-radius: 20px;
        width: 100%; 
        height: 100%; 
        object-fit: contain;
        
    }

    .description {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        
        border-radius: 20px;
        gap: 2.5rem;
        
    }


    .description h2{
        font-size: 1.2rem;
        letter-spacing: 2.5px;
    }

    .description h3{
        font-size: 0.8rem;
        letter-spacing: 2.5px;
        font-weight: 300;
        
    }

    .text1 {

        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    .text1 h2{

        font-size: 1rem;
        max-width: 100%;

    }
    .text1 h3 {
        font-size: 0.9rem;
        font-weight: 200;
    }
    

    .plusButton {
    /* Config start */
    --plus_sideLength: 2.5rem;
    --plus_topRightTriangleSideLength: 0rem;
    /* Config end */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: var(--plus_sideLength);
    height: var(--plus_sideLength);
    background-color: #1d2227;
    overflow: hidden;
    border: none;
    border-radius: 5px;
    }

    .plusButton::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-width: 0 var(--plus_topRightTriangleSideLength) var(--plus_topRightTriangleSideLength) 0;
    border-style: solid;
    border-color: transparent white transparent transparent;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    }

    .plusButton:hover {
    cursor: pointer;
    }

    .plusButton:hover::before {
    --plus_topRightTriangleSideLength: calc(var(--plus_sideLength) * 2);
    }

    .plusButton:focus-visible::before {
    --plus_topRightTriangleSideLength: calc(var(--plus_sideLength) * 2);
    }

    .plusButton>.plusIcon {
    fill: white;
    width: calc(var(--plus_sideLength) * 0.7);
    height: calc(var(--plus_sideLength) * 0.7);
    z-index: 1;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    }

    .plusButton:hover>.plusIcon {
    fill: black;
    transform: rotate(180deg);
    }

    .plusButton:focus-visible>.plusIcon {
    fill: black;
    transform: rotate(180deg);
    }


    @media screen and (max-width: 480px){

        
        

        .image1 {
            
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .description {
            display: flex;
            flex-direction: row;
            width: 100%;

            
        }
        
        

    }
    

`

export default Product;