export const onChangePageNumber = (pageNumber, pageSize) => {
    return pageNumber === 1 ? 0 : (pageNumber - 1) * (pageSize)
  };
  
  export default onChangePageNumber;