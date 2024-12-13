//Hacemos una funcion y lo que renderiza
import { Cards } from "./Cards";
import './Styles/Cards.css'

export function App()   
{
    return(
       <body>
            <header>
                <nav>
                    <ul className="headUl">
                        <li className="headLi">
                            <a href="https://www.facebook.com/" title="Facebook" target="_blank">
                            <svg width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#000000"/>
                            </svg>
                            </a>
                        </li>
                        <li className="headLi">
                            <a href="https://www.x.com/" title="X" target="_blank">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Warning / Help">
                            <path id="Vector" d="M8.19531 8.76498C8.42304 8.06326 8.84053 7.43829 9.40137 6.95899C9.96221 6.47968 10.6444 6.16501 11.373 6.0494C12.1017 5.9338 12.8486 6.02202 13.5303 6.3042C14.2119 6.58637 14.8016 7.05166 15.2354 7.64844C15.6691 8.24521 15.9295 8.95008 15.9875 9.68554C16.0455 10.421 15.8985 11.1581 15.5636 11.8154C15.2287 12.4728 14.7192 13.0251 14.0901 13.4106C13.4611 13.7961 12.7377 14.0002 12 14.0002V14.9998M12.0498 19V19.1L11.9502 19.1002V19H12.0498Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg>
                            </a>
                        </li>
                        <li className="headLi">Aldama</li>
                        <li className="headLi">Lopez</li>
                    </ul>
                </nav>
                

            </header>

             <div className="mainContCards">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>

            </div>   

            <div className="Horizontal">
            </div>

            <div className="footerHorizontal">
            </div>

            
            <footer>
                <p className="Marca">Marca ACME</p>
            </footer>
        
        </body>
        
    );
}