export const checker = (first, firstString, second, secondString, isEqual) => {
  return (
    (first.replace(firstString, "") === second.replace(secondString, "")) ===
    isEqual
  );
};
