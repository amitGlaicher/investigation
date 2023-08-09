const createSolveWay = (chapters) => {
  const camuty = [];
  if (chapters != undefined) {
  chapters.forEach((chapter) => {
    if (chapter.correct.length > 0) {
      switch (chapter.correct[0].title) {
        case "כמותי":
          chapter.correct.forEach((ans) => {
            let findData = camuty.findIndex(
              (answ) => answ["דרך פתרון"] === ans["דרך פתרון"]
            );
            if (findData === -1) {
              camuty.push({ "דרך פתרון": ans["דרך פתרון"], repeated: 1 });
            } else {
              camuty[findData].repeated += 1;
            }
          });
          break;
      }
    }
  });
  chapters.forEach((chapter) => {
    if (chapter.incorrect.length > 0) {
      switch (chapter.incorrect[0].title) {
        case "כמותי":
          chapter.incorrect.forEach((ans) => {
            let findData = camuty.findIndex(
              (answ) => answ["דרך פתרון"] === ans["דרך פתרון"]
            );
            if (findData === -1) {
              camuty.push({ "דרך פתרון": ans["דרך פתרון"], repeated: 1 });
            } else {
              camuty[findData].repeated += 1;
            }
          });
          break;
      }
    }
  });
}
  return { camuty };
};
export default createSolveWay;
