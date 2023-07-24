const createDataMistakeReason = (chapters) => {
  const miluly = [];
  const camuty = [];
  const english = [];
  console.log(chapters);
  chapters.forEach((chapter) => {
    switch (chapter.title) {
      case "כמותי":
        chapter.incorrect.forEach((ans) => {
          camuty.push(ans["הסיבה לטעות"]);
        });
        break;
      case "מילולי":
        chapter.incorrect.forEach((ans) => {
          miluly.push(ans["הסיבה לטעות"]);
        });
        break;
      case "אנגלית":
        chapter.incorrect.forEach((ans) => {
          english.push(ans["הסיבה לטעות"]);
        });
        break;
    }
  });
  return { miluly, camuty, english };
};
export default createDataMistakeReason;
