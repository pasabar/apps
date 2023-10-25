import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://us-central1-pasabar.cloudfunctions.net/pasabar";
  let tokenkey = "token";
  let tokenvalue =
    "29ececb1a7801ec3f1f07d55cd05f665f18d187b252931162a21e99a11615d1f9bcdb836ee93d7a04986d7fc596dadbe9e80ec61e3530acdeb47b15fdbe6c7e7";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}
function responseData(result) {
  setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);
}
