import { AiFillBank } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { BiWallet } from "react-icons/bi";
import { FcNeutralTrading } from "react-icons/fc";


const Transactions = () => {
    const ServiceCard = ({ icon, heading, para, }) => {
        return (
            <div className="card-comp flex justify-center items-center p-4  bg-white text-left rounded-2xl  mb-3 shadow-xl shadow-orange-100">
                <div className="icon p-3 mr-2 rounded-full bg-blue-200 ">
                    {icon}
                </div>
                <div className="card-data">
                    <h2 className="font-bold mb-2 text-slate-800">{heading}</h2>
                    <p className="text-sm text-slate-500">{para}</p>
                </div>

            </div>
        );
    }



    return (
        <section className="my-20  w-full-max">
            <div className="flex md:flex-row flex-col p-4">
                <div className="service-content px-8 mt-10 mb-10 text-center md:text-left">
                    <h2 className="text-blu-300">Dynamic Trading</h2>
                    <p className=" text-4xl my-8">Start Trading In FewSteps </p>

                    <button className="bg-gradient-to-r from-purple-600 to-purple-900 text-white py-3 px-4 rounded-3xl">Start Trading</button>


                </div>
                <div className="service-grid grid grid-cols-1 gap-4 md:grid-cols-2 w-full md:w-3/4 ">
                    <div className="service-ft-1 mt-10">
                        <ServiceCard icon={<VscAccount fontSize={21} color={"blue"} />} heading="Create Account" para='Sign up with Email and Mobile in 5 minutes' />
                        <ServiceCard icon={<BiWallet fontSize={21} color={"maroon"} />} heading="Add Fund in Wallet" para='Quickly add Money to your Investment wallet.' />
                    </div>
                    <div className="service-ft-2">
                        <ServiceCard icon={<AiFillBank fontSize={21} color={"purple"} />} heading="Verify Your Bank" para='Verify your Bank Account in Easy Way' />
                        <ServiceCard icon={<FcNeutralTrading fontSize={21} color={"orange"} />} heading="Start Trading Instantly" para='Buy and Sell Top Coins at Market Price' />
                    </div>

                </div>


            </div>
        </section>
    );
}

export default Transactions;