export const getDataFromRange = (range: string) => {
  try {
    const [start, end] = range.split("-");
    return { start, end };
  } catch (error) {
    console.log("不合规范的时间范围");
    return { start: 0, end: 0 };
  }
};
