import dayjs from "dayjs"

const Message = ({ self, text, time }) => {
    // console.log("message: ", text)
    return (
        <div className={`mb-2 ${self ? `self-end` : `self-start`}`}>
            <div className={`px-6 py-2  rounded-3xl min-w-max max-w-[80%] mr-4 shadow-md 
            ${self
                    ? `bg-orange-500 text-slate-50 shadow-orange-500/20`
                    : `bg-slate-100 text-slate-900 shadow-slate-500/20`}`}>
                {text}
            </div>

            <div className={`text-xs text-slate-500 mt-1 text-[10px] 
            ${self
                    ? `text-right mr-6`
                    : `text-left ml-4`}`}>
                {/* {time.toISOString()} */}
                {dayjs(time).format('hh:m a')}
            </div>
        </div>
    )
}

export default Message