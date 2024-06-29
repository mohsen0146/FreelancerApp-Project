import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="bg-secondary-0 h-screen flex items-center">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center ">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default Auth;
