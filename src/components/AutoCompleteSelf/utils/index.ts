// export const getIdWithKeyword = (keyword: string): string[] => {
//   const numArr: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   const strArr: string[] = [];

//   let str = '';

//   for (const char of keyword) {
//     if (numArr.includes(char)) {
//       str = str + char;
//     } else {
//       if (str !== '') {
//         strArr.push(str);
//         str = '';
//       }
//     }
//   }
//   if (str !== '') {
//     strArr.push(str);
//   }

//   return strArr;
// };

function isNumeric(str: string): boolean {
  return !isNaN(+str) && str.trim() !== '';
}

export const getIdWithKeyword = (keyword: string): { isCanAllBeNumbers: boolean; strArr: string[] } => {
  const strArr = keyword
    .trim()
    .split(/,+|，+|；+|;+|\n+/)
    .filter((item) => item !== '');

  const isCanAllBeNumbers = strArr.every(isNumeric);

  return { isCanAllBeNumbers, strArr };
};
