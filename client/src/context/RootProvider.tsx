import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { grabCourseTranscript } from "../utils";
import AppConfig from "../config/AppConfig";
import { HomeMockResponse, ReviewMockResponse } from "./MockResponses";

interface IApplicationContext {
  data: {
    "Course Title"?: string;
    "Summary Points"?: string;
    "Teaching Style"?: string;
    "How it relates to SPEED"?: string;
    Summary: string;
    Pros: string[];
    Cons: string[];
  };
  loading: boolean;
}

const defaultContext: IApplicationContext = {
  data: {
    "Course Title": "",
    "Summary Points": "",
    "Teaching Style": "",
    "How it relates to SPEED": "",
    ...ReviewMockResponse,
  },
  loading: true,
};

const RootContext = createContext(defaultContext);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  const [apiData, setApiData] = useState(defaultContext.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const text = grabCourseTranscript();
      try {
        // conserve on OpenAPI key usage while developing locally
        let response = {
          data: { ...HomeMockResponse },
        };
        let delayTime = 2000; // artifical wait time if using mock
        if (!AppConfig.useMockAPIResponses) {
          delayTime = 0;
          // hit replace with actual API response
          response = await axios.post("https://localhost:5000", {
            text: text,
          });
        }
        console.log(response.data);
        await delay(delayTime);
        setApiData((prevData) => ({ ...prevData, ...response.data }));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <RootContext.Provider value={{ data: apiData, loading }}>
      {children}
    </RootContext.Provider>
  );
};

export const useRoot = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRoot must be used within a RootProvider");
  }
  return context;
};
