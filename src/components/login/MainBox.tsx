import LinkButton from "@/components/common/buttons/LinkButton";

const MainBox = () => {
  return (
    <>
      <div className="LoginBox">
        <h1 className="logo-img"></h1>
        <div>
          <LinkButton to="/client/login" className="LoginBtn Type1">
            로그인
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default MainBox;
