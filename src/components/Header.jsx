import Header_image from '../assets/bg-shadow.png'

const Header = () => {
    return (
        <div className='w-10/12 mx-auto bg-cover bg-center bg-no-repeat min-h-96 rounded-2xl'
        style={{backgroundImage : `url(${Header_image})`}}
        >
            <p>Coded</p>
        </div>
    );
};

export default Header;