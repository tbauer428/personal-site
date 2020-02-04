import md5 from "blueimp-md5";

interface typeSignature {
  email: string;
  size: number;
  defaultURL?: string;
}

const getGravatarURL = ({
  email,
  size,
  defaultURL = "identicon"
}: typeSignature) => {
  let hash = md5(email.toLowerCase().trim());
  return `https://www.gravatar.com/avatar/${hash}.jpg?s=${size}&d=${encodeURIComponent(
    defaultURL
  )}`;
};

export default getGravatarURL;
