import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";
import { MagnifyingGlass } from "react-loader-spinner";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl flex justify-center">
      <div className=" sm:max-w-sm flex justify-center pt-10">
        <div>
          <button onClick={moveBack} className="flex items-center gap-x-2">
            <HiArrowRight className="w-5 h-5 text-secondary-600" />
            <span className="text-secondary-600 font-bold">برگشت</span>
          </button>
          <h1 className="text-xl font-bold my-8 text-error">
            صفحه‌ای که دنبالش بودید، پیدا نشد
          </h1>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="rgb(var(--color-primary-900))"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
