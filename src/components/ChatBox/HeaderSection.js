import { IoCallOutline, IoCameraOutline } from "react-icons/io5";

// userName will come from outside
const headerSection = ({ userName }) => {

    return (
        <div className="  ">
            <div className="  flex justify-between pt-6">
                <h3 className=" font-semibold text-2xl  text-slate-700">
                    {userName}
                </h3>

                <div className="flex items-center gap-4">
                    <button className=" bg-slate-100 w-8 h-8 rounded-full flex justify-center items-center  text-slate-700 transition hover:shadow">
                        <IoCallOutline />

                    </button>
                    <button className="bg-slate-100 w-8 h-8 rounded-full flex justify-center items-center text-slate-700 transition hover:shadow">
                        <IoCameraOutline />
                    </button>
                </div>

            </div>

            <div className="relative  bottom-5 border-b pb-3">

                <span className="  relative bottom-[0.1rem] text-green-600 text-4xl ">
                    .
                </span>
                <span className=" text-slate-500 text-[10px] fontt col-span-1 ml-[0.1rem] ">
                    Active Now
                </span>


            </div>
        </div>

    )
}

export default headerSection