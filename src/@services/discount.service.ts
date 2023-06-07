import { isSignedIn } from "./user.service";

export const getDiscount = (total: number) => {
  const additional = isSignedIn() ? 10 : 0;
  if (total >= 1000)
    return additional + 10;
  if (total >= 500)
    return additional + 5;
  return additional;
};