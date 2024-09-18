import Groq from "groq-sdk";
import { groq_api_key } from "./Constants";

const groq = new Groq({ apiKey: groq_api_key, dangerouslyAllowBrowser: true });
export default groq;
