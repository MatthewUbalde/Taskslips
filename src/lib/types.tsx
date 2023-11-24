import { ReactNode } from "react"

/* eslint-disable @typescript-eslint/no-unused-vars */
type CardTaskData = {
  id?: string,
  position: number,
  label_index?: number | undefined,
  children?: ReactNode,
  date_modified: Date | number, // Number is here due to how Date works!
  completed: boolean
}

type FolderData = {
  id?: string,
  position: number,
  title: string,
  cards?: Array<CardTaskData>,
  expand?: boolean,
}