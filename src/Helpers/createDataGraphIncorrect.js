const createDataGraphIncorrect = (chapters) => {
  const miluly = [];
  const camuty = [];
  const english = [];
  if (chapters != undefined) {
    chapters.forEach((chapter) => {
      switch (chapter.title) {
        case "כמותי":
          chapter.incorrect.forEach((ans) => {
            let findData = camuty.findIndex(
              (answ) => answ["גורם קושי"] === ans["גורם קושי"]
            );
            if (findData === -1) {
              camuty.push({ "גורם קושי": ans["גורם קושי"], repeated: 1 });
            } else {
              camuty[findData].repeated += 1;
            }
          });
          break;
        case "מילולי":
          chapter.incorrect.forEach((ans) => {
            let findData = miluly.findIndex(
              (answ) => answ["גורם קושי"] === ans["גורם קושי"]
            );
            if (findData === -1) {
              miluly.push({
                "גורם קושי": ans["גורם קושי"] || "לא קיים",
                repeated: 1,
              });
            } else {
              miluly[findData].repeated += 1;
            }
          });
          break;
        case "אנגלית":
          chapter.incorrect.forEach((ans) => {
            let findData = english.findIndex(
              (answ) => answ["גורם קושי"] === ans["גורם קושי"]
            );
            if (findData === -1) {
              english.push({ "גורם קושי": ans["גורם קושי"], repeated: 1 });
            } else {
              english[findData].repeated += 1;
            }
          });
          break;
      }
    });
  }
  return { miluly, camuty, english };
};
export default createDataGraphIncorrect;
