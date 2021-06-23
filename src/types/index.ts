export interface IProject {
  id: number;
  title: string;
}

export interface IAnswer {
  id: number;
  comment: string;
  important: number;
  project: IProject;
}

export interface IQuestion {
  id: number;
  priority: number;
  inputType: string;
  description: string;
  example: string;
  selectOptions: string[];
  answers?: IAnswer[];
}

export interface IQuestionPaper {
  id: number;
  startDate: string;
  endDate: string;
  questions: IQuestion[];
}

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
    projects: IProject[];
  }[];
}

export interface IArchive {
  id: number;
  startDate: string;
  endDate: string;
  createdDateTime: string;
  selectedProjects: IProject[];
  questions: IQuestion[];
}

export interface IPreviousAnswers {
  id: number;
  answers: IAnswer[];
}
