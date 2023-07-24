const createDataGraph = (chapters) => {
  const miluly = [];
  const camuty = [];
  const english = [];
  chapters.forEach((chapter) => {
    switch (chapter.title) {
      case "כמותי":
        chapter.correct.forEach((ans) => {
          let findData = camuty.find(
            (answ) => answ["גורם קושי"] === ans["גורם קושי"]
          );
          if (!findData) {
            camuty.push({ "גורם קושי": ans["גורם קושי"], repeated: 1 });
          } else {
            camuty[findData].repeated += 1;
          }
        });
        break;
      case "מילולי":
        chapter.correct.forEach((ans) => {
          let findData = miluly.find(
            (answ) => answ["גורם קושי"] === ans["גורם קושי"]
          );
          if (!findData) {
            miluly.push({ "גורם קושי": ans["גורם קושי"], repeated: 1 });
          } else {
            miluly[findData].repeated += 1;
          }
        });
        break;
    }
  });
};
export default createDataGraph