import {Link} from 'react-router-dom';
import kinoLogo from "../../../assets/LogoWhite.png"

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-4">
            <div className="flex justify-center">
                <img src={kinoLogo} className="w-20"/>
            </div>
            <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-200 drop-shadow-md">
                {heading}
            </h2>
            <p className="text-center text-sm text-gray-300 mt-4">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-[#ed647b] hover:text-[#ad4052] drop-shadow-md">
                {linkName}
            </Link>
            </p>
        </div>
    )
}