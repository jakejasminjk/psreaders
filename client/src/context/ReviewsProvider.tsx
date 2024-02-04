import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { grabCourseReviews } from "../utils";
import AppConfig from "../config/AppConfig";
import { HomeMockResponse, ReviewMockResponse } from "./MockResponses";

interface IReviewContext {
  data: {
    Summary: string;
    Pros: string[];
    Cons: string[];
  };
  loading: boolean;
}

const defaultContext: IReviewContext = {
  data: {
    Summary: "",
    Pros: [],
    Cons: [],
  },
  loading: true,
};

const ReviewsContext = createContext(defaultContext);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const ReviewsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [apiData, setApiData] = useState(defaultContext.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const text = grabCourseReviews();
      try {
        // conserve on OpenAPI key usage while developing locally
        let response = {
          data: { ...HomeMockResponse },
        };
        let delayTime = 2000; // artifical wait time if using mock
        if (!AppConfig.useMockAPIResponses) {
          delayTime = 0;
          // hit replace with actual API response
          response = await axios.post("https://localhost:5000/reviews", {
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
    <ReviewsContext.Provider value={{ data: apiData, loading }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewsProvider");
  }
  return context;
};
