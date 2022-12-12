import { useState } from "react";


export const [value1, setValue1] = useState<number>(0)
export const [value2, setValue2] = useState<number>(1)
export const [value3, setValue3] = useState<number>(2)

export const ReRecommend = () => {
  setValue1(3)
  setValue2(4)
  setValue3(5)
}