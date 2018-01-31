// Transforms query-params template helper to what transitonTo expects
export default function transformQueryParams(transitionArgs) {
  return transitionArgs.map((arg) => {
    if (arg.isQueryParams) {
      return { queryParams: arg.values };
    } else {
      return arg;
    }
  });
}
