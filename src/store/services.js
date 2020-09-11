import axios from "axios"
import {
  NEW_CONNECTOR_JHGJHG_USERNAME,
  NEW_CONNECTOR_JHGJHG_PASSWORD
} from "react-native-dotenv"
const newConnectorjhgjhg = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/10626/storyboard/10713/",
  auth: {
    username: NEW_CONNECTOR_JHGJHG_USERNAME,
    password: NEW_CONNECTOR_JHGJHG_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
