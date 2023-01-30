import { ReactNode, useEffect, useState } from "react";

const LoadingComponent = ({ children }: { children?: any }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      let timer1 = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [isLoading]);

  return !isLoading ? children : <div>Loading</div>;
};

export default LoadingComponent;
