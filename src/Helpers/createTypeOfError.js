const createTypeOfError = (chapters) => {
  const camuty = [];
  if (chapters != undefined) {
    chapters.forEach((chapter) => {
      switch (chapter.title) {
        case "כמותי":
          chapter.incorrect.forEach((ans) => {
            let findData = camuty.findIndex(
              (answ) => answ["סוג הטעות"] === ans["סוג הטעות"]
            );
            if (findData === -1) {
              camuty.push({ "סוג הטעות": ans["סוג הטעות"], repeated: 1 });
            } else {
              camuty[findData].repeated += 1;
            }
          });
          break;
      }
    });
  }
  return { camuty };
};
export default createTypeOfError;
