import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div className="bg-secondary-0 h-screen flex items-center">
      <div className="container xl:max-w-screen-xl">
        <CompleteProfileForm />
      </div>
    </div>
  );
}

export default CompleteProfile;
