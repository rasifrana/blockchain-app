


const Numbers = () => {
    return (
        <div className="grid grid-cols-3 py-5 md:my-16">
            <div className="flex flex-col justify-center items-center border-r-2 px-5">
                <h2 className="text-xl sm:text-4xl font-bold">$2 M+</h2>
                <p className="text-xs text-center sm:text-sm text-slate-500">Users Register</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r-2 px-5">
                <h2 className="text-xl sm:text-4xl font-bold">$100 M+</h2>
                <p className="text-xs text-center sm:text-sm text-slate-500">Crypto Invested</p>
            </div>
            <div className="flex flex-col justify-center items-center border-r-2 px-5">
                <h2 className="text-xl sm:text-4xl font-bold">$500 M+</h2>
                <p className="text-xs text-center sm:text-sm text-slate-500">Users Purchase</p>
            </div>

        </div>
    );
}

export default Numbers;