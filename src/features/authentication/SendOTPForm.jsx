import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  return (
    <div>
      <p className="font-bold text-secondary-800 text-lg mb-8 ">
        ورود | ثبت نام
      </p>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          register={register}
         
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
