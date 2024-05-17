const isDev = process.env.NODE_ENV === "development";
const isClient = typeof window !== "undefined";

const onBackToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToAnchor = (anchorName, offset?) => {
  if (!offset) {
    offset = 0;
  }
  if (anchorName) {
    // найти якорь
    let anchorElement = document.querySelector(`#${anchorName}`);
    // Если привязка, соответствующая идентификатору, существует, перейти к привязке
    const y = anchorElement.getBoundingClientRect().top + offset;
    if (anchorElement) {
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }
};

/**
 *
 * @param data array[]
 * @param size number default 2
 * @returns [array[], array[]]
 */

export { onBackToTop, scrollToAnchor, isDev, isClient };
