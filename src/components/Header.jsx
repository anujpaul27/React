import Header_image from '../assets/bg-shadow.png'
import Header_logo from '../assets/banner-main.png'

const Header = () => {
    return (
        <div className='w-10/12 mx-auto bg-cover bg-center bg-no-repeat min-h-96 rounded-2xl'
        style={{backgroundImage : `url(${Header_image})`}}
        >
        
        <div className='flex flex-col mx-auto gap-4'>
            <img className='mx-auto' src={Header_logo} alt="" />
            <h1 className='text-3xl font-bold mx-auto'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h4 className='text-xl mx-auto text-gray-400'>Beyond Boundaries Beyond Limits</h4>
            <button className='btn w-40 mx-auto btn-secondary'> Claim Free Credit</button>
        </div>
        </div>
    );
};

export default Header;