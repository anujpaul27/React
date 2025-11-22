

const ShowCollaps = ({blog}) => {
    const {title} = blog
    return (
        <div>
            <div>
                <p className="text-sm bg-gray-700 py-2 px-1 rounded-lg border-1 my-1 border-pink-500 ">{title}</p>
            </div>
        </div>
    );
};

export default ShowCollaps;