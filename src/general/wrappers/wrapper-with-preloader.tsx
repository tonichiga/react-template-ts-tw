// import { Bars } from "react-loader-spinner";

const WrapperWithPreloader = ({ children }) => {
  return (
    <div>
      <div>
        {/* <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /> */}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default WrapperWithPreloader;
