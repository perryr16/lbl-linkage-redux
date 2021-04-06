
export const stepFix = (step:number) => {
   if (step < 1) {
     return 6
   } else if (step > 6) {
     return 1
   } else {
     return step
   }
 }