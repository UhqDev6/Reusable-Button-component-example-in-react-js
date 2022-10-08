const Button = (props) => {
    const { className = 'bg-sky-700', text, children } = props;
    return (
        <>
            <button {...props} className={`${className} [&>svg]:w-5 [$>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded-lg`}>
                {text || children}
            </button>
        </>
    );
};

export default Button;
