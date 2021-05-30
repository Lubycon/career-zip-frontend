export interface IArchivingList {
  pageDetails: {
    totalPages: number;
    currentPage: number;
    totalDataCount: number;
    currentPageSize: number;
    firstPage: boolean;
    lastPage: boolean;
  };
  archives: {
    id: number;
    startDate: string;
    endDate: string;
    createdDateTime: string;
    projects: { id: number; title: string }[];
  }[];
}

export interface IArchive {
  id: number;
  startDate: string;
  endDate: string;
  createdDateTime: string;
  selectedProjects: { id: number; title: string }[];
  questions: {
    id: number;
    priority: number;
    inputType: string;
    description: string;
    example: string | null;
    selectOptions: string[];
    anwsers: {
      id: number;
      comment: string;
      important: number;
      project: { id: number; title: string };
    }[];
  }[];
}
