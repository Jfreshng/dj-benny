import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from './resources/footer-logo.png';

const Footer = () => {
    return ( 
        <div className="bg-[#FE8F8F]  space-y-1 text-center text-white flex flex-col justify-center items-center">
            <img src={logo} alt="djbenny logo" className="w-20 h-20 mt-6"/>
            <h2 className="mb-2 font-semibold text-2xl">Dj Benny</h2>
            <p>djbenny@gmail.com</p>
            <p>+2347043912400</p>
            <p>Lagos, Nigeria</p>
            <p className="space-x-3">
                <FontAwesomeIcon icon={icon({name: 'facebook', style: 'brands'})} />
                <FontAwesomeIcon icon={icon({name: 'instagram', style: 'brands'})} />
                <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />
                <FontAwesomeIcon icon={icon({name: 'whatsapp', style: 'brands'})} />
            </p>
            <p className="pb-5">© copyright 2021 Dj Benny | All rights reserved</p>
        </div>
     );
}
 
export default Footer;