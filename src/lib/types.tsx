import { UniqueIdentifier } from "@dnd-kit/core"

/* eslint-disable @typescript-eslint/no-unused-vars */
export type CardTaskData = {
  id: UniqueIdentifier,
  label_index?: number,
  body?: string,
  date_modified: Date | number, // Number is here due to how Date works!
  completed: boolean
}

export type FolderData = {
  id: UniqueIdentifier,
  title: string,
  cards: Array<CardTaskData>,
  expand?: boolean,
}