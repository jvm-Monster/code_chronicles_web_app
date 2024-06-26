export const SearchInput = ({placeholder}:{placeholder:string}) => {
    return (
        <>
            <input type="text" placeholder={placeholder} className="input input-bordered input-info w-full max-w-full"/>
        </>
    );
};