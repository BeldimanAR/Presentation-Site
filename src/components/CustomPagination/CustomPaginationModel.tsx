export interface IProps {
  pageSize: number;
  setProjects: (page: any) => void;
  list: object[];
  onClick?: any;
  page?: number;
  id: number;
}
