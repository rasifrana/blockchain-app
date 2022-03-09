import { BsShieldFillCheck } from "react-icons/bs";
import vector from '../../images/vector.jpg';

const Features = () => {
    return (
        <section className="w-full-max my-20 pt-20">
            <div className="flex flex-col md:flex-row justify-center items-center ">
                <div className="flex-1 px-8">
                    <div>
                        <h3 className="text-blue-400">Dynamic Trading</h3>
                        <p className="text-4xl mt-3 mb-2">Why Choose Dynamic</p>
                        <p className=" text-slate-500 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam molestiae voluptates tempore perferendis corporis.</p>

                    </div>
                    <div className="grid grid-cols-2 py-4 mt-4">
                        <div className="flex items-center justify-start my-2">
                            <BsShieldFillCheck fontSize={21} className="  mr-3" />
                            <p> Safety Comes First</p>
                        </div>
                        <div className="flex items-center justify-start my-2">
                            <BsShieldFillCheck fontSize={21} className="  mr-3" />
                            <p> Fast Transactions</p>
                        </div>
                        <div className="flex items-center justify-start my-2">
                            <BsShieldFillCheck fontSize={21} className="  mr-3" />
                            <p> Bonus and Refferal</p>
                        </div>
                        <div className="flex items-center justify-start my-2">
                            <BsShieldFillCheck fontSize={21} className="  mr-3" />
                            <p> Easy Deposit and Withdraw</p>
                        </div>
                        <div className="flex items-center justify-start my-2">
                            <BsShieldFillCheck fontSize={21} className="  mr-3" />
                            <p>Low Charges</p>
                        </div>
                        <div className="flex items-center justify-start my-2">
                            <BsShieldFillCheck fontSize={21} className="  mr-3" />
                            <p> 24/7 Support</p>
                        </div>

                    </div>

                </div>
                <div className="img-vect flex-1 p-2 flex justify-center">
                    <img src={vector} alt="" className="w-3/4 object-cover" />
                </div>


            </div>
        </section>

    );
}

export default Features;