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
