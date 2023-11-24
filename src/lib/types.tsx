/* eslint-disable @typescript-eslint/no-unused-vars */
type CardTaskData = {
  id?: string,
  position: number,
  label_index?: number | undefined,
  body?: string | undefined,
  date_modified: Date | number, // Number is here due to how Date works!
  completed: boolean
}